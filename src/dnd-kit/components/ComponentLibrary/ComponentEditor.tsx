import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { LibraryComponentType } from '../../types/common';
import { ComponentDataByType } from '../../types/form-data';
import { getComponentConfig } from './config';
import { CommonFieldEditor } from './editors/CommonFieldEditor';
import './ComponentEditor.less';

export interface ComponentItemProps<T extends LibraryComponentType> {
  component: ComponentDataByType<T>;
  index: number;
}

export function ComponentEditor<T extends LibraryComponentType>(
  props: ComponentItemProps<T>
): JSX.Element {
  const { component, index } = props;
  const config = getComponentConfig(component.type);
  return (
    <div className="ComponentEditor">
      <div className="header">
        <img className="icon" src={icons[component.type]} />
        <div className="name">
          {config.name} - {index + 1}
        </div>
      </div>
      <div className="fields">
        <CommonFieldEditor data={component} />
      </div>
    </div>
  );
}
