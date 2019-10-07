/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrDatalistInput } from './datalist-input';
import { ClrInputModule } from '../input/input.module';
import { ClrDatalistContainer } from './datalist-container';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrDatalist } from './datalist';

@NgModule({
  imports: [CommonModule, ClrInputModule, ClrIconModule],
  declarations: [ClrDatalist, ClrDatalistInput, ClrDatalistContainer],
  exports: [ClrDatalist, ClrDatalistInput, ClrDatalistContainer],
})
export class ClrDatalistModule {}
