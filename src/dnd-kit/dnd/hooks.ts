import { useMemo } from 'react';
import { useDndContext } from '@dnd-kit/core';
import { isAcceptableChild } from '../config/components';
import { LibraryComponentType } from '../types/common';
import { getDraggingData } from './draggable';

export function useActiveItemType(): LibraryComponentType {
  const { active } = useDndContext();
  const data = getDraggingData(active);
  const activeType = data?.item.type;
  return activeType;
}

export function useDropAcceptable(type: LibraryComponentType): boolean {
  const activeType = useActiveItemType();
  const accept = useMemo(() => isAcceptableChild(type, activeType), [type, activeType]);
  return accept;
}
