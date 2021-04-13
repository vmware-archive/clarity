/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrDraggable } from './draggable/draggable';
import { ClrDroppable } from './droppable/droppable';
import { ClrIfDragged } from './if-dragged';
import { ClrDragHandle } from './drag-handle';
import { ClrDraggableGhost } from './draggable-ghost';

export const CLR_DRAG_AND_DROP_DIRECTIVES: Type<any>[] = [
  ClrDraggable,
  ClrDroppable,
  ClrIfDragged,
  ClrDragHandle,
  ClrDraggableGhost,
];

@NgModule({
  imports: [CommonModule],
  declarations: [CLR_DRAG_AND_DROP_DIRECTIVES],
  entryComponents: [ClrDraggableGhost],
  exports: [CLR_DRAG_AND_DROP_DIRECTIVES],
})
export class ClrDragAndDropModule {}
