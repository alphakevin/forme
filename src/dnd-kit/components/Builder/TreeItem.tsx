import React, { Fragment, useCallback, useContext, useEffect, useMemo } from 'react';
import { useDraggable, useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { DraggingData } from '../../dnd/draggable';
import { ComponentData } from '../../types/form-data';
import { isContainerComponent, isFormFieldComponent } from '../../utils/form';
import { ComponentIcon } from '../ComponentLibrary/ComponentIcon';
import { getComponentConfig } from '../ComponentLibrary/config';
import { DropArea } from './DropArea';
import './TreeItem.less';
import { TreeContext } from './TreeContext';

interface TreeItemProps {
  item: ComponentData;
  index: number;
}

export function TreeItem(props: TreeItemProps) {
  const { item, index } = props;

  const { expandedItems, toggle, expand } = useContext(TreeContext);
  const expanded = expandedItems.includes(item.id);
  const config = getComponentConfig(item.type);

  const droppableData: DraggingData = {
    from: 'Builder',
    item: item,
  };
  const { setNodeRef: setDroppableNode, isOver } = useDroppable({
    id: `Component-tree-content-${item.id}`,
    data: droppableData,
  });

  const {
    listeners,
    setNodeRef: setDraggableNode,
    isDragging,
  } = useDraggable({
    id: `Component-Tree-${item.id}`,
    data: {
      from: 'Builder',
      item,
    } as DraggingData,
  });

  const expandItem = useCallback(() => expand(item.id), []);

  useEffect(() => {
    if (isOver && isContainerComponent(item)) {
      window.requestAnimationFrame(expandItem);
    }
  }, [isOver]);

  const title = isContainerComponent(item)
    ? item.title
    : isFormFieldComponent(item)
    ? item.question
    : `${config.name}`;

  return (
    <li className={clsx('TreeItem', { expanded })}>
      <div ref={setDraggableNode} {...listeners}>
        <div
          ref={setDroppableNode}
          className={clsx('content', { dragOver: isOver })}
          onClick={() => toggle(item.id)}
        >
          <ComponentIcon className="icon" item={item} size={24} />
          <span className="title">
            {item.type} - {title}
          </span>
        </div>
      </div>
      <ul className="children">
        {isContainerComponent(item) && item.children.length > 0 && (
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
