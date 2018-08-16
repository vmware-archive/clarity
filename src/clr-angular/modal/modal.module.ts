/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../icon/icon.module';
import { ClrFocusTrapModule } from '../utils/focus-trap/focus-trap.module';
import { ClrModal } from './modal';

export const CLR_MODAL_DIRECTIVES: Type<any>[] = [ClrModal];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrFocusTrapModule],
  declarations: [CLR_MODAL_DIRECTIVES],
  exports: [CLR_MODAL_DIRECTIVES],
})
export class ClrModalModule {}
