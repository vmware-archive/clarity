/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginDemo } from './login.demo';
import { LoginDeprecatedDemo } from './login-deprecated.demo';
import { LoginLayoutDemo } from './login-layout.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: LoginDemo,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'layout' },
      { path: 'layout', component: LoginLayoutDemo },
      { path: 'deprecated', component: LoginDeprecatedDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
