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

import { ClrSignpost } from './signpost';
import { ClrSignpostContent } from './signpost-content';
import { ClrSignpostTrigger } from './signpost-trigger';

export const CLR_SIGNPOST_DIRECTIVES: Type<any>[] = [ClrSignpost, ClrSignpostContent, ClrSignpostTrigger];

@NgModule({
  imports: [CommonModule, ClrCommonPopoverModule, ClrIconModule],
  declarations: [CLR_SIGNPOST_DIRECTIVES],
  exports: [CLR_SIGNPOST_DIRECTIVES, ClrConditionalModule],
  providers: [],
})
export class ClrSignpostModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface Signpost extends ClrSignpost {}
/** @deprecated since 0.11 */
export const Signpost = ClrSignpost;
/** @deprecated since 0.11 */
export interface SignpostContent extends ClrSignpostContent {}
/** @deprecated since 0.11 */
export const SignpostContent = ClrSignpostContent;
/** @deprecated since 0.11 */
export interface SignpostTrigger extends ClrSignpostTrigger {}
/** @deprecated since 0.11 */
export const SignpostTrigger = ClrSignpostTrigger;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const SIGNPOST_DIRECTIVES = CLR_SIGNPOST_DIRECTIVES;
