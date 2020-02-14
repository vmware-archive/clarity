/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { FormsCheckboxDemo } from './controls/checkbox';
import { FormsFileDemo } from './controls/file';
import { FormsRadioDemo } from './controls/radio';
import { FormsSelectDemo } from './controls/select';
import { FormsTextDemo } from './controls/text';
import { FormsTextareaDemo } from './controls/textarea';
import { FormsDemo } from './forms.demo';
import { ROUTING } from './forms.demo.routing';
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
import { FormsLayoutHorizontalAngularGridDemo } from './layout-angular/layout-horizontal-angular-grid';
import { FormsLayoutCompactAngularGridDemo } from './layout-angular/layout-compact-angular-grid';
import { FormsGenericContainerDemo } from './generic-container/generic-container';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, NgSelectModule, ROUTING],
  declarations: [
    FormsDemo,
    FormsInputGroupDemo,
    FormsLayoutVerticalDemo,
    FormsLayoutHorizontalDemo,
    FormsLayoutCompactDemo,
    FormsLayoutVerticalGridDemo,
    FormsLayoutHorizontalGridDemo,
    FormsLayoutCompactGridDemo,
    FormsLayoutModalDemo,
    FormsLayoutCompactAngularDemo,
    FormsLayoutHorizontalAngularDemo,
    FormsLayoutVerticalAngularDemo,
    FormsLayoutHorizontalAngularGridDemo,
    FormsLayoutCompactAngularGridDemo,
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsReactiveDemo,
    FormsResetDemo,
    FormsA11yDemo,
    FormsGenericContainerDemo,
  ],
  exports: [
    FormsDemo,
    FormsInputGroupDemo,
    FormsLayoutVerticalDemo,
    FormsLayoutHorizontalDemo,
    FormsLayoutCompactDemo,
    FormsLayoutVerticalGridDemo,
    FormsLayoutHorizontalGridDemo,
    FormsLayoutCompactGridDemo,
    FormsLayoutModalDemo,
    FormsLayoutCompactAngularDemo,
    FormsLayoutHorizontalAngularDemo,
    FormsLayoutVerticalAngularDemo,
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsReactiveDemo,
    FormsResetDemo,
    FormsA11yDemo,
    FormsGenericContainerDemo,
  ],
})
export class FormsDemoModule {}
