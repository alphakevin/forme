import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';
import * as icons from '../../../builder/assets/icons';
import { FormDndData } from '../../dnd/draggable';
import { LibraryComponentType } from '../../types/common';
import { ComponentIcon } from './ComponentIcon';
import { getComponentConfig } from './config';
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
    } as FormDndData<T>,
  });
  const style = {
    transform: CSS.Translate.toString(transform),
  };
  const element = (
    <div className="ComponentItem">
      <ComponentIcon className="icon" item={config} />
      <div className="name">{config.name}</div>
    </div>
  );
  return (
    <>
      {isDragging &&
        React.cloneElement(element, {
          ref: undefined,
          style: { position: 'absolute', transform: 'translateY(-6px)' },
        })}
      {React.cloneElement(element, {
        ref: setNodeRef,
        style,
        ...listeners,
        ...attributes,
      })}
    </>
  );
}
