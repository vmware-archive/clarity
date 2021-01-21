/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsFileDirective } from './cds-file.directive';

import '@cds/core/file/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsFileDirective],
  exports: [CdsFileDirective],
})
export class CdsFileModule {}
