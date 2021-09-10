import React, { HTMLAttributes } from 'react';
import { getComponentConfig } from '../../config/components';
import { DraggingData } from '../../dnd/draggable';
import { getComponentTitle } from '../../utils/form';
import { ComponentIcon } from './ComponentIcon';
import './DraggingItem.less';

export interface DraggingItemProps extends HTMLAttributes<HTMLDivElement> {
  data?: DraggingData;
}

export function DraggingItem(props: DraggingItemProps): JSX.Element {
  const { data, ...restProps } = props;
  if (!data || !data.item) {
    return null;
  }
  console.log('DraggingItem', data);
  const config = getComponentConfig(data.item.type);
  const title = getComponentTitle(data.item);
  return (
    <div className="DraggingItem" {...restProps}>
      <ComponentIcon className="icon" item={data.item} />
      <div className="text">
        {data.from !== 'Library' && <div className="title">{config.name}</div>}
        <div className="name">{title}</div>
      </div>
    </div>
  );
}
