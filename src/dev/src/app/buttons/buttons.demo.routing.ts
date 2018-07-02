/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ButtonLoadingDemo } from './button-loading';
import { ButtonSizesDemo } from './button-sizes';
import { ButtonStatesDemo } from './button-states';
import { ButtonsIconsDemo } from './buttons-icons';
import { ButtonsTestDemo } from './buttons-test';
import { ButtonsDemo } from './buttons.demo';
import { IconButtonsDemo } from './icon-buttons';
import { InverseButtonDemo } from './inverse-button';
import { PrimaryButtonDemo } from './primary-button';
import { RealButtonDemo } from './real-button';
import { SecondaryButtonDemo } from './secondary-button';
import { TertiaryButtonDemo } from './tertiary-button';
import { ToggleDemo } from './toggles';

const ROUTES: Routes = [
  {
    path: '',
    component: ButtonsDemo,
    children: [
      { path: '', redirectTo: 'real-button', pathMatch: 'full' },
      { path: 'real-button', component: RealButtonDemo },
      { path: 'primary-button', component: PrimaryButtonDemo },
      { path: 'secondary-button', component: SecondaryButtonDemo },
      { path: 'tertiary-button', component: TertiaryButtonDemo },
      { path: 'inverse-button', component: InverseButtonDemo },
      { path: 'button-states', component: ButtonStatesDemo },
      { path: 'button-loading', component: ButtonLoadingDemo },
      { path: 'button-sizes', component: ButtonSizesDemo },
      { path: 'toggles', component: ToggleDemo },
      { path: 'buttons-test', component: ButtonsTestDemo },
      { path: 'icons', component: ButtonsIconsDemo },
      { path: 'icon-buttons', component: IconButtonsDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
