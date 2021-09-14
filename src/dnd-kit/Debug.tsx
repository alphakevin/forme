import React from 'react';
import { useDndContext } from '@dnd-kit/core';
import { getDraggingData } from './dnd/draggable';
import './Debug.less';

export function Debug() {
  const { over, activeNode, scrollableAncestors } = useDndContext();
  if (!over || !activeNode) return null;
  const { left, top } = scrollableAncestors.reduce(
    (pos, element) => {
      return {
        left: pos.left - element.scrollLeft,
        top: pos.top - element.scrollTop,
      };
    },
    { left: 0, top: 0 }
  );
  const { offsetLeft, offsetTop, width, height } = over.rect;
  const overData = getDraggingData(over);
  return (
    <div
      className="Debug"
      style={{
        left: left + offsetLeft,
        top: top + offsetTop,
        width,
        height,
      }}
    >
      <span className="text">
        type<b>=</b>
        <span>{overData.item.type}</span> id<b>=</b>
        <span>{overData.item.id}</span>{' '}
        {overData.index !== undefined && (
          <>
            index<b>=</b>
            <span className="number">{overData.index}</span>
          </>
        )}
      </span>
    </div>
  );
}
