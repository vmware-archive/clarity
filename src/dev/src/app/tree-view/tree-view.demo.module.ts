/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';
import { UtilsDemoModule } from '../_utils/utils.module';

import { TreeViewDemo } from './tree-view.demo';
import { ROUTING } from './tree-view.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING, UtilsDemoModule],
  declarations: [],
  exports: [TreeViewDemo],
})
export class TreeViewDemoModule {}
