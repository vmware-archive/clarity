/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
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
import { FormsTemplateDrivenDemo } from './template-driven/template-driven';
import { FormsReactiveDemo } from './reactive/reactive';
import { FormsResetDemo } from './reset/reset';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ROUTING],
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
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsReactiveDemo,
    FormsResetDemo,
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
    FormsTextDemo,
    FormsCheckboxDemo,
    FormsFileDemo,
    FormsRadioDemo,
    FormsSelectDemo,
    FormsTextareaDemo,
    FormsTemplateDrivenDemo,
    FormsReactiveDemo,
    FormsResetDemo,
  ],
})
export class FormsDemoModule {}
