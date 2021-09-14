import React from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { DraggingData } from '../../dnd/draggable';
import { useDropAcceptable } from '../../dnd/hooks';
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
  const acceptable = useDropAcceptable(item.type);
  const droppableData: DraggingData = {
    from: 'Builder',
    item: item,
    index,
  };
  const { setNodeRef, isOver } = useDroppable({
    id: `Component-${prefix}-${id}-${item.id}`,
    data: droppableData,
    disabled: !acceptable,
  });
  const dropOver = isOver && acceptable;
  return (
    <div
      className={clsx('DropArea', {
        dropOver,
      })}
      data-for={item.id}
      ref={setNodeRef}
    />
  );
}
