/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-reset', templateUrl: './wizard-reset.demo.html' })
export class WizardResetDemo implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;

  public open: boolean = false;

  public model: any;

  public ngOnInit() {
    this.model = { forceReset: false, favoriteColor: '', luckyNumber: '', flavorOfIceCream: '' };
  }

  public doFinish(): void {
    this.doReset();
  }

  public doReset(): void {
    if (this.model.forceReset) {
      this.model.forceReset = false;
      this.model.favoriteColor = '';
      this.model.luckyNumber = '';
      this.model.flavorOfIceCream = '';
      this.wizard.reset();
    }
  }
}
