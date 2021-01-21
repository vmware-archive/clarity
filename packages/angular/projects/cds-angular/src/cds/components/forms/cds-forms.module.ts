/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsControlActionDirective } from './cds-control-action.directive';
import { CdsInternalControlGroupDirective } from './cds-internal-control-group.directive';
import { CdsInternalControlLabelDirective } from './cds-internal-control-label.directive';
import { CdsControlMessageDirective } from './cds-control-message.directive';
import { CdsFormGroupDirective } from './cds-form-group.directive';
import { CdsControlDirective } from './cds-control.directive';
import { CdsInternalControlInlineDirective } from './cds-internal-control-inline.directive';

import '@cds/core/forms/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CdsControlActionDirective,
    CdsInternalControlGroupDirective,
    CdsInternalControlLabelDirective,
    CdsControlMessageDirective,
    CdsFormGroupDirective,
    CdsControlDirective,
    CdsInternalControlInlineDirective,
  ],
  exports: [
    CdsControlActionDirective,
    CdsInternalControlGroupDirective,
    CdsInternalControlLabelDirective,
    CdsControlMessageDirective,
    CdsFormGroupDirective,
    CdsControlDirective,
    CdsInternalControlInlineDirective,
  ],
})
export class CdsFormsModule {}
