/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsIconDirective } from './cds-icon.directive';

import '@cds/core/icon/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsIconDirective],
  exports: [CdsIconDirective],
})
export class CdsIconModule {}
