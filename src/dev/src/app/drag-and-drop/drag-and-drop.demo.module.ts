/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { BasicDraggableDemo } from './basic-draggable.demo';
import { BasicDroppableDemo } from './basic-droppable.demo';
import { CustomGhostAndHandleDemo } from './custom-ghost-and-handle.demo';
import { CustomGhostDemo } from './custom-ghost.demo';
import { DragAndDropDemo } from './drag-and-drop.demo';
import { ROUTING } from './drag-and-drop.demo.routing';
import { DraggableHandleDemo } from './draggable-handle.demo';
import { DropToleranceDemo } from './drop-tolerance.demo';
import { GroupingDemo } from './grouping.demo';

@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ROUTING],
  declarations: [
    DragAndDropDemo,
    DraggableHandleDemo,
    BasicDraggableDemo,
    CustomGhostDemo,
    CustomGhostAndHandleDemo,
    BasicDroppableDemo,
    DropToleranceDemo,
    GroupingDemo,
  ],
  exports: [
    DragAndDropDemo,
    DraggableHandleDemo,
    BasicDraggableDemo,
    CustomGhostDemo,
    CustomGhostAndHandleDemo,
    BasicDroppableDemo,
    DropToleranceDemo,
    GroupingDemo,
  ],
})
export class DragAndDropDemoModule {}
