/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrAlertModule, ClrSpinnerModule, ClrProgressBarModule, ClrCommonFormsModule } from '@clr/angular';

import { AccessibilityDemo } from './accessibility.demo';
import { AriaLiveServiceDemo } from './aria-live-service.demo';
import { ROUTING } from './accessibility.demo.routing';

@NgModule({
  imports: [CommonModule, ClrCommonFormsModule, ClrAlertModule, ClrSpinnerModule, ClrProgressBarModule, ROUTING],
  declarations: [AccessibilityDemo, AriaLiveServiceDemo],
})
export class AccessibilityDemoModule {}
