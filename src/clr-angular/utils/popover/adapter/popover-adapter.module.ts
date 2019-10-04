/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../../icon/icon.module';
import { ClrCommonPopoverModule } from '../../../popover/common/popover.module';
import { ClrFocusOnViewInitModule } from '../../focus/focus-on-view-init/focus-on-view-init.module';
import { ClrPopoverModuleNext } from '../popover.module';

import { ClrPopoverAdapter } from './popover-adapter';

export const CLR_SIMPLE_POPOVER_DIRECTIVES: Type<any>[] = [ClrPopoverAdapter];

@NgModule({
  imports: [CommonModule, ClrCommonPopoverModule, ClrIconModule, ClrFocusOnViewInitModule, ClrPopoverModuleNext],
  declarations: [CLR_SIMPLE_POPOVER_DIRECTIVES],
  exports: [CLR_SIMPLE_POPOVER_DIRECTIVES],
})
export class ClrPopoverAdapterModule {}
