/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { DomAdapter } from '../../dom-adapter/dom-adapter';
import { DragEventInterface } from '../interfaces/drag-event.interface';

// This service is used to capture the state of clrDraggable element
// at a certain event and passes it to clrDraggableGhost component.
@Injectable()
export class DraggableSnapshotService<T> {
  constructor(private domAdapter: DomAdapter) {}

  private draggableElClientRect: ClientRect;
  private snapshotDragEvent: DragEventInterface<T>;

  public capture(el: Node, event: DragEventInterface<T>): void {
    this.draggableElClientRect = this.domAdapter.clientRect(el);
    this.snapshotDragEvent = event;
  }
  public discard(): void {
    delete this.draggableElClientRect;
    delete this.snapshotDragEvent;
  }
  get hasDraggableState(): boolean {
    return !!this.snapshotDragEvent && !!this.draggableElClientRect;
  }
  get clientRect(): ClientRect {
    return this.draggableElClientRect;
  }
  get dragEvent(): DragEventInterface<T> {
    return this.snapshotDragEvent;
  }
}
