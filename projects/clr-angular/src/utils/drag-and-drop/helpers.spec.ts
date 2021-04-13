/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { DragPointPosition } from './interfaces/drag-event.interface';

export const generateDragPosition = (
  startPosition: [number, number],
  movePosition?: [number, number]
): DragPointPosition => {
  if (!movePosition) {
    return {
      pageX: startPosition[0],
      pageY: startPosition[1],
      moveX: 0,
      moveY: 0,
    };
  }
  return {
    pageX: movePosition[0],
    pageY: movePosition[1],
    moveX: movePosition[0] - startPosition[0],
    moveY: movePosition[1] - startPosition[1],
  };
};

export const emulateDragEvent = (
  eventName: string,
  pageX = 0,
  pageY = 0,
  element: Document | Node = document.body
): void => {
  const emulatedEvent: any = new CustomEvent(eventName, { bubbles: true });
  if (eventName.startsWith('touch')) {
    emulatedEvent.changedTouches = [{ pageX: pageX, pageY: pageY }];
  } else {
    emulatedEvent.pageX = pageX;
    emulatedEvent.pageY = pageY;
  }

  element.dispatchEvent(emulatedEvent);
};
