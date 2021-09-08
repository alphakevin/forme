import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { ComponentData } from '../../store/types';
import { getComponentConfig } from './config';
import './ComponentEditor.less';

export interface ComponentItemProps {
  component?: ComponentData;
}

export function ComponentEditor(props: ComponentItemProps): JSX.Element {
  const { component } = props;
  const config = getComponentConfig(component.type);
  return (
    <div className="ComponentEditor">
      <div className="header">
        <img className="icon" src={icons[component.type]} />
        <div className="name">{config.name}</div>
      </div>
    </div>
  );
}
