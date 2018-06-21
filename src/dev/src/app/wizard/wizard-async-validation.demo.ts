/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-async-validation', templateUrl: './wizard-async-validation.demo.html' })
export class WizardAsyncValidation {
  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('myForm') formData: any;

  loadingFlag: boolean = false;
  errorFlag: boolean = false;

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
  }

  onCommit(): void {
    const value: any = this.formData.value;
    this.loadingFlag = true;
    this.errorFlag = false;

    setTimeout(() => {
      if (value.answer === '42') {
        this.wizard.forceNext();
      } else {
        this.errorFlag = true;
      }
      this.loadingFlag = false;
    }, 1000);
  }
}
