import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { FormData } from '../../store/types';
import './FormBuilder.less';
import { FormSection } from './FormSection';

export interface FormSectionProps {
  form: FormData;
}

export function FormBuilder(props: FormSectionProps): JSX.Element {
  const { form } = props;
  return (
    <div className="FormBuilder">
      <div className="sections">
        {form.sections.map((section, index) => (
          <FormSection key={section.id} section={section} index={index} />
        ))}
      </div>
    </div>
  );
}
