/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-header-actions', templateUrl: './wizard-header-actions.demo.html' })
export class WizardHeaderActionsDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  userActive: boolean = true;

  public headerActionClicked(actionId: string): void {
    if ('clr-wizard-header-action-search' === actionId) {
      window.open('https://www.google.com/#q=what+is+the+meaning+of+life&*', '_blank');
    } else if ('clr-wizard-header-action-info' === actionId) {
      window.open('http://vmware.github.com/clarity', '_blank');
    } else {
      this.userActive = !this.userActive;
    }
  }
}
