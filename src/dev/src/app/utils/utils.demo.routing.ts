/*
 *  Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 *
 */

import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SmartOpenDemo } from './smart-open/smart-open.demo';
import { UtilsDemo } from './utils.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: UtilsDemo,
    children: [
      { path: '', redirectTo: 'smart-open', pathMatch: 'full' },
      { path: 'smart-open', component: SmartOpenDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
