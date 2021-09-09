import { LibraryComponentType } from '../types/common';
import {
  ComponentData,
  ContainerComponentData,
  FormFieldComponentData,
  LayoutComponentData,
} from '../types/form-data';

export type ComponentTypeCategory = 'Container' | 'FormField' | 'Layout';

export type ContainerComponentType = 'Form' | 'Section' | 'Term';
export const containerComponentTypes: LibraryComponentType[] = ['Form', 'Section', 'Term'];

export type FormFieldComponentType = 'ShortAnswer' | 'LongAnswer' | 'SingleCheckbox';
export const formFieldComponentTypes: LibraryComponentType[] = [
  'ShortAnswer',
  'LongAnswer',
  'SingleCheckbox',
];

export type LayoutComponentType = 'Description';
export const layoutComponentTypes: LibraryComponentType[] = ['Description'];

export function isContainerComponentType(
  type: LibraryComponentType
): type is ContainerComponentType {
  return containerComponentTypes.includes(type);
}

export function isContainerComponent(
  component: ComponentData
): component is ContainerComponentData {
  return isContainerComponentType(component.type);
}

export function isFormFieldComponentType(
  type: LibraryComponentType
): type is FormFieldComponentType {
  return formFieldComponentTypes.includes(type);
}

export function isFormFieldComponent(
  component: ComponentData
): component is FormFieldComponentData {
  return isFormFieldComponentType(component.type);
}

export function isLayoutComponentType(type: LibraryComponentType): type is LayoutComponentType {
  return layoutComponentTypes.includes(type);
}

export function isLayoutComponent(component: ComponentData): component is LayoutComponentData {
  return isLayoutComponentType(component.type);
}
