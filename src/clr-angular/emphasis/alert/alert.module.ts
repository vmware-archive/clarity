/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrDropdownModule } from '../../popover/dropdown/dropdown.module';

import { ClrAlert } from './alert';
import { ClrAlertItem } from './alert-item';
import { ClrAlerts } from './alerts';
import { ClrAlertsPager } from './alerts-pager';

export const CLR_ALERT_DIRECTIVES: Type<any>[] = [ClrAlert, ClrAlertItem, ClrAlerts, ClrAlertsPager];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrDropdownModule],
  declarations: [CLR_ALERT_DIRECTIVES],
  exports: [CLR_ALERT_DIRECTIVES],
})
export class ClrAlertModule {}
