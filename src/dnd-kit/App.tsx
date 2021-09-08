import React, { FC, useEffect, useMemo, useState } from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import Editor, { EditorProps } from '@monaco-editor/react';
import { Layout, Menu, Tabs } from 'antd';
import { autorun } from 'mobx';
import styles from '../builder/App.module.less';
import { observer, BuilderStore, TreeNode } from '../builder/models';
import { defaultSchema } from '../builder/seeds';
import { Builder } from './components/Builder/Builder';
import { Toolbox } from './components/ComponentLibrary/Toolbox';

const baseUrl = import.meta.env.BASE_URL;

const monacoEditorOptions: EditorProps['options'] = {
  contextmenu: false,
  readOnly: true,
  scrollBeyondLastLine: false,
  minimap: { enabled: false },
};

const handleDragEnd = (event: DragEndEvent) => {
  console.log(event);
};

export const App: FC = observer(() => {
  const [tabActiveKey, setTabActiveKey] = useState('1');

  const builderStore = (window['store'] = useMemo(() => {
    try {
      const schema = JSON.parse(sessionStorage.getItem('forme-schema')) ?? defaultSchema;
      return new BuilderStore(schema);
    } catch {
      return new BuilderStore(defaultSchema);
    }
  }, []));

  useEffect(
    () =>
      autorun(() => {
        try {
          sessionStorage.setItem('forme-schema', JSON.stringify(builderStore.treeNode.toSchema()));
        } catch {}
      }),
    [builderStore]
  );
  return (
    <DndContext onDragEnd={handleDragEnd}>
      <Layout className={styles.app}>
        <Layout.Header className={styles.header}>
          <h1>Form Builder</h1>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['dnd-kit']}
            onSelect={(e) => (location.href = `${baseUrl}${e.key}.html`)}
          >
            <Menu.Item key="index">Builder</Menu.Item>
            <Menu.Item key="dnd-kit">Dnd Kit</Menu.Item>
            <Menu.Item key="formily">Formily</Menu.Item>
          </Menu>
        </Layout.Header>

        <Layout>
          <Layout.Sider className={styles.outline} width={240}>
            <h2>Form Outline</h2>
          </Layout.Sider>

          <Layout.Content className={styles.fields}>
            <Tabs
              className={styles.tabs}
              type="card"
              activeKey={tabActiveKey}
              onTabClick={setTabActiveKey}
            >
              <Tabs.TabPane tab="Design" key="1" style={{ overflowY: 'scroll' }}>
                {/* <Builder treeNode={builderStore.treeNode} /> */}
                <Builder />
              </Tabs.TabPane>
              <Tabs.TabPane tab="Schema" key="2">
                <Editor
                  language="json"
                  value={JSON.stringify(builderStore.treeNode.toSchema(), null, 2)}
                  options={monacoEditorOptions}
                />
              </Tabs.TabPane>
              {/* <Tabs.TabPane tab="Preview" key="3">
                  <Preview schema={builderStore.schema} />
                </Tabs.TabPane> */}
            </Tabs>
          </Layout.Content>

          <Layout.Sider className={styles.library} width={240}>
            <h2>Component Library</h2>
            <Toolbox />
          </Layout.Sider>
        </Layout>
      </Layout>
    </DndContext>
  );
});
