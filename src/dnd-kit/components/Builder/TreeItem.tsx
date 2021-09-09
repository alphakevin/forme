import React, { Fragment, useContext, useEffect } from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { FormDndData } from '../../dnd/draggable';
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
  const config = getComponentConfig(item.type);
  const title = isContainerComponent(item)
    ? item.title
    : isFormFieldComponent(item)
    ? item.question
    : `${config.name}`;
  const { expandedItems, toggle, expand } = useContext(TreeContext);
  const droppableData: FormDndData = {
    from: 'Builder',
    item: item,
  };
  const { setNodeRef, isOver, over, active } = useDroppable({
    id: `Component-tree-content-${item.id}`,
    data: droppableData,
  });
  useEffect(() => {
    let timer = 0;
    if (isOver) {
      timer = window.setTimeout(() => expand(item.id), 300);
    }
    return () => window.clearTimeout(timer);
  }, [isOver]);
  return (
    <li className={clsx('TreeItem', { expanded: expandedItems.includes(item.id) })}>
      <div ref={setNodeRef} className="content" onClick={() => toggle(item.id)}>
        <ComponentIcon item={item} size={24} />
        {item.type} - {title}
      </div>
      <ul className="children">
        {isContainerComponent(item) && (
          <>
            {item.children.map((child: ComponentData, index: number) => (
              <Fragment key={child.id}>
                <DropArea item={child} prefix="tree" index={index} />
                <TreeItem item={child} index={index} />
              </Fragment>
            ))}
            <DropArea item={item} prefix="tree-last" index={item.children.length + 1} />
          </>
        )}
      </ul>
    </li>
  );
}
