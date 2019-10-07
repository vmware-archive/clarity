/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrDatalist } from './datalist';
import { ClrInputModule } from '../input/input.module';
import { ClrDatalistContainer } from './datalist-container';
import { ClrIconModule } from '../../icon/icon.module';

@NgModule({
  imports: [CommonModule, ClrInputModule, ClrIconModule],
  declarations: [ClrDatalist, ClrDatalistContainer],
  exports: [ClrDatalist, ClrDatalistContainer],
})
export class ClrDatalistModule {}
