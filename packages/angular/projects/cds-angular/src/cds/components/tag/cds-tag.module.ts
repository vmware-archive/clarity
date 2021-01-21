/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsTagDirective } from './cds-tag.directive';

import '@cds/core/tag/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsTagDirective],
  exports: [CdsTagDirective],
})
export class CdsTagModule {}
