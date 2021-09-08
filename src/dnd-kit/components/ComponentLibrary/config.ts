export type ComponentType = 'LongAnswer' | 'Section' | 'Term' | 'ShortAnswer' | 'SingleCheckbox';

export interface ComponentConfig {
  type: ComponentType;
  name: string;
}

export const componentItems: ComponentConfig[] = [
  {
    type: 'Section',
    name: 'Section',
  },
  {
    type: 'Term',
    name: 'Term',
  },
  {
    type: 'ShortAnswer',
    name: 'Short Answer',
  },
  {
    type: 'LongAnswer',
    name: 'Long Answer',
  },
  {
    type: 'SingleCheckbox',
    name: 'Single Checkbox',
  },
];

export const componentConfigMap: Record<ComponentType, ComponentConfig> = {} as any;

componentItems.forEach((config) => {
  componentConfigMap[config.type] = config;
});

console.log(componentConfigMap);

export function getComponentConfig(type: ComponentType): ComponentConfig {
  return componentConfigMap[type];
}
