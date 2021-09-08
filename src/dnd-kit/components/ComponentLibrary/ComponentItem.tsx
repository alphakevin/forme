import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { ComponentConfig } from './config';
import './ComponentItem.less';

export interface ComponentItemProps {
  component?: ComponentConfig;
}

export function ComponentItem(props: ComponentItemProps): JSX.Element {
  const { component } = props;
  return (
    <div className="ComponentItem">
      <img className="icon" src={icons[component.type]} />
      <div className="name">{component.name}</div>
    </div>
  );
}
