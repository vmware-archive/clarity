/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { VirtualScrollArrayDemo } from './virtual-scroll-array';
import { VirtualScrollInfiniteGeneratorDemo } from './virtual-scroll-infinite-generator';
import { VirtualScrollSlotMachineDemo } from './virtual-scroll-slot-machine';
import { VirtualScrollDemo } from './virtual-scroll.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: VirtualScrollDemo,
    children: [
      { path: '', redirectTo: 'array', pathMatch: 'full' },
      { path: 'array', component: VirtualScrollArrayDemo },
      { path: 'infinite-generator', component: VirtualScrollInfiniteGeneratorDemo },
      { path: 'slot-machine', component: VirtualScrollSlotMachineDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
