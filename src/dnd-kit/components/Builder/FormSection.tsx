import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import * as icons from '../../../builder/assets/icons';
import { DraggingData } from '../../dnd/draggable';
import { SectionData } from '../../types/form-data';
import { numberToLetters } from '../../utils/numbers';
// eslint-disable-next-line import/no-cycle
import { FormChildren } from './FormChildren';
import './FormSection.less';

export interface FormSectionProps {
  item: SectionData;
  index: number;
}

export function FormSection(props: FormSectionProps): JSX.Element {
  const { item, index } = props;

  const { listeners, setNodeRef } = useDraggable({
    id: `Component-Editor-${item.id}`,
    data: {
      from: 'Builder',
      item,
    } as DraggingData,
  });

  return (
    <div className="FormSection" data-id={`item-${item.id}`}>
      <div className="header" ref={setNodeRef} {...listeners}>
        <img src={icons.Section} />
        <span>
          {numberToLetters(index + 1)}. {item.title}
        </span>
      </div>
      <FormChildren item={item} />
    </div>
  );
}
