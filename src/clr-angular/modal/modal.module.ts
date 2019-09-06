/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, Type } from '@angular/core';

import { ClrIconModule } from '../icon/icon.module';
import { ClrFocusTrapModule } from '../utils/focus-trap/focus-trap.module';
import { ClrModal } from './modal';
import { ClrModalBody } from './modal-body';
import { ClrFocusOnViewInitModule } from '../utils/focus/focus-on-view-init/focus-on-view-init.module';

export const CLR_MODAL_DIRECTIVES: Type<any>[] = [ClrModal, ClrModalBody];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrFocusTrapModule, ClrFocusOnViewInitModule],
  declarations: [CLR_MODAL_DIRECTIVES],
  exports: [CLR_MODAL_DIRECTIVES, ClrIconModule, ClrFocusOnViewInitModule],
})
export class ClrModalModule {}
