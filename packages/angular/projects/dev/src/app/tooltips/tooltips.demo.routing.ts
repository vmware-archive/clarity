/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TooltipsAngularDemo } from './tooltips-angular';
import { TooltipsButtonsDemo } from './tooltips-buttons';
import { TooltipsDirectionsDemo } from './tooltips-directions';
import { TooltipsIconDemo } from './tooltips-icons';
import { TooltipsSizesDemo } from './tooltips-sizes';
import { TooltipsTextDemo } from './tooltips-text';
import { TooltipsDemo } from './tooltips.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: TooltipsDemo,
    children: [
      { path: '', redirectTo: 'sizes', pathMatch: 'full' },
      { path: 'sizes', component: TooltipsSizesDemo },
      { path: 'directions', component: TooltipsDirectionsDemo },
      { path: 'angular', component: TooltipsAngularDemo },
      { path: 'icon-tooltips', component: TooltipsIconDemo },
      { path: 'text-tooltips', component: TooltipsTextDemo },
      { path: 'button-tooltips', component: TooltipsButtonsDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
