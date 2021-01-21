/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsCheckboxGroupDirective } from './cds-checkbox-group.directive';
import { CdsCheckboxDirective } from './cds-checkbox.directive';

import '@cds/core/checkbox/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsCheckboxGroupDirective, CdsCheckboxDirective],
  exports: [CdsCheckboxGroupDirective, CdsCheckboxDirective],
})
export class CdsCheckboxModule {}
