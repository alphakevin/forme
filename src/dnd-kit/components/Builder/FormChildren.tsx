import React, { Fragment } from 'react';
import { filterTypes, getComponentConfig } from '../../config/components';
import { useActiveItemType } from '../../dnd/hooks';
import { ComponentData } from '../../types/form-data';
import { isContainerComponent } from '../../utils/form';
import { DropArea } from './DropArea';
// eslint-disable-next-line import/no-cycle
import { FormItem } from './FormItem';
import './FormChildren.less';

export interface FormChildrenProps {
  item: ComponentData;
}

export function FormChildren(props: FormChildrenProps): JSX.Element {
  const { item } = props;
  const activeType = useActiveItemType();

  if (activeType) {
    const activeConfig = getComponentConfig(activeType);
    const childTypes = filterTypes((c) => c.level >= activeConfig.level);
    if (childTypes.includes(item.type)) {
      return null;
    }
  }

  return (
    <div className="children">
      {isContainerComponent(item) && (
        <>
          {item.children.map((child, i) => (
            <Fragment key={child.id}>
              <DropArea id={child.id} item={item} prefix="form" index={i} />
              <FormItem item={child} index={i} />
            </Fragment>
          ))}
          <DropArea id="last" item={item} prefix="form" index={item.children.length} />
        </>
      )}
    </div>
  );
}
