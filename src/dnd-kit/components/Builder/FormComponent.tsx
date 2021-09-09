import React from 'react';
import { FormFieldComponentData } from '../../types/form-data';
import { ComponentEditor } from '../ComponentLibrary/ComponentEditor';
import './FormComponent.less';

export interface FormSectionProps {
  component: FormFieldComponentData;
  index: number;
}

export function FormComponent(props: FormSectionProps): JSX.Element {
  const { component, index } = props;
  return (
    <div className="FormComponent">
      <ComponentEditor component={component as any} index={index} />
    </div>
  );
}
