/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';
import { ClrWizardPage } from '@clr/angular';

@Component({ selector: 'clr-wizard-jump-to', templateUrl: './wizard-jump-to.demo.html' })
export class WizardJumpToDemo {
  @ViewChild('wizard') wizard: ClrWizard;
  @ViewChild('pageThree') pageThree: ClrWizardPage;
  @ViewChild('pageFive') pageFive: ClrWizardPage;

  public jumpTo(page: ClrWizardPage) {
    if (page && page.completed) {
      this.wizard.navService.currentPage = page;
    } else {
      this.wizard.navService.setLastEnabledPageCurrent();
    }
    this.wizard.open();
  }

  public jumpToThree(): void {
    this.jumpTo(this.pageThree);
  }

  public jumpToFive(): void {
    this.jumpTo(this.pageFive);
  }
}
