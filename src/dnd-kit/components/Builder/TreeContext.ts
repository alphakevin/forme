import { createContext } from 'react';

export type TreeContextType = {
  expandedItems: string[];
  expand: (id: string) => void;
  collapse: (id: string) => void;
  toggle: (id: string) => void;
};

const noop = () => {};

export const TreeContext = createContext<TreeContextType>({
  expandedItems: [],
  expand: noop,
  collapse: noop,
  toggle: noop,
});
