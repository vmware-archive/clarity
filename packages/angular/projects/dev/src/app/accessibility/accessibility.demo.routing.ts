/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AccessibilityDemo } from './accessibility.demo';
import { AriaLiveServiceDemo } from './aria-live-service.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: AccessibilityDemo,
    children: [{ path: '', component: AriaLiveServiceDemo }],
  },
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forChild(ROUTES);
