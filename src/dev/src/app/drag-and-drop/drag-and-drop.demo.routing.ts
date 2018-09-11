/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicDraggableDemo } from './basic-draggable.demo';
import { BasicDroppableDemo } from './basic-droppable.demo';
import { CustomGhostAndHandleDemo } from './custom-ghost-and-handle.demo';
import { CustomGhostDemo } from './custom-ghost.demo';
import { DragAndDropDemo } from './drag-and-drop.demo';
import { DraggableHandleDemo } from './draggable-handle.demo';
import { DropToleranceDemo } from './drop-tolerance.demo';
import { GroupingDemo } from './grouping.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: DragAndDropDemo,
    children: [
      { path: '', redirectTo: 'draggable', pathMatch: 'full' },
      { path: 'draggable', component: BasicDraggableDemo },
      { path: 'draggable-handle', component: DraggableHandleDemo },
      { path: 'custom-ghost', component: CustomGhostDemo },
      { path: 'custom-ghost-and-handle', component: CustomGhostAndHandleDemo },
      { path: 'droppable', component: BasicDroppableDemo },
      { path: 'drop-tolerance', component: DropToleranceDemo },
      { path: 'grouping', component: GroupingDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
