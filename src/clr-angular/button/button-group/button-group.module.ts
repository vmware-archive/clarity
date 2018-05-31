/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../../icon/icon.module';
import { ClrCommonPopoverModule } from '../../popover/common/popover.module';

import { ClrButton } from './button';
import { ClrButtonGroup } from './button-group';

export const CLR_BUTTON_GROUP_DIRECTIVES: Type<any>[] = [ClrButton, ClrButtonGroup];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrCommonPopoverModule],
  declarations: [CLR_BUTTON_GROUP_DIRECTIVES],
  exports: [CLR_BUTTON_GROUP_DIRECTIVES],
})
export class ClrButtonGroupModule {}

/* tslint:disable variable-name */
/** @deprecated since 0.11 */
export interface Button extends ClrButton {}
/** @deprecated since 0.11 */
export const Button = ClrButton;
/** @deprecated since 0.11 */
export interface ButtonGroup extends ClrButtonGroup {}
/** @deprecated since 0.11 */
export const ButtonGroup = ClrButtonGroup;
/* tslint:enable variable-name */
/** @deprecated since 0.11 */
export const BUTTON_GROUP_DIRECTIVES = CLR_BUTTON_GROUP_DIRECTIVES;
