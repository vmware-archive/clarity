/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsInputGroupDirective } from './cds-input-group.directive';
import { CdsInputDirective } from './cds-input.directive';

import '@cds/core/input/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsInputGroupDirective, CdsInputDirective],
  exports: [CdsInputGroupDirective, CdsInputDirective],
})
export class CdsInputModule {}
