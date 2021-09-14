import type { Modifier } from '@dnd-kit/core';
import {
  getEventCoordinates,
  isTouchEvent,
  hasViewportRelativeCoordinates,
} from '@dnd-kit/utilities';

export const snapIconToCursor: Modifier = ({ activatorEvent, activeNodeRect, transform }) => {
  if (
    activeNodeRect &&
    activatorEvent &&
    (isTouchEvent(activatorEvent) || hasViewportRelativeCoordinates(activatorEvent))
  ) {
    const activatorCoordinates = getEventCoordinates(activatorEvent);
    const offsetX = activatorCoordinates.x - activeNodeRect.left;
    const offsetY = activatorCoordinates.y - activeNodeRect.top;

    return {
      ...transform,
      // x: transform.x + offsetX - 48,
      // y: transform.y + offsetY - 28,
    };
  }

  return transform;
};
