import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { FormDndData, getDraggingData, isDroppable } from '../../dnd/draggable';
import { ComponentData } from '../../types/form-data';
import './DropArea.less';

export interface FormSectionProps {
  item: ComponentData;
  prefix?: string;
  index: number;
}

export function DropArea(props: FormSectionProps): JSX.Element {
  const { item, prefix = 'global', index } = props;
  const droppableData: FormDndData = {
    from: 'Builder',
    item: item,
  };
  const { setNodeRef, isOver, over, active } = useDroppable({
    id: `Component-${prefix}-${item.id}`,
    data: droppableData,
  });
  const dropOver = isOver && isDroppable(droppableData, getDraggingData(active));
  return (
    <div
      className={clsx('DropArea', {
        dropOver,
      })}
      ref={setNodeRef}
    />
  );
}
