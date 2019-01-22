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
import { FormsModule } from '@angular/forms';
/* app components */
import { ROUTING } from './utils.demo.routing';
import { UtilsDemo } from './utils.demo';
import { SmartOpenDemo } from './smart-open/smart-open.demo';
import { MultiNodeDemo } from './smart-open/multi-node.demo';
import { SimpleDivDemo } from './smart-open/simple-div.demo';

@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ROUTING],
  declarations: [MultiNodeDemo, SimpleDivDemo, SmartOpenDemo, UtilsDemo],
  exports: [UtilsDemo, SmartOpenDemo],
})
export class UtilsDemoModule {}
