/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, ElementRef, OnDestroy, Optional } from '@angular/core';
import { DragHandleRegistrarService } from './providers/drag-handle-registrar.service';

@Directive({ selector: '[clrDragHandle]', host: { '[class.drag-handle]': 'true' } })
export class ClrDragHandle<T> implements OnDestroy {
  constructor(private el: ElementRef, @Optional() private dragHandleRegistrar: DragHandleRegistrarService<T>) {
    if (!this.dragHandleRegistrar) {
      // ClrDragHandleRegistrar is provided in ClrDraggable so we expect it to be present here
      // as clrDragHandle is required to be used only inside of a clrDraggable directive.
      throw new Error('The clrDragHandle directive can only be used inside of a clrDraggable directive.');
    }
    this.dragHandleRegistrar.registerCustomHandle(this.el.nativeElement);
  }

  ngOnDestroy() {
    this.dragHandleRegistrar.unregisterCustomHandle();
  }
}
