import React from 'react';
import * as icons from '../../../builder/assets/icons';
import { SectionData } from '../../types/form-data';
import { numberToLetters } from '../../utils/numbers';
import './FormSection.less';
import { FormTerm } from './FormTerm';

export interface FormSectionProps {
  section: SectionData;
  index: number;
}

export function FormSection(props: FormSectionProps): JSX.Element {
  const { section, index } = props;
  return (
    <div className="FormSection">
      <div className="header">
        <img src={icons.Section} />
        <span>
          {numberToLetters(index + 1)}. {section.title}
        </span>
      </div>
      <div className="terms">
        {section.children.map((term, index) => (
          <FormTerm key={term.id} term={term} index={index} />
        ))}
      </div>
    </div>
  );
}
