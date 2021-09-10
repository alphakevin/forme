import React, { useMemo } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import * as icons from '../../../builder/assets/icons';
import { getComponentConfig } from '../../config/components';
import { DraggingData } from '../../dnd/draggable';
import { LibraryComponentType } from '../../types/common';
import { ComponentIcon } from './ComponentIcon';
import './ComponentItem.less';

export interface ComponentItemProps<T extends LibraryComponentType> {
  type?: T;
}

export function ComponentItem<T extends LibraryComponentType>(
  props: ComponentItemProps<T>
): JSX.Element {
  const { type } = props;
  const config = getComponentConfig(type);

  const { attributes, listeners, setNodeRef, transform, isDragging } = useDraggable({
    id: `Component-${type}`,
    data: {
      from: 'Library',
      item: config.getData(),
    } as DraggingData,
  });

  return (
    <div className="ComponentItem" ref={setNodeRef} {...listeners} {...attributes}>
      <ComponentIcon className="icon" item={config} />
      <div className="name">{config.name}</div>
    </div>
  );
}
