/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsButtonDirective } from './cds-button.directive';
import { CdsIconButtonDirective } from './cds-icon-button.directive';
import { CdsInlineButtonDirective } from './cds-inline-button.directive';

import '@cds/core/button/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsButtonDirective, CdsIconButtonDirective, CdsInlineButtonDirective],
  exports: [CdsButtonDirective, CdsIconButtonDirective, CdsInlineButtonDirective],
})
export class CdsButtonModule {}
