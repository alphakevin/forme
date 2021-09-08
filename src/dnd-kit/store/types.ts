import { ComponentType } from '../components/ComponentLibrary/config';

export interface BuilderDataBase {
  id: string;
}

export interface FormData extends BuilderDataBase {
  sections: SectionData[];
}

export interface SectionData extends BuilderDataBase {
  title: string;
  terms: TermData[];
}

export interface TermData extends BuilderDataBase {
  title: string;
  components: ComponentData[];
}

export interface ComponentDataBase extends BuilderDataBase {
  type: ComponentType;
}

export interface FormComponentData extends ComponentDataBase {
  question: string;
  description?: string;
  tip?: string;
  annotationId?: string;
}

export interface ShortAnswerData extends FormComponentData {
  type: 'ShortAnswer';
  label?: string;
}

export interface LongAnswerData extends FormComponentData {
  type: 'LongAnswer';
  label?: string;
}

export interface SingleCheckboxData extends FormComponentData {
  type: 'SingleCheckbox';
  checkedOption: string;
  uncheckedOption: string;
}

export interface LayoutComponentDataBase extends ComponentDataBase {}

export interface DescriptionData extends LayoutComponentDataBase {
  title: string;
  description: string;
}

export type ComponentData = ShortAnswerData | LongAnswerData | SingleCheckboxData | DescriptionData;
