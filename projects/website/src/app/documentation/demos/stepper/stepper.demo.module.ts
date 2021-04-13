/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { StepperDemo } from './stepper.demo';
import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { UtilsModule } from '../../../utils/utils.module';
import { DesignStepperDemo } from './design-stepper.demo';
import { AngularStepperReactiveDemo } from './angular-stepper-reactive.demo';
import { AngularStepperTemplateDemo } from './angular-stepper-template.demo';
import { AngularStepperApiDemo } from './angular-stepper-api.demo';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClarityModule,
    DocWrapperModule,
    RouterModule.forChild([{ path: '', component: StepperDemo }]),
    UtilsModule,
  ],
  declarations: [
    StepperDemo,
    DesignStepperDemo,
    AngularStepperReactiveDemo,
    AngularStepperTemplateDemo,
    AngularStepperApiDemo,
  ],
})
export class StepperDemoModule {}
