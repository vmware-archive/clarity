/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SpinnerSizesDemo } from './spinner-sizes';
import { SpinnerTypesDemo } from './spinner-types';
import { SpinnerDemo } from './spinner.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: SpinnerDemo,
    children: [
      { path: '', redirectTo: 'spinner-types', pathMatch: 'full' },
      { path: 'spinner-types', component: SpinnerTypesDemo },
      { path: 'spinner-sizes', component: SpinnerSizesDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
