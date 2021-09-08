import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { TermData } from '../../store/types';
import { romanize } from '../../utils/numbers';
import { FormComponent } from './FormComponent';
import './FormTerm.less';

export interface FormSectionProps {
  term: TermData;
  index: number;
}

export function FormTerm(props: FormSectionProps): JSX.Element {
  const { term, index } = props;
  return (
    <div className="FormTerm">
      <div className="header">
        <span>
          {romanize(index + 1)}. {term.title}
        </span>
      </div>
      <div className="components">
        {term.components.length === 0 && (
          <div className="drop-zone">
            <span></span>
            <span className="tip">Drag and drop a component into the term</span>
            <span></span>
          </div>
        )}
        {term.components.map((component, index) => (
          <FormComponent key={component.id} component={component} index={index} />
        ))}
      </div>
    </div>
  );
}
