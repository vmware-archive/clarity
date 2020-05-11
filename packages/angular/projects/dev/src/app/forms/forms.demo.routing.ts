/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
import { FormsLayoutCompactAngularDemo } from './layout-angular/layout-compact-angular';
import { FormsLayoutHorizontalAngularDemo } from './layout-angular/layout-horizontal-grid';
import { FormsLayoutVerticalAngularDemo } from './layout-angular/layout-vertical-grid';
import { FormsTemplateDrivenDemo } from './template-driven/template-driven';
import { FormsReactiveDemo } from './reactive/reactive';
import { FormsResetDemo } from './reset/reset';
import { FormsA11yDemo } from './a11y/a11y';
import { FormsLayoutCompactAngularGridDemo } from './layout-angular/layout-compact-angular-grid';
import { FormsLayoutHorizontalAngularGridDemo } from './layout-angular/layout-horizontal-angular-grid';
import { FormsGenericContainerDemo } from './generic-container/generic-container';

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
      { path: 'layout-compact-angular', component: FormsLayoutCompactAngularDemo },
      { path: 'layout-horizontal-angular', component: FormsLayoutHorizontalAngularDemo },
      { path: 'layout-vertical-angular', component: FormsLayoutVerticalAngularDemo },
      { path: 'layout-horizontal-angular-grid', component: FormsLayoutHorizontalAngularGridDemo },
      { path: 'layout-compact-angular-grid', component: FormsLayoutCompactAngularGridDemo },
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
      { path: 'a11y', component: FormsA11yDemo },
      { path: 'generic-container', component: FormsGenericContainerDemo },
    ],
  },
];

export const ROUTING: ModuleWithProviders<RouterModule> = RouterModule.forChild(ROUTES);
