/**
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';

import { ClrOption } from './option';
import { ClrOptions } from './options';
import { ClrCombobox } from './combobox';

@NgModule({
  imports: [CommonModule, ClrIconModule],
  declarations: [ClrCombobox, ClrOptions, ClrOption],
  exports: [ClrCombobox, ClrOptions, ClrOption, ClrConditionalModule],
})
export class ClrComboboxModule {}
