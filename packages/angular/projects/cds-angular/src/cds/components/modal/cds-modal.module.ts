/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsModalActionsDirective } from './cds-modal-actions.directive';
import { CdsModalContentDirective } from './cds-modal-content.directive';
import { CdsModalHeaderActionsDirective } from './cds-modal-header-actions.directive';
import { CdsModalHeaderDirective } from './cds-modal-header.directive';
import { CdsModalDirective } from './cds-modal.directive';

import '@cds/core/modal/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CdsModalActionsDirective,
    CdsModalContentDirective,
    CdsModalHeaderActionsDirective,
    CdsModalHeaderDirective,
    CdsModalDirective,
  ],
  exports: [
    CdsModalActionsDirective,
    CdsModalContentDirective,
    CdsModalHeaderActionsDirective,
    CdsModalHeaderDirective,
    CdsModalDirective,
  ],
})
export class CdsModalModule {}
