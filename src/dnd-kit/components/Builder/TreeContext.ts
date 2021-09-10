import { createContext } from 'react';

export type TreeContextType = {
  expandedItems: string[];
  collapsedTypes: string[];
  expand: (id: string) => void;
  collapse: (id: string) => void;
  toggle: (id: string) => void;
};

const noop = () => {};

export const TreeContext = createContext<TreeContextType>({
  expandedItems: [],
  collapsedTypes: [],
  expand: noop,
  collapse: noop,
  toggle: noop,
});
