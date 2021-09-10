import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { getComponentConfig } from '../../config/components';
import { LibraryComponentType } from '../../types/common';
import { ComponentDataByType } from '../../types/form-data';
import { CommonFieldEditor } from './editors/CommonFieldEditor';
import './ComponentEditor.less';

export interface ComponentItemProps<T extends LibraryComponentType> {
  item: ComponentDataByType<T>;
  index: number;
}

export function ComponentEditor<T extends LibraryComponentType>(
  props: ComponentItemProps<T>
): JSX.Element {
  const { item, index } = props;
  const config = getComponentConfig(item.type);
  return (
    <div className="ComponentEditor">
      <div className="header">
        <img className="icon" src={icons[item.type]} />
        <div className="name">
          {config.name} - {index + 1}
        </div>
      </div>
      <div className="fields">
        <CommonFieldEditor data={item} />
      </div>
    </div>
  );
}
