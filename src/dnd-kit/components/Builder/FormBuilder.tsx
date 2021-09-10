import React from 'react';
import { FormBuilderData } from '../../types/form-data';
// eslint-disable-next-line import/no-cycle
import { FormChildren } from './FormChildren';
import './FormBuilder.less';

export interface FormSectionProps {
  item: FormBuilderData;
  index: number;
}

export function FormBuilder(props: FormSectionProps): JSX.Element {
  const { item } = props;
  return (
    <div className="FormBuilder" data-id={item.id}>
      <FormChildren item={item} />
    </div>
  );
}
