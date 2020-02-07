/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit, ViewChild } from '@angular/core';

import { ClrWizard } from '@clr/angular';

@Component({
  selector: 'clr-wizard-alt-next',
  templateUrl: './wizard-alt-next.demo.html',
  styles: ['.stress { color: red; }'],
})
export class WizardAltNextDemo implements OnInit {
  @ViewChild('wizard') wizard: ClrWizard;

  model: any;
  stressText = false;
  errorFlag = false;
  open = false;

  ngOnInit() {
    this.model = { allowNext: false, sequenceOne: '', sequenceTwo: '', sequenceThree: '' };
  }

  pageCustomNext() {
    if (confirm('Are you sure you got it right?')) {
      this.errorFlag = false;
      this.wizard.forceNext();
    }
  }

  doFinish() {
    const sequenceOneIsCorrect = this.model.sequenceOne === 3;
    const sequenceTwoIsCorrect = this.model.sequenceTwo === 5;
    const sequenceThreeIsCorrect = this.model.sequenceThree === 8;
    const allAreCorrect = sequenceOneIsCorrect && sequenceTwoIsCorrect && sequenceThreeIsCorrect;

    if (allAreCorrect) {
      this.wizard.finish();
      // resetting for another pass through
      this.model.allowNext = false;
      this.model.sequenceOne = '';
      this.model.sequenceTwo = '';
      this.model.sequenceThree = '';
      this.wizard.reset();
      this.errorFlag = false;
    } else {
      this.errorFlag = true;
    }
  }

  doNext() {
    if (this.model.allowNext) {
      this.wizard.forceNext();
      this.stressText = false;
    } else {
      this.stressText = true;
    }
  }
}
