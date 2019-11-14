/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DragEventInterface, DragPointPosition } from './interfaces/drag-event.interface';

// This class is used to convert an internal event
// to an external event to be emitted.
export class ClrDragEvent<T> {
  public dragPosition: DragPointPosition;
  public group: string | string[];
  public dragDataTransfer: T;
  public dropPointPosition: { pageX: number; pageY: number };
  public ghostAnchorPosition: { pageX: number; pageY: number };
  public dragSourceElement: any;
  public dropTargetElement?: any; // optional as only Droppable provides dropTargetElement in DragEnter, DragLeave, Drop events

  constructor(dragEvent: DragEventInterface<T>) {
    this.dragPosition = dragEvent.dragPosition;
    this.group = dragEvent.group;
    this.dragDataTransfer = dragEvent.dragDataTransfer;
    this.dropPointPosition = dragEvent.dropPointPosition;
    this.ghostAnchorPosition = dragEvent.ghostAnchorPosition;
    this.dragSourceElement = dragEvent.dragSourceElement;
    if (dragEvent.dropTargetElement) {
      this.dropTargetElement = dragEvent.dropTargetElement;
    }
  }
}
