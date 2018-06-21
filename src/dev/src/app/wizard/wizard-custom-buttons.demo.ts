/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-custom-buttons', templateUrl: './wizard-custom-buttons.demo.html' })
export class WizardCustomButtonsDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  public handleDangerClick(): void {
    this.wizard.finish(false);
  }

  public showWarning = false;

  public doCustomClick(buttonType: string): void {
    if ('custom-next' === buttonType) {
      this.wizard.next(false);
    }

    if ('custom-previous' === buttonType) {
      this.wizard.previous();
    }

    if ('custom-danger' === buttonType) {
      this.showWarning = true;
    }
  }
}
