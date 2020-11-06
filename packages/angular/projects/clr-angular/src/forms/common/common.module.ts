/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { checkCircleIcon, ClarityIcons, exclamationCircleIcon } from '@cds/core/icon';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrControl } from './control';
import { ClrControlContainer } from './control-container';
import { ClrControlError } from './error';
import { ClrForm } from './form';
import { ClrControlHelper } from './helper';
import { ClrIfError } from './if-control-state/if-error';
import { ClrIfSuccess } from './if-control-state/if-success';
import { ClrLabel } from './label';
import { ClrLayout } from './layout';
import { ClrControlSuccess } from './success';

@NgModule({
  imports: [CommonModule, ClrIconModule],
  declarations: [
    ClrLabel,
    ClrControlError,
    ClrControlSuccess,
    ClrControlHelper,
    ClrIfError,
    ClrIfSuccess,
    ClrForm,
    ClrLayout,
    ClrControlContainer,
    ClrControl,
  ],
  exports: [
    ClrLabel,
    ClrControlError,
    ClrControlSuccess,
    ClrControlHelper,
    ClrIfError,
    ClrIfSuccess,
    ClrForm,
    ClrLayout,
    ClrControlContainer,
    ClrControl,
  ],
  entryComponents: [ClrControlContainer],
})
export class ClrCommonFormsModule {
  constructor() {
    ClarityIcons.addIcons(exclamationCircleIcon, checkCircleIcon);
  }
}
