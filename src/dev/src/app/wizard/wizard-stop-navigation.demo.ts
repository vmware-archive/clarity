/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-stop-navigation', templateUrl: './wizard-stop-navigation.demo.html' })
export class WizardStopNavigation {
  @ViewChild('wizard') wizard: ClrWizard;

  untouched: boolean = true;
  loading: boolean = false;
  errorFlag: boolean = false;
  progress: number = 0;

  get readyToFinish(): boolean {
    return !this.untouched && !this.loading;
  }

  model = { won: '', too: '', tree: '' };

  // have to define doCancel because page will prevent doCancel from working
  // if the page had a previous button, you would need to call
  // this.wizard.previous() manually as well...
  doCancel(): void {
    this.wizard.close();
    this.resetWizard();
  }

  resetWizard(): void {
    this.wizard.reset();
    this.model.won = '';
    this.model.too = '';
    this.model.tree = '';
    this.progress = 0;
  }

  onCommit(): void {
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
