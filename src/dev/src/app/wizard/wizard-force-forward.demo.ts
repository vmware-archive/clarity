/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';
import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-force-forward', templateUrl: './wizard-force-forward.demo.html' })
export class WizardForceForwardDemo {
  @ViewChild('wizard') wizard: ClrWizard;
  _open: boolean = false;

  open() {
    this._open = !this.open;
  }
}
