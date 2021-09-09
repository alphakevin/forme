import React from 'react';
import { FormBuilderData } from '../../types/form-data';
import { FormSection } from './FormSection';
import './FormBuilder.less';

export interface FormSectionProps {
  form: FormBuilderData;
}

export function FormBuilder(props: FormSectionProps): JSX.Element {
  const { form } = props;
  return (
    <div className="FormBuilder">
      <div className="sections">
        {form.children.map((section, index) => (
          <FormSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
}
