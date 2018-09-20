/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
export enum DragEventType {
  DRAG_START,
  DRAG_MOVE,
  DRAG_END,
  DRAG_ENTER,
  DRAG_LEAVE,
  DROP,
}

export interface DragEventInterface<T> {
  type: DragEventType;
  group?: string | string[];
  ghostElement?: any;
  dragPosition: { pageX: number; pageY: number };
  dragDataTransfer?: T;
  // For default ghosts, this dropPointPosition denotes the center point of the ghost element.
  // This center point is used to determine whether the ghost is over droppable elements or not.
  dropPointPosition?: { pageX: number; pageY: number };
}
