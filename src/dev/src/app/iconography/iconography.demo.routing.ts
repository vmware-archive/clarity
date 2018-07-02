/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IconColorsDemo } from './icon-colors';
import { IconInverseColorDemo } from './icon-inverse-color';
import { IconOrientationDemo } from './icon-orientation';
import { IconSelectionDemo } from './icon-selection';
import { IconSizeDemo } from './icon-size';
import { IconVariantsDemo } from './icon-variants';
import { IconsDemo } from './iconography.demo';
import { IconsViewBoxTestDemo } from './icons-view-box-test.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: IconsDemo,
    children: [
      { path: '', redirectTo: 'selection', pathMatch: 'full' },
      { path: 'selection', component: IconSelectionDemo },
      { path: 'color-options', component: IconColorsDemo },
      { path: 'inverse-color', component: IconInverseColorDemo },
      { path: 'size', component: IconSizeDemo },
      { path: 'orientation', component: IconOrientationDemo },
      { path: 'variants', component: IconVariantsDemo },
      { path: 'view-box-test', component: IconsViewBoxTestDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
