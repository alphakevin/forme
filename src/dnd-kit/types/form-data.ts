import { LibraryComponentType } from './common';

export interface BuilderDataBase {
  id: string;
  type: LibraryComponentType;
}

export interface ContainerDataBase extends BuilderDataBase {
  title: string;
}

export interface FormBuilderData extends ContainerDataBase {
  type: 'Form';
  children: SectionData[];
}

export interface SectionData extends ContainerDataBase {
  type: 'Section';
  title: string;
  children: TermData[];
}

export interface TermData extends ContainerDataBase {
  type: 'Term';
  title: string;
  children: FormFieldComponentData[];
}

export interface FormComponentData extends BuilderDataBase {
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

export interface LayoutComponentDataBase extends BuilderDataBase {}

export interface DescriptionData extends LayoutComponentDataBase {
  title: string;
  description: string;
}

export type FormFieldComponentData = ShortAnswerData | LongAnswerData | SingleCheckboxData;

export type ContainerComponentData = FormBuilderData | SectionData | TermData;

export type LayoutComponentData = DescriptionData;

export type ComponentData = ContainerComponentData | FormFieldComponentData | LayoutComponentData;

export type ComponentDataByType<T extends LibraryComponentType> = T extends 'Form'
  ? FormBuilderData
  : T extends 'Section'
  ? SectionData
  : T extends 'Term'
  ? TermData
  : T extends 'ShortAnswer'
  ? ShortAnswerData
  : T extends 'LongAnswer'
  ? LongAnswerData
  : T extends 'SingleCheckbox'
  ? SingleCheckboxData
  : T extends ''
  ? DescriptionData
  : undefined;
