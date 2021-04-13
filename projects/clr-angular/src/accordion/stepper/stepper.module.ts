/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrAccordionModule } from '../accordion.module';
import { ClrIconModule } from '../../icon/icon.module';
import { ClrStepButton } from './../stepper/step-button';
import { ClrStepper } from './../stepper/stepper';
import { ClrStepperPanel } from './stepper-panel';
import { StepperOompaLoompa } from './chocolate/stepper-oompa-loompa';
import { StepperWillyWonka } from './chocolate/stepper-willy-wonka';

const declarations = [ClrStepper, ClrStepButton, ClrStepperPanel, StepperOompaLoompa, StepperWillyWonka];

@NgModule({
  imports: [CommonModule, ClrIconModule, ClrAccordionModule],
  declarations: [...declarations],
  exports: [...declarations, ClrAccordionModule],
})
export class ClrStepperModule {}
