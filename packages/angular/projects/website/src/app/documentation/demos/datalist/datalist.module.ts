/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { UtilsModule } from '../../../utils/utils.module';

import { DatalistDemo } from './datalist.demo';
import { DatalistBasicDemo } from './datalist-basic.demo';
import { DatalistTemplateValidationDemo } from './datalist-template-validation.demo';
import { DatalistReactiveValidationDemo } from './datalist-reactive-validation.demo';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: DatalistDemo }]),
    DocWrapperModule,
    UtilsModule,
  ],
  declarations: [DatalistDemo, DatalistBasicDemo, DatalistTemplateValidationDemo, DatalistReactiveValidationDemo],
  exports: [DatalistDemo],
})
export class DatalistDemoModule {}
