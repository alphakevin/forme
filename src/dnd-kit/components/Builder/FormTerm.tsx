import React, { Fragment } from 'react';
import { useDroppable } from '@dnd-kit/core';
import clsx from 'clsx';
import { FormDndData, getDraggingData, isDroppable } from '../../dnd/draggable';
import { TermData } from '../../types/form-data';
import { romanize } from '../../utils/numbers';
import { DropArea } from './DropArea';
import { FormComponent } from './FormComponent';
import './FormTerm.less';

export interface FormSectionProps {
  term: TermData;
  index: number;
}

export function FormTerm(props: FormSectionProps): JSX.Element {
  const { term, index } = props;
  const droppableData: FormDndData<'Term'> = {
    from: 'Builder',
    item: term,
  };
  const { setNodeRef, isOver, over, active } = useDroppable({
    id: `Term-${term.id}`,
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
          {romanize(index + 1)}. {term.title}
        </span>
      </div>
      {/* <div className="components" ref={setNodeRef}> */}
      <div className="components">
        {term.children.length === 0 && (
          <div className="drop-zone">
            <div className="spacer"></div>
            <div className="tip">Drag and drop a component into the term</div>
            <div className="spacer"></div>
          </div>
        )}
        {term.children.map((component, index) => (
          <Fragment key={component.id}>
            <DropArea item={component} prefix="form" index={index} />
            <FormComponent component={component} index={index} />
          </Fragment>
        ))}
        <DropArea item={term} prefix="form" index={index} />
      </div>
    </div>
  );
}
