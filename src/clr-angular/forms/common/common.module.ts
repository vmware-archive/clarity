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

@NgModule({
  imports: [CommonModule],
  declarations: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError],
  exports: [ClrLabel, ClrControlError, ClrControlHelper, ClrIfError],
})
export class ClrCommonFormsModule {}
