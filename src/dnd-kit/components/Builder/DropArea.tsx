import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { DraggingData, getDraggingData, isDroppable } from '../../dnd/draggable';
import { ComponentData } from '../../types/form-data';
import './DropArea.less';

export interface FormSectionProps {
  id: string;
  item: ComponentData;
  prefix?: string;
  index: number;
}

export function DropArea(props: FormSectionProps): JSX.Element {
  const { id, item, prefix = 'global', index } = props;
  const droppableData: DraggingData = {
    from: 'Builder',
    item: item,
  };
  const { setNodeRef, isOver, over, active } = useDroppable({
    id: `Component-${prefix}-${id}-${item.id}`,
    data: droppableData,
  });
  const dropOver = isOver && isDroppable(droppableData, getDraggingData(active));
  return (
    <div
      className={clsx('DropArea', {
        dropOver,
      })}
      data-item={JSON.stringify({ ...item, children: undefined })}
      ref={setNodeRef}
    />
  );
}
