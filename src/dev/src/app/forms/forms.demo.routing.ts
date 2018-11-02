/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormsCheckboxDemo } from './controls/checkbox';
import { FormsFileDemo } from './controls/file';
import { FormsRadioDemo } from './controls/radio';
import { FormsSelectDemo } from './controls/select';
import { FormsTextDemo } from './controls/text';
import { FormsTextareaDemo } from './controls/textarea';
import { FormsDemo } from './forms.demo';
import { FormsInputGroupDemo } from './input-group/input-group';
import { FormsLayoutCompactDemo } from './layout/layout-compact';
import { FormsLayoutCompactGridDemo } from './layout/layout-compact-grid';
import { FormsLayoutHorizontalDemo } from './layout/layout-horizontal';
import { FormsLayoutHorizontalGridDemo } from './layout/layout-horizontal-grid';
import { FormsLayoutModalDemo } from './layout/layout-modal';
import { FormsLayoutVerticalDemo } from './layout/layout-vertical';
import { FormsLayoutVerticalGridDemo } from './layout/layout-vertical-grid';
import { FormsTemplateDrivenDemo } from './template-driven/template-driven';
import { FormsReactiveDemo } from './reactive/reactive';
import { FormsResetDemo } from './reset/reset';

const ROUTES: Routes = [
  {
    path: '',
    component: FormsDemo,
    children: [
      { path: '', redirectTo: 'layout-vertical', pathMatch: 'full' },
      { path: 'layout-compact', component: FormsLayoutCompactDemo },
      { path: 'layout-compact-grid', component: FormsLayoutCompactGridDemo },
      { path: 'layout-horizontal', component: FormsLayoutHorizontalDemo },
      { path: 'layout-horizontal-grid', component: FormsLayoutHorizontalGridDemo },
      { path: 'layout-vertical', component: FormsLayoutVerticalDemo },
      { path: 'layout-vertical-grid', component: FormsLayoutVerticalGridDemo },
      { path: 'input-group', component: FormsInputGroupDemo },
      { path: 'layout-modal', component: FormsLayoutModalDemo },
      { path: 'checkbox', component: FormsCheckboxDemo },
      { path: 'file', component: FormsFileDemo },
      { path: 'radio', component: FormsRadioDemo },
      { path: 'select', component: FormsSelectDemo },
      { path: 'text', component: FormsTextDemo },
      { path: 'textarea', component: FormsTextareaDemo },
      { path: 'template-driven', component: FormsTemplateDrivenDemo },
      { path: 'reactive', component: FormsReactiveDemo },
      { path: 'reset', component: FormsResetDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders = RouterModule.forChild(ROUTES);
