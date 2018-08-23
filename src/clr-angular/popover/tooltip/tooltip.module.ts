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

import { ClrTooltip } from './tooltip';
import { ClrTooltipContent } from './tooltip-content';
import { ClrTooltipTrigger } from './tooltip-trigger';

export const CLR_TOOLTIP_DIRECTIVES: Type<any>[] = [ClrTooltip, ClrTooltipTrigger, ClrTooltipContent];

@NgModule({
  imports: [CommonModule, ClrCommonPopoverModule],
  declarations: [CLR_TOOLTIP_DIRECTIVES],
  exports: [CLR_TOOLTIP_DIRECTIVES, ClrConditionalModule, ClrIconModule],
})
export class ClrTooltipModule {}
