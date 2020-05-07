/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderColorsDemo } from './header-colors';
import { HeaderTypesDemo } from './header-types';
import { HeaderTypesOldDemo } from './header-types-old';
import { HeadersDemo } from './headers';
import { NavDemo } from './nav.demo';
import { NavsDemo } from './navs';
import { ResponsiveNav1Demo } from './responsive-nav1';
import { ResponsiveNav2Demo } from './responsive-nav2';
import { SidenavDemo } from './sidenav';
import { SubNavDemo } from './sub-nav';

const ROUTES: Routes = [
  {
    path: '',
    component: NavDemo,
    children: [
      { path: '', redirectTo: 'headers', pathMatch: 'full' },
      {
        path: 'headers',
        component: HeadersDemo,
        children: [
          { path: '', redirectTo: 'header-types', pathMatch: 'full' },
          { path: 'header-types', component: HeaderTypesDemo },
          { path: 'header-colors', component: HeaderColorsDemo },
          { path: 'header-types-old', component: HeaderTypesOldDemo },
        ],
      },
      { path: 'nav-tabs', component: NavsDemo },
      { path: 'sidenav', component: SidenavDemo },
      { path: 'subnav', component: SubNavDemo },
      { path: 'responsive-nav1', component: ResponsiveNav1Demo },
      { path: 'responsive-nav2', component: ResponsiveNav2Demo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
