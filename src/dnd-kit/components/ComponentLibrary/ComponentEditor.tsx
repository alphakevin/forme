import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import * as icons from '../../../builder/assets/icons';
import { filterTypes, getComponentConfig } from '../../config/components';
import { DraggingData } from '../../dnd/draggable';
import { useActiveItemType } from '../../dnd/hooks';
import { LibraryComponentType } from '../../types/common';
import { ComponentDataByType } from '../../types/form-data';
import { CommonFieldEditor } from './editors/CommonFieldEditor';
import './ComponentEditor.less';

export interface ComponentItemProps<T extends LibraryComponentType> {
  item: ComponentDataByType<T>;
  index: number;
}

export function ComponentEditor<T extends LibraryComponentType>(
  props: ComponentItemProps<T>
): JSX.Element {
  const { item, index } = props;
  const config = getComponentConfig(item.type);
  const activeType = useActiveItemType();

  let expanded = true;
  if (activeType) {
    const activeConfig = getComponentConfig(activeType);
    const childTypes = filterTypes((c) => c.level >= activeConfig.level);
    if (childTypes.includes(item.type)) {
      expanded = false;
    }
  }

  const { listeners, setNodeRef } = useDraggable({
    id: `Component-Editor-${item.id}`,
    data: {
      from: 'Builder',
      item,
    } as DraggingData,
  });

  return (
    <div className="ComponentEditor">
      <div className="header" ref={setNodeRef} {...listeners}>
        <img className="icon" src={icons[item.type]} />
        <div className="name">
          {config.name} - {index + 1}
        </div>
      </div>
      {expanded && (
        <div className="fields">
          <CommonFieldEditor data={item} />
        </div>
      )}
    </div>
  );
}
