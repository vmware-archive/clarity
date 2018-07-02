/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LabelsClickableDemo } from './labels-clickable';
import { LabelsColorOptionsDemo } from './labels-color-options';
import { LabelsDefaultDemo } from './labels-default';
import { LabelsStatusDemo } from './labels-status';
import { LabelsWithBadgesDemo } from './labels-with-badges';
import { LabelsDemo } from './labels.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: LabelsDemo,
    children: [
      { path: '', redirectTo: 'default', pathMatch: 'full' },
      { path: 'with-badges', component: LabelsWithBadgesDemo },
      { path: 'status', component: LabelsStatusDemo },
      { path: 'clickable', component: LabelsClickableDemo },
      { path: 'color-options', component: LabelsColorOptionsDemo },
      { path: 'default', component: LabelsDefaultDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
