import React, { createContext, useCallback, useMemo, useState } from 'react';
import { ComponentData } from '../../types/form-data';
import './Tree.less';
import { addArrayItem, removeArrayItem } from '../../utils/tree';
import { TreeContext } from './TreeContext';
import { TreeItem } from './TreeItem';

interface TreeProps {
  item: ComponentData;
}

export function Tree(props: TreeProps) {
  const { item } = props;
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const expand = useCallback((id: string) => {
    setExpandedItems((ids) => addArrayItem(ids, id));
  }, []);
  const collapse = useCallback((id: string) => {
    setExpandedItems((ids) => removeArrayItem(ids, id));
  }, []);
  const toggle = useCallback(
    (id: string) => {
      setExpandedItems((ids) =>
        ids.includes(id) ? removeArrayItem(ids, id) : addArrayItem(ids, id)
      );
    },
    [expand, collapse]
  );
  return (
    <TreeContext.Provider value={{ expandedItems, expand, collapse, toggle }}>
      <ul className="Tree">
        <TreeItem item={item} index={0} />
      </ul>
    </TreeContext.Provider>
  );
}
