/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrConditionalModule } from '../../utils/conditional/conditional.module';
import { ClrCommonPopoverModule } from '../common/popover.module';

import { ClrDropdown } from './dropdown';
import { ClrDropdownItem } from './dropdown-item';
import { ClrDropdownMenu } from './dropdown-menu';
import { ClrDropdownTrigger } from './dropdown-trigger';

export const CLR_DROPDOWN_DIRECTIVES: Type<any>[] = [ClrDropdown, ClrDropdownMenu, ClrDropdownTrigger, ClrDropdownItem];

@NgModule({
  imports: [CommonModule, ClrCommonPopoverModule],
  declarations: [CLR_DROPDOWN_DIRECTIVES],
  exports: [CLR_DROPDOWN_DIRECTIVES, ClrConditionalModule, ClrIconModule],
})
export class ClrDropdownModule {}
