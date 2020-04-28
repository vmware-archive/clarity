/**
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrIconModule } from '../../icon/icon.module';

import { ClrHostWrappingModule } from '../../utils/host-wrapping/host-wrapping.module';
import { ClrCommonFormsModule } from '../common/common.module';
import { ClrRange } from './range';
import { ClrRangeContainer } from './range-container';

@NgModule({
  imports: [CommonModule, ClrCommonFormsModule, ClrHostWrappingModule, ClrIconModule],
  declarations: [ClrRange, ClrRangeContainer],
  exports: [ClrCommonFormsModule, ClrRange, ClrRangeContainer],
  entryComponents: [ClrRangeContainer],
})
export class ClrRangeModule {}
