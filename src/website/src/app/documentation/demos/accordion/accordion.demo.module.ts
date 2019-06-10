/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { UtilsModule } from '../../../utils/utils.module';
import { AccordionDemo } from './accordion.demo';
import { AngularAccordionDemo } from './angular-accordion.demo';
import { ApiAccordionDemo } from './api-accordion.demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([{ path: '', component: AccordionDemo }]),
    UtilsModule,
  ],
  declarations: [AccordionDemo, AngularAccordionDemo, ApiAccordionDemo],
})
export class AccordionDemoModule {}
