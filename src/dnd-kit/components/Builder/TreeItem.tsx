import React, { Fragment, useCallback, useContext, useEffect, useMemo } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { filterTypes, getComponentConfig } from '../../config/components';
import { DraggingData, getDraggingData } from '../../dnd/draggable';
import { ComponentData } from '../../types/form-data';
import { getComponentTitle, isContainerComponent, isFormFieldComponent } from '../../utils/form';
import { ComponentIcon } from '../ComponentLibrary/ComponentIcon';
import { DropArea } from './DropArea';
import './TreeItem.less';
import { TreeContext } from './TreeContext';

interface TreeItemProps {
  item: ComponentData;
  index: number;
}

export function TreeItem(props: TreeItemProps) {
  const { item, index } = props;

  const { expandedItems, collapsedTypes, toggle, expand } = useContext(TreeContext);

  const droppableData: DraggingData = {
    from: 'Builder',
    item: item,
  };

  const {
    setNodeRef: setDroppableNode,
    isOver,
    active,
  } = useDroppable({
    id: `Component-tree-content-${item.id}`,
    data: droppableData,
  });

  const { listeners, setNodeRef: setDraggableNode } = useDraggable({
    id: `Component-Tree-${item.id}`,
    data: {
      from: 'Builder',
      item,
    } as DraggingData,
  });

  const currentConfig = getComponentConfig(item.type);
  const activeType = getDraggingData(active)?.item.type;
  const activeConfig = getComponentConfig(activeType);

  const expanded = expandedItems.includes(item.id) && !collapsedTypes.includes(item.type);

  const expandItem = useCallback(() => expand(item.id), []);

  useEffect(() => {
    let timer = 0;
    if (isOver && activeConfig.level > currentConfig.level) {
      window.setTimeout(expandItem, 200);
    }
    return () => window.clearTimeout(timer);
  }, [isOver, currentConfig, activeConfig]);

  const isContainer = isContainerComponent(item);
  const title = getComponentTitle(item);

  const scrollToItem = useCallback(
    (event: React.MouseEvent) => {
      event.stopPropagation();
      const element = document.querySelector(`[data-id='item-${item.id}']`);
      element.scrollIntoView({ behavior: 'smooth' });
    },
    [item]
  );

  return (
    <li className={clsx('TreeItem', { expanded })}>
      <div ref={setDraggableNode} {...listeners}>
        <div
          ref={setDroppableNode}
          className={clsx('content', { dragOver: isOver })}
          data-id={item.id}
          onClick={scrollToItem}
        >
          <div
            className="icon"
            onClick={() => toggle(item.id)}
            title={expanded ? 'Collapse' : 'Expand'}
          >
            <ComponentIcon item={item} size={24} />
          </div>
          <span className="title">{title}</span>
          {isContainer && !expanded && <span className="child-count">{item.children.length}</span>}
        </div>
      </div>
      <ul className="children">
        {isContainer && expanded && (
          <>
            {item.children.map((child: ComponentData, index: number) => (
              <Fragment key={child.id}>
                <DropArea id={child.id} item={item} prefix="tree" index={index} />
                <TreeItem item={child} index={index} />
              </Fragment>
            ))}
            <DropArea id="last" item={item} prefix="tree-last" index={item.children.length + 1} />
          </>
        )}
      </ul>
    </li>
  );
}
