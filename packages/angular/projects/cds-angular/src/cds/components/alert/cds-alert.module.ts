/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsAlertActionsDirective } from './cds-alert-actions.directive';
import { CdsAlertGroupDirective } from './cds-alert-group.directive';
import { CdsAlertDirective } from './cds-alert.directive';

import '@cds/core/alert/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [CdsAlertActionsDirective, CdsAlertGroupDirective, CdsAlertDirective],
  exports: [CdsAlertActionsDirective, CdsAlertGroupDirective, CdsAlertDirective],
})
export class CdsAlertModule {}
