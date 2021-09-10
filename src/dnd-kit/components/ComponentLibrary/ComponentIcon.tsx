import React, { HTMLAttributes } from 'react';
import clsx from 'clsx';
import * as icons from '../../../builder/assets/icons';
import { ComponentConfig } from '../../config/components';
import { ComponentData } from '../../types/form-data';
import './ComponentIcon.less';

interface Props extends HTMLAttributes<HTMLImageElement> {
  item: ComponentData | ComponentConfig;
  size?: number;
}

export function ComponentIcon(props: Props) {
  const {
    className,
    item: { type },
    size = 40,
    ...otherProps
  } = props;
  return (
    <img
      {...otherProps}
      className={clsx('ComponentIcon', className)}
      src={icons[type]}
      style={{ width: size, height: size, ...otherProps.style }}
    />
  );
}
