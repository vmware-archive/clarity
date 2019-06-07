/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, HostListener, HostBinding, Input, OnInit } from '@angular/core';

import { StepperService } from './providers/stepper.service';
import { ClrStepperPanel } from './stepper-panel';

export enum ClrStepButtonType {
  Next = 'next',
  Submit = 'submit',
}

@Directive({
  selector: '[clrStepButton]',
  host: {
    '[class.clr-step-button]': 'true',
    '[class.btn]': 'true',
    '[type]': "'button'",
  },
})
export class ClrStepButton implements OnInit {
  @Input('clrStepButton') type: ClrStepButtonType | string = ClrStepButtonType.Next;
  @HostBinding('class.btn-primary') submitButton = false;

  constructor(private clrStep: ClrStepperPanel, private stepperService: StepperService) {}

  ngOnInit() {
    this.submitButton = this.type === ClrStepButtonType.Submit;
  }

  @HostListener('click')
  navigateToNextPanel() {
    this.stepperService.navigateToNextPanel(this.clrStep.id, this.clrStep.formGroup.valid);
  }
}
