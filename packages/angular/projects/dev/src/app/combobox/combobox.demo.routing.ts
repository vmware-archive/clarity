/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { BasicNgComboboxDemo } from './basic-ng-combobox';
import { OptionalMenuDemo } from './optional-menu';
import { ComboboxDemo } from './combobox.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: ComboboxDemo,
    children: [
      { path: '', redirectTo: 'basic', pathMatch: 'full' },
      { path: 'basic', component: BasicNgComboboxDemo },
      { path: 'optional-menu', component: OptionalMenuDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
