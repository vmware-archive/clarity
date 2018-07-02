/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RadiosDemo } from './radios.demo';

const ROUTES: Routes = [{ path: '', component: RadiosDemo }];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
