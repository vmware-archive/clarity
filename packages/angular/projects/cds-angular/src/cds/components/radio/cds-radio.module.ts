/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsRadioGroupDirective } from './cds-radio-group.directive';
import { CdsRadioDirective } from './cds-radio.directive';

import '@cds/core/radio/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsRadioGroupDirective, CdsRadioDirective],
  exports: [CdsRadioGroupDirective, CdsRadioDirective],
})
export class CdsRadioModule {}
