/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
/* angular stuff */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

/* app dependencies */
import { ClarityModule } from '@clr/angular';

/* app components */
import { ROUTING } from './utils.demo.routing';
import { IfOpenDemo } from './if-open/if-open.demo';
import { UtilsDemo } from './utils.demo';
import { SmartOpenDemo } from './smart-open/smart-open.demo';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [IfOpenDemo, SmartOpenDemo, UtilsDemo],
  exports: [IfOpenDemo, UtilsDemo, SmartOpenDemo],
})
export class UtilsDemoModule {}
