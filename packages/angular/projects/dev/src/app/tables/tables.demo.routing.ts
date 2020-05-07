/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TablesBasicDemo } from './tables-basic';
import { TablesCompactDemo } from './tables-compact';
import { TablesCompactNoborderDemo } from './tables-compact-noborder';
import { TablesLeftcellDemo } from './tables-leftcell';
import { TablesMultilineDemo } from './tables-multiline';
import { TablesNoborderDemo } from './tables-noborder';
import { TablesVerticalDemo } from './tables-vertical';
import { TablesVerticalNoborderCompactDemo } from './tables-vertical-noborder-compact';
import { TablesWidthDemo } from './tables-width';
import { TablesDemo } from './tables.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: TablesDemo,
    children: [
      { path: '', redirectTo: 'tables-basic', pathMatch: 'full' },
      { path: 'tables-basic', component: TablesBasicDemo },
      { path: 'tables-leftcell', component: TablesLeftcellDemo },
      { path: 'tables-multiline', component: TablesMultilineDemo },
      { path: 'tables-noborder', component: TablesNoborderDemo },
      { path: 'tables-compact', component: TablesCompactDemo },
      { path: 'tables-compact-noborder', component: TablesCompactNoborderDemo },
      { path: 'tables-vertical', component: TablesVerticalDemo },
      { path: 'tables-vertical-noborder-compact', component: TablesVerticalNoborderCompactDemo },
      { path: 'tables-width', component: TablesWidthDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
