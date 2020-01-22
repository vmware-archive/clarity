/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-custom-buttons',
  templateUrl: './wizard-custom-buttons.demo.html',
})
export class WizardCustomButtonsDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  open = false;
  showWarning = false;

  handleDangerClick() {
    this.wizard.finish(false);
  }

  doCustomClick(buttonType: string) {
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
