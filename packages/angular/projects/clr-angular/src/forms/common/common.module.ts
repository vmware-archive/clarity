/**
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClrIconModule } from '../../icon/icon.module';

import { ClrControlError } from './error';
import { ClrControlHelper } from './helper';
import { ClrIfError } from './if-error/if-error';
import { ClrLabel } from './label';
import { ClrForm } from './form';
import { ClrLayout } from './layout';
import { ClrControlContainer } from './control-container';
import { ClrControl } from './control';

@NgModule({
  imports: [CommonModule, ClrIconModule],
  declarations: [
    ClrLabel,
    ClrControlError,
    ClrControlHelper,
    ClrIfError,
    ClrForm,
    ClrLayout,
    ClrControlContainer,
    ClrControl,
  ],
  exports: [
    ClrLabel,
    ClrControlError,
    ClrControlHelper,
    ClrIfError,
    ClrForm,
    ClrLayout,
    ClrControlContainer,
    ClrControl,
  ],
  entryComponents: [ClrControlContainer],
})
export class ClrCommonFormsModule {}
