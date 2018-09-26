/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DummyAnchor } from './dummy-anchor';
import { DummyMenu } from './dummy-menu';
import { PopoversDemo } from './popovers.demo';
import { ROUTING } from './popovers.demo.routing';
// ClrConditionalModule is private, we don't export it as part of the public API.
// It is just re-exported by the various modules that use it (Dropdown, Tooltip, etc.)
import { ClrConditionalModule } from '../../../../clr-angular/utils/conditional/conditional.module';

@NgModule({
  imports: [CommonModule, ClrConditionalModule, ROUTING],
  declarations: [PopoversDemo, DummyMenu, DummyAnchor],
  exports: [PopoversDemo, DummyMenu, DummyAnchor],
})
export class PopoversDemoModule {}
