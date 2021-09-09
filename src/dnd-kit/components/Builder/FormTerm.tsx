import React, { Fragment } from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { DraggingData, getDraggingData, isDroppable } from '../../dnd/draggable';
import { TermData } from '../../types/form-data';
import { romanize } from '../../utils/numbers';
import { DropArea } from './DropArea';
import { FormComponent } from './FormComponent';
import './FormTerm.less';

export interface FormSectionProps {
  item: TermData;
  index: number;
}

export function FormTerm(props: FormSectionProps): JSX.Element {
  const { item, index } = props;
  const droppableData: DraggingData<'Term'> = {
    from: 'Builder',
    item: item,
  };
  const { setNodeRef, isOver, over, active } = useDroppable({
    id: `Term-${item.id}`,
    data: droppableData,
  });
  const dropOver = isOver && isDroppable(droppableData, getDraggingData(active));
  return (
    <div
      className={clsx('FormTerm', {
        dropOver,
      })}
    >
      <div className="header">
        <span>
          {romanize(index + 1)}. {item.title}
        </span>
      </div>
      {/* <div className="components" ref={setNodeRef}> */}
      <div className="components">
        {item.children.length === 0 ? (
          <div className="drop-zone">
            <div className="spacer"></div>
            <div className="tip">Drag and drop a component into the term</div>
            <div className="spacer"></div>
          </div>
        ) : (
          item.children.map((child, i) => (
            <Fragment key={child.id}>
              <DropArea id={child.id} item={item} prefix="form" index={i} />
              <FormComponent component={child} index={i} />
            </Fragment>
          ))
        )}
        <DropArea id="last" item={item} prefix="form" index={item.children.length + 1} />
      </div>
    </div>
  );
}
