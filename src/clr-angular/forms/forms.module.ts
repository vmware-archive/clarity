/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrCheckboxNextModule } from './checkbox/checkbox.module';
import { ClrCommonFormsModule } from './common/common.module';
import { ClrDatepickerModule } from './datepicker/datepicker.module';
import { ClrInputModule } from './input/input.module';
import { ClrRadioModule } from './radio/radio.module';
import { ClrTextareaModule } from './textarea';

@NgModule({
  imports: [CommonModule],
  exports: [
    ClrCommonFormsModule,
    ClrCheckboxNextModule,
    ClrInputModule,
    ClrTextareaModule,
    ClrRadioModule,
    ClrDatepickerModule,
  ],
})
export class ClrFormsNextModule {}
