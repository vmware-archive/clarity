/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TimelineDemo } from './timeline.demo';

const ROUTES: Routes = [{ path: '', component: TimelineDemo }];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
