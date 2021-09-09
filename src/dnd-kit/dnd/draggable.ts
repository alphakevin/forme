import { Active, LayoutRect, Over } from '@dnd-kit/core';
import { isAcceptableChild } from '../components/ComponentLibrary/config';
import { LibraryComponentType } from '../types/common';
import { ComponentDataByType } from '../types/form-data';

export interface FormDndData<T extends LibraryComponentType = any> {
  from: 'Library' | 'Builder';
  item: ComponentDataByType<T>;
}

export function getDraggingData(draggingData: Active | Over): FormDndData {
  return draggingData?.data?.current as FormDndData;
}

export function isDroppable(overData?: FormDndData, activeData?: FormDndData): boolean {
  if (!overData || !activeData) return false;
  console.log({ overData, activeData });
  const { type: overType } = overData.item;
  const { type: activeType } = activeData.item;
  return isAcceptableChild(overType, activeType) || overType === activeType;
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
  console.log({ overRect, activeRect });
  if (!overRect || !activeRect) {
    return undefined;
  }
  return getCenter(activeRect).offsetTop < getCenter(overRect).offsetTop ? 'up' : 'down';
}
