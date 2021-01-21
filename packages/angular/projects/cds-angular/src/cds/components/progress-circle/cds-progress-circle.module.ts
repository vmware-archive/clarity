/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsProgressCircleDirective } from './cds-progress-circle.directive';

import '@cds/core/progress-circle/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsProgressCircleDirective],
  exports: [CdsProgressCircleDirective],
})
export class CdsProgressCircleModule {}
