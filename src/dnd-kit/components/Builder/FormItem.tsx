import React from 'react';
import { getComponentConfig } from '../../config/components';
import { ComponentData, FormBuilderData, SectionData, TermData } from '../../types/form-data';
// eslint-disable-next-line import/no-cycle
import { FormBuilder } from './FormBuilder';
import { FormComponent } from './FormComponent';
// eslint-disable-next-line import/no-cycle
import { FormSection } from './FormSection';
// eslint-disable-next-line import/no-cycle
import { FormTerm } from './FormTerm';
import './FormItem.less';

export interface FormItem {
  item: ComponentData;
  index: number;
}

export function FormItem(props: FormItem): JSX.Element {
  const { item, index } = props;
  const config = getComponentConfig(item.type);
  switch (item.type) {
    case 'Form':
      return <FormBuilder item={item as FormBuilderData} index={index} />;
    case 'Section':
      return <FormSection item={item as SectionData} index={index} />;
    case 'Term':
      return <FormTerm item={item as TermData} index={index} />;
    default:
      return <FormComponent item={item as any} index={index} />;
  }
}
