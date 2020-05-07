/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsAngularDemo } from './tabs-angular';
import { TabsStaticDemo } from './tabs-static';
import { TabsDemo } from './tabs.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: TabsDemo,
    children: [
      { path: '', redirectTo: 'static', pathMatch: 'full' },
      { path: 'static', component: TabsStaticDemo },
      { path: 'angular', component: TabsAngularDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
