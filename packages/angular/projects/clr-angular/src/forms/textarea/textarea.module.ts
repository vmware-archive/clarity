/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonFormsModule } from '../common/common.module';

import { ClrTextarea } from './textarea';
import { ClrTextareaContainer } from './textarea-container';

@NgModule({
  imports: [CommonModule, FormsModule, ClrIconModule, ClrCommonFormsModule],
  declarations: [ClrTextarea, ClrTextareaContainer],
  exports: [ClrCommonFormsModule, ClrTextarea, ClrTextareaContainer],
  entryComponents: [ClrTextareaContainer],
})
export class ClrTextareaModule {}
