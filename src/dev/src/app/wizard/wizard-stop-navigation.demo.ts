/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-stop-navigation',
  templateUrl: './wizard-stop-navigation.demo.html',
})
export class WizardStopNavigation {
  @ViewChild('wizard') wizard: ClrWizard;

  open = false;
  untouched = true;
  loading = false;
  progress = 0;
  model = { won: '', too: '', tree: '' };

  get readyToFinish() {
    return !this.untouched && !this.loading;
  }

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel() {
    this.wizard.close();
    this.resetWizard();
  }

  resetWizard() {
    this.wizard.reset();
    this.model.won = '';
    this.model.too = '';
    this.model.tree = '';
    this.progress = 0;
  }

  onCommit() {
    if (this.untouched) {
      this.untouched = false;
      this.loading = true;
      const timer = setInterval(() => {
        this.progress = this.progress + 14;

        if (this.progress > 99) {
          this.progress = 100;
          this.loading = false;
          clearInterval(timer);
        }
      }, 1000);
    } else {
      this.wizard.forceFinish();
      this.resetWizard();
    }
  }
}
