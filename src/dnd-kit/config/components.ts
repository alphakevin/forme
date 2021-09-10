import { getId } from '../store/fixtures';
import { ComponentTypeCategory, LibraryComponentType } from '../types/common';
import { ComponentDataByType } from '../types/form-data';

export interface ComponentConfigByType<T extends LibraryComponentType = any> {
  type: T;
  name: string;
  category: ComponentTypeCategory;
  level: number;
  disabled?: boolean;
  childTypes?: LibraryComponentType[];
  getData?: (source?: ComponentDataByType<T>) => ComponentDataByType<T>;
}

export type ComponentConfig = ComponentConfigByType;

export const componentItems: ComponentConfig[] = [
  {
    type: 'Form',
    name: 'Form',
    category: 'Container',
    level: 0,
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
    category: 'Container',
    level: 1,
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
    category: 'Container',
    level: 2,
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
    category: 'FormField',
    level: 3,
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
    category: 'FormField',
    level: 3,
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
    category: 'FormField',
    level: 3,
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
  return type ? (componentConfigMap[type] as any) : undefined;
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

export function findType(match: (config: ComponentConfig) => boolean): LibraryComponentType {
  const found = componentItems.find(match);
  return found?.type;
}

export function filterTypes(match: (config: ComponentConfig) => boolean): LibraryComponentType[] {
  return componentItems.filter(match).map((item) => item.type);
}
