/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-alt-cancel',
  templateUrl: './wizard-alt-cancel.demo.html',
})
export class WizardAltCancelDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  open = false;
  showCancelConfirm = false;

  pageCustomCancel() {
    this.showCancelConfirm = true;
  }

  doPageCancel() {
    this.showCancelConfirm = false;
    this.wizard.close();
  }

  doCancel() {
    if (confirm('Do you really, really want to close the wizard?')) {
      this.showCancelConfirm = false;
      this.wizard.close();
    }
  }
}
