import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { ComponentData } from '../../store/types';
import { romanize } from '../../utils/numbers';
import { ComponentEditor } from '../ComponentLibrary/ComponentEditor';
import { getComponentConfig } from '../ComponentLibrary/config';
import './FormComponent.less';

export interface FormSectionProps {
  component: ComponentData;
  index: number;
}

export function FormComponent(props: FormSectionProps): JSX.Element {
  const { component, index } = props;
  return (
    <div className="FormComponent">
      <ComponentEditor component={component} />
    </div>
  );
}
