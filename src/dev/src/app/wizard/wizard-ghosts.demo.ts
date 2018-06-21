/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({ selector: 'clr-wizard-ghosts', templateUrl: './wizard-ghosts.demo.html' })
export class WizardGhostsDemo {
  @ViewChild('wizard') wizard: ClrWizard;

  public model: any;

  public ngOnInit() {
    this.model = { typesOfPages: '' };
  }

  open: boolean = false;

  typesOfPages = ['All', 'Odd', 'First and even', 'First and last'];

  get isAll(): boolean {
    return this.model.typesOfPages === '' || this.model.typesOfPages === 'All' || this.model.typesOfPages === null;
  }

  get showEvenPages(): boolean {
    return this.isAll || this.model.typesOfPages === 'First and even';
  }

  get showPageThree(): boolean {
    return this.isAll || this.model.typesOfPages === 'Odd';
  }

  get showPageFive(): boolean {
    return this.isAll || this.model.typesOfPages === 'Odd' || this.model.typesOfPages === 'First and last';
  }
}
