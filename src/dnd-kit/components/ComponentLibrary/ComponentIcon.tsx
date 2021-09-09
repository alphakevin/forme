import React from 'react';
import clsx from 'clsx';
import * as icons from '../../../builder/assets/icons';
import { ComponentData } from '../../types/form-data';
import { ComponentConfig } from './config';
import './ComponentIcon.less';

interface Props {
  item: ComponentData | ComponentConfig;
  className?: string;
  size?: number;
}

export function ComponentIcon(props: Props) {
  const {
    className,
    item: { type },
    size = 40,
  } = props;
  return (
    <img
      className={clsx('ComponentIcon', className)}
      src={icons[type]}
      style={{ width: size, height: size }}
    />
  );
}
