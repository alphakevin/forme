import React from 'react';
import { FormFieldComponentData } from '../../types/form-data';
import { ComponentEditor } from '../ComponentLibrary/ComponentEditor';
import './FormComponent.less';

export interface FormSectionProps {
  item: FormFieldComponentData;
  index: number;
}

export function FormComponent(props: FormSectionProps): JSX.Element {
  const { item, index } = props;
  return (
    <div className="FormComponent" data-id={`item-${item.id}`}>
      <ComponentEditor item={item as any} index={index} />
    </div>
  );
}
