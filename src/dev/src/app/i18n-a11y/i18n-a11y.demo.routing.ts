/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { I18nA11yDemo } from './i18n-a11y.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: I18nA11yDemo,
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
