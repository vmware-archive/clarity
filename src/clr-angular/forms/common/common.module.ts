/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrControlError } from './error';
import { ClrControlHelper } from './helper';
import { ClrIfError } from './if-error/if-error';
import { ClrLabel } from './label';
import { ClrForm } from './form';
import { ClrLayout } from './layout';

@NgModule({
  imports: [CommonModule],
  declarations: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
  exports: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError, ClrForm, ClrLayout],
})
export class ClrCommonFormsModule {}
