/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { DummyAnchor } from './dummy-anchor';
import { DummyMenu } from './dummy-menu';
import { PopoversDemo } from './popovers.demo';
import { ROUTING } from './popovers.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [PopoversDemo, DummyMenu, DummyAnchor],
  exports: [PopoversDemo, DummyMenu, DummyAnchor],
})
export class PopoversDemoModule {}
