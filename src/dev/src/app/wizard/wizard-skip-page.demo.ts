/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-skip-page', templateUrl: './wizard-skip-page.demo.html' })
export class WizardSkipPageDemo {
  @ViewChild('wizard') wizard: ClrWizard;
  skipStepTwo: boolean = true;
  _open: boolean = false;

  toggleStepTwo() {
    this.skipStepTwo = !this.skipStepTwo;
  }

  open() {
    this._open = !this.open;
  }
}
