/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdcComponentStatus} from './cdc-component-status';

@NgModule({
  imports: [CommonModule],
  declarations: [CdcComponentStatus],
  exports: [CdcComponentStatus],
})
export class CdcModule { }