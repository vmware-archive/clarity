/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsToggleGroupDirective } from './cds-toggle-group.directive';
import { CdsToggleDirective } from './cds-toggle.directive';

import '@cds/core/toggle/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsToggleGroupDirective, CdsToggleDirective],
  exports: [CdsToggleGroupDirective, CdsToggleDirective],
})
export class CdsToggleModule {}
