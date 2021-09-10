import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { DraggingData } from '../../dnd/draggable';
import { TermData } from '../../types/form-data';
import { romanize } from '../../utils/numbers';
// eslint-disable-next-line import/no-cycle
import { FormChildren } from './FormChildren';
import './FormTerm.less';

export interface FormSectionProps {
  item: TermData;
  index: number;
}

export function FormTerm(props: FormSectionProps): JSX.Element {
  const { item, index } = props;

  const { listeners, setNodeRef } = useDraggable({
    id: `Component-Editor-${item.id}`,
    data: {
      from: 'Builder',
      item,
    } as DraggingData,
  });

  return (
    <div className="FormTerm" data-id={`item-${item.id}`}>
      <div className="header" ref={setNodeRef} {...listeners}>
        <span>
          {romanize(index + 1)}. {item.title}
        </span>
      </div>
      {/* <div className="components" ref={setNodeRef}> */}
      <FormChildren item={item} />
      {item.children.length === 0 && (
        <div className="drop-zone">
          <div className="spacer"></div>
          <div className="tip">Drag and drop a component into the term</div>
          <div className="spacer"></div>
        </div>
      )}
    </div>
  );
}
