import React from 'react';
import * as icons from '../../../builder/assets/icons';
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
  return (
    <div className="FormSection" data-id={`item-${item.id}`}>
      <div className="header">
        <img src={icons.Section} />
        <span>
          {numberToLetters(index + 1)}. {item.title}
        </span>
      </div>
      <FormChildren item={item} />
    </div>
  );
}
