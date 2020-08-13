/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IconsComponent } from './icons.component';
import { IconsGetStartedComponent } from './icons-get-started/icons-get-started.component';
import { IconsHowToUseComponent } from './icons-how-to-use/icons-how-to-use.component';
import { IconsApiComponent } from './icons-api/icons-api.component';
import { IconsSetsComponent } from './icons-sets/icons-sets.component';
import { IconsA11yComponent } from './icons-a11y/icons-a11y.component';

const routes: Routes = [
  {
    path: '',
    component: IconsComponent,
    children: [
      { path: '', component: IconsSetsComponent },
      { path: 'get-started', component: IconsGetStartedComponent },
      { path: 'how-to-use', component: IconsHowToUseComponent },
      { path: 'api', component: IconsApiComponent },
      { path: 'accessibility', component: IconsA11yComponent },
    ],
  },
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forChild(routes);
