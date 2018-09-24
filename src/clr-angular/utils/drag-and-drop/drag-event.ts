/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DragEventInterface } from './interfaces/drag-event.interface';

// This class is used to convert an internal event
// to an external event to be emitted.
export class ClrDragEvent<T> {
  public dragPosition: { pageX: number; pageY: number };
  public group: string | string[];
  public dragDataTransfer: T;
  public dropPointPosition: { pageX: number; pageY: number };

  constructor(dragEvent: DragEventInterface<T>) {
    this.dragPosition = dragEvent.dragPosition;
    this.group = dragEvent.group;
    this.dragDataTransfer = dragEvent.dragDataTransfer;
    this.dropPointPosition = dragEvent.dropPointPosition;
  }
}
