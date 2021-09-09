import { Active, LayoutRect, Over } from '@dnd-kit/core';
import { isAcceptableChild } from '../components/ComponentLibrary/config';
import { LibraryComponentType } from '../types/common';
import { ComponentDataByType } from '../types/form-data';
import { isFormFieldComponentType } from '../utils/form';

export interface DraggingData<T extends LibraryComponentType = any> {
  from: 'Library' | 'Builder' | 'Tree';
  item: ComponentDataByType<T>;
}

export function getDraggingData(draggingData: Active | Over): DraggingData {
  return draggingData?.data?.current as DraggingData;
}

export function isDroppable(overData?: DraggingData, activeData?: DraggingData): boolean {
  if (!overData || !activeData) return false;
  const { type: overType } = overData.item;
  const { type: activeType } = activeData.item;
  return (
    overType === activeType ||
    isAcceptableChild(overType, activeType) ||
    (isFormFieldComponentType(overType) && isFormFieldComponentType(activeType))
  );
}

export type VerticalDropDirection = 'up' | 'down' | undefined;
export type LayoutPoint = Pick<LayoutRect, 'offsetLeft' | 'offsetTop'>;

export function getCenter(rect: LayoutRect): LayoutPoint {
  return {
    offsetTop: rect.offsetTop + rect.height / 2,
    offsetLeft: rect.offsetLeft + rect.width / 2,
  };
}

export function getVerticalDropDirection(over: Over, active: Active): VerticalDropDirection {
  const overRect = over?.rect;
  const activeRect = active?.rect.current?.translated;
  if (!overRect || !activeRect) {
    return undefined;
  }
  return getCenter(activeRect).offsetTop < getCenter(overRect).offsetTop ? 'up' : 'down';
}
