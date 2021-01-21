/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsSelectDirective } from './cds-select.directive';

import '@cds/core/select/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsSelectDirective],
  exports: [CdsSelectDirective],
})
export class CdsSelectModule {}
