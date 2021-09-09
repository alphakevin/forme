import { getId } from '../../store/fixtures';
import { LibraryComponentType } from '../../types/common';
import { ComponentDataByType } from '../../types/form-data';

export interface ComponentConfigByType<T extends LibraryComponentType = any> {
  type: T;
  disabled?: boolean;
  name: string;
  childTypes?: LibraryComponentType[];
  getData?: (source?: ComponentDataByType<T>) => ComponentDataByType<T>;
}

export type ComponentConfig = ComponentConfigByType;

export const componentItems: ComponentConfig[] = [
  {
    type: 'Form',
    name: 'Form',
    childTypes: ['Section'],
    disabled: true,
    getData: (source) => {
      const id = getId();
      return {
        type: 'Form',
        title: 'Default Section ' + id,
        children: [],
        ...source,
        id,
      };
    },
  },
  {
    type: 'Section',
    name: 'Section',
    childTypes: ['Term'],
    getData: (source) => {
      const id = getId();
      return {
        type: 'Section',
        title: 'Default Section ' + id,
        children: [],
        ...source,
        id,
      };
    },
  },
  {
    type: 'Term',
    name: 'Term',
    childTypes: ['ShortAnswer', 'LongAnswer', 'SingleCheckbox'],
    getData: (source) => {
      const id = getId();
      return {
        type: 'Term',
        title: 'Default Term ' + id,
        children: [],
        ...source,
        id,
      };
    },
  },
  {
    type: 'ShortAnswer',
    name: 'Short Answer',
    getData: (source) => {
      const id = getId();
      return {
        type: 'ShortAnswer',
        annotationId: null,
        tip: null,
        description: '',
        label: '',
        question: 'Question for short answer ' + id,
        ...source,
        id,
      };
    },
  },
  {
    type: 'LongAnswer',
    name: 'Long Answer',
    getData: (source) => {
      const id = getId();
      return {
        type: 'LongAnswer',
        annotationId: null,
        tip: null,
        description: '',
        label: '',
        question: 'Question for long answer ' + id,
        ...source,
        id,
      };
    },
  },
  {
    type: 'SingleCheckbox',
    name: 'Single Checkbox',
    getData: (source) => {
      const id = getId();
      return {
        type: 'SingleCheckbox',
        annotationId: null,
        tip: null,
        description: '',
        question: 'Question for single checkbox ' + id,
        checkedOption: '',
        uncheckedOption: '',
        ...source,
        id,
      };
    },
  },
];

export type ComponentConfigMap = {
  [key in LibraryComponentType]: ComponentConfigByType<key>;
};

export const componentConfigMap: ComponentConfigMap = {} as any;

componentItems.forEach((config) => {
  componentConfigMap[config.type] = config as any;
});

export function getComponentConfig<T extends LibraryComponentType = any>(
  type: T
): ComponentConfigByType<T> {
  return componentConfigMap[type] as any;
}

export function getComponentData<T extends LibraryComponentType>(type: T): ComponentDataByType<T> {
  const config = getComponentConfig(type);
  return config.getData();
}

export function isAcceptableChild(
  parentType?: LibraryComponentType,
  childType?: LibraryComponentType
): boolean {
  if (!parentType || !childType) {
    return false;
  }
  const parentConfig = getComponentConfig(parentType);
  return parentConfig?.childTypes?.includes(childType) ?? false;
}
