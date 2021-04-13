/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { TogglesDemo } from './toggles.demo';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../utils/utils.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    FormsModule,
    RouterModule.forChild([{ path: '', component: TogglesDemo }]),
    UtilsModule,
  ],
  declarations: [TogglesDemo],
  exports: [TogglesDemo],
})
export class TogglesDemoModule {}
