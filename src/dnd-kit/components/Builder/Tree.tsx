import React, { createContext, useCallback, useEffect, useMemo, useState } from 'react';
import { filterTypes, getComponentConfig } from '../../config/components';
import { useActiveItemType } from '../../dnd/hooks';
import { LibraryComponentType } from '../../types/common';
import { ComponentData } from '../../types/form-data';
import { addArrayItem, removeArrayItem } from '../../utils/tree';
import { TreeContext } from './TreeContext';
import { TreeItem } from './TreeItem';
import './Tree.less';

interface TreeProps {
  item: ComponentData;
}

export function Tree(props: TreeProps) {
  const { item } = props;
  const [expandedItems, setExpandedItems] = useState<string[]>([]);
  const [collapsedTypes, setCollapsedTypes] = useState<LibraryComponentType[]>([]);
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
  const activeType = useActiveItemType();
  useEffect(() => {
    if (activeType) {
      const activeConfig = getComponentConfig(activeType);
      const types = filterTypes((config) => config.level >= activeConfig.level);
      setCollapsedTypes(types);
    } else {
      setCollapsedTypes([]);
    }
  }, [activeType]);
  return (
    <TreeContext.Provider value={{ expandedItems, expand, collapse, toggle, collapsedTypes }}>
      <ul className="Tree">
        <TreeItem item={item} index={0} />
      </ul>
    </TreeContext.Provider>
  );
}
