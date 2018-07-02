/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutAdditionalSectionsDemo } from './layout-additional-sections';
import { LayoutAllDemo } from './layout-all';
import { LayoutNoSidenavDemo } from './layout-no-sidenav';
import { LayoutNoSubnavDemo } from './layout-no-subnav';
import { LayoutOnlyHeaderDemo } from './layout-only-header';
import { LayoutSidenavPrimaryDemo } from './layout-sidenav-primary';
import { LayoutSubnavPrimaryDemo } from './layout-subnav-primary';
import { LayoutDemo } from './layout.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: LayoutDemo,
    children: [
      { path: '', redirectTo: 'layout-all', pathMatch: 'full' },
      { path: 'layout-all', component: LayoutAllDemo },
      { path: 'layout-no-subnav', component: LayoutNoSubnavDemo },
      { path: 'layout-no-sidenav', component: LayoutNoSidenavDemo },
      { path: 'layout-only-header', component: LayoutOnlyHeaderDemo },
      { path: 'layout-subnav-primary', component: LayoutSubnavPrimaryDemo },
      { path: 'layout-sidenav-primary', component: LayoutSidenavPrimaryDemo },
      { path: 'layout-additional-sections', component: LayoutAdditionalSectionsDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
