/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { OldProgressBarCardsDemo } from './old-progress-bar-cards';
import { ProgressBarAnimationsDemo } from './progress-bar-animations';
import { ProgressBarCardsDemo } from './progress-bar-cards';
import { ProgressBarColorsDemo } from './progress-bar-colors';
import { ProgressBarExamplesDemo } from './progress-bar-examples';
import { ProgressBarInlineDemo } from './progress-bar-inline';
import { ProgressBarInlineCardsDemo } from './progress-bar-inline-cards';
import { ProgressBarLoopDemo } from './progress-bar-loop';
import { ProgressBarSidenavDemo } from './progress-bar-sidenav';
import { ProgressBarStaticDemo } from './progress-bar-static';
import { ProgressBarStaticCardsDemo } from './progress-bar-static-cards';
import { ProgressBarsDemo } from './progress-bars.demo';

const ROUTES: Routes = [
  {
    path: '',
    component: ProgressBarsDemo,
    children: [
      { path: '', redirectTo: 'progress-bar-examples', pathMatch: 'full' },
      { path: 'progress-bar-examples', component: ProgressBarExamplesDemo },
      { path: 'progress-bar-colors', component: ProgressBarColorsDemo },
      { path: 'progress-bar-animations', component: ProgressBarAnimationsDemo },
      { path: 'progress-bar-cards', component: ProgressBarCardsDemo },
      { path: 'progress-bar-sidenav', component: ProgressBarSidenavDemo },
      { path: 'progress-bar-loop', component: ProgressBarLoopDemo },
      { path: 'progress-bar-static', component: ProgressBarStaticDemo },
      { path: 'progress-bar-static-cards', component: ProgressBarStaticCardsDemo },
      { path: 'progress-bar-inline', component: ProgressBarInlineDemo },
      { path: 'progress-bar-inline-cards', component: ProgressBarInlineCardsDemo },
      { path: 'old-progress-bar-cards', component: OldProgressBarCardsDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
