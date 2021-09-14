import React, { FC, useCallback, useEffect, useMemo, useState } from 'react';
import {
  closestCenter,
  DndContext,
  DragEndEvent,
  DragOverlay,
  DragStartEvent,
  getBoundingClientRect,
  MouseSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import Editor, { EditorProps } from '@monaco-editor/react';
import { Layout, Menu, Switch, Tabs } from 'antd';
import { autorun } from 'mobx';
import styles from '../builder/App.module.less';
import { observer, BuilderStore } from '../builder/models';
import { defaultSchema } from '../builder/seeds';
import { Debug } from './Debug';
import { Builder } from './components/Builder/Builder';
import { Tree } from './components/Builder/Tree';
import { DraggingItem } from './components/ComponentLibrary/DraggingItem';
import { Toolbox } from './components/ComponentLibrary/Toolbox';
import { DraggingData } from './dnd/draggable';
import { snapIconToCursor } from './dnd/modifiers';
import { demoForm } from './store/fixtures';
import { ComponentData } from './types/form-data';

const baseUrl = import.meta.env.BASE_URL;

const monacoEditorOptions: EditorProps['options'] = {
  contextmenu: false,
  readOnly: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
};

export const App: FC = observer(() => {
  const [tabActiveKey, setTabActiveKey] = useState('1');
  const [draggingData, setDraggingData] = useState<DraggingData>(null);
  const [enableDebug, setEnableDebug] = useState(false);

  const mouseSensor = useSensor(MouseSensor, {
    // Require the mouse to move by 10 pixels before activating
    activationConstraint: {
      distance: 10,
    },
  });

  const sensors = useSensors(mouseSensor);

  // const builderStore = (window['store'] = useMemo(() => {
  //   try {
  //     const schema = JSON.parse(sessionStorage.getItem('forme-schema')) ?? defaultSchema;
  //     return new BuilderStore(schema);
  //   } catch {
  //     return new BuilderStore(defaultSchema as any);
  //   }
  // }, []));

  // useEffect(
  //   () =>
  //     autorun(() => {
  //       try {
  //         sessionStorage.setItem('forme-schema', JSON.stringify(builderStore.treeNode.toSchema()));
  //       } catch {}
  //     }),
  //   [builderStore]
  // );

  const handleDragStart = useCallback((event: DragStartEvent) => {
    console.log(event.active.data);
    setDraggingData(event.active.data.current as DraggingData);
  }, []);

  const handleDragEnd = useCallback((event: DragEndEvent) => {
    console.log('DragEnd: ', event.active, ' drops one ', event.over);
    setDraggingData(null);
  }, []);

  return (
    <DndContext
      sensors={sensors}
      collisionDetection={closestCenter}
      measuring={{
        draggable: {
          measure: (node) => {
            const rect = getBoundingClientRect(node);
            const width = 210;
            const height = 56;
            return {
              ...rect,
              width,
              height,
              right: rect.left + width,
              bottom: rect.top + height,
            };
          },
        },
        droppable: {
          measure: (node) => {
            const rect = getBoundingClientRect(node);
            if (rect.height > 10) return rect;
            // const width = 210;
            const height = 56;
            // const left = rect.left + rect.width / 2 - width / 2;
            const top = rect.top - height / 2;
            return {
              ...rect,
              // width,
              height,
              // left,
              top,
              // right: left + width,
              bottom: top + height,
              offsetTop: rect.offsetTop - height / 2,
            };
          },
        },
      }}
      onDragStart={handleDragStart}
      onDragEnd={handleDragEnd}
    >
      <Layout className={styles.app}>
        <Layout.Header className={styles.header}>
          <h1>Form Builder</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['index']}
            onSelect={(e) => (location.href = `${baseUrl}${e.key}.html`)}
          >
            <Menu.Item key="builder">Builder</Menu.Item>
            <Menu.Item key="index">Dnd Kit</Menu.Item>
            <Menu.Item key="formily">Formily</Menu.Item>
          </Menu>
        </Layout.Header>

        <Layout>
          <Layout.Sider className={styles.outline} width={240} style={{ overflowY: 'auto' }}>
            <Tree item={demoForm} />
          </Layout.Sider>

          <Layout.Content className={styles.fields}>
            <Tabs
              className={styles.tabs}
              type="card"
              activeKey={tabActiveKey}
              onTabClick={setTabActiveKey}
            >
              <Tabs.TabPane tab="Design" key="1" style={{ overflowY: 'auto' }}>
                {/* <Builder treeNode={builderStore.treeNode} /> */}
                <Builder />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Schema" key="2">
                {/* <Editor
                  language="json"
                  value={JSON.stringify(builderStore.treeNode.toSchema(), null, 2)}
                  options={monacoEditorOptions}
                /> */}
              </Tabs.TabPane>
              {/* <Tabs.TabPane tab="Preview" key="3">
                  <Preview schema={builderStore.schema} />
                </Tabs.TabPane> */}
            </Tabs>
          </Layout.Content>

          <Layout.Sider className={styles.library} width={240}>
            <h2>Debugging</h2>
            <p>
              <label>
                <b>Show Active Container </b>
                <Switch checked={enableDebug} onChange={(checked) => setEnableDebug(checked)} />
              </label>
            </p>
            <h2>Component Library</h2>
            <Toolbox />
          </Layout.Sider>
        </Layout>
      </Layout>

      <DragOverlay modifiers={[snapIconToCursor]}>
        <DraggingItem data={draggingData} />
      </DragOverlay>

      {enableDebug && <Debug />}
    </DndContext>
  );
});
