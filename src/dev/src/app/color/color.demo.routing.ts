/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ColorContrastDemo } from './color-contrast';
import { ColorLuminanceDemo } from './color-luminance';
import { ColorPalette } from './color-palette';
import { ColorsDemo } from './color.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: ColorsDemo,
    children: [
      { path: '', redirectTo: 'color-palette', pathMatch: 'full' },
      { path: 'color-palette', component: ColorPalette },
      { path: 'color-luminance', component: ColorLuminanceDemo },
      { path: 'color-contrast', component: ColorContrastDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
