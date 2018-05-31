/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ProgBarExample } from './progress-bar-example';

@Component({ templateUrl: './progress-bars.component.html' })
export class KSProgressBars {
  examples: ProgBarExample[];
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;
  staticProgbarValue: number = 0;
  staticDangerValue: number = 0;
  staticSuccessValue: number = 0;
  staticLabeledProgbarValue: number = 0;
  inlineProgress: number = 0;
  inlineProgressTimerId: number = -1;
  inlineStaticProgbarValue: number = 0;

  constructor() {
    this.examples = [
      new ProgBarExample('progress-fade labeled', 'Labeled w/ Fade Out', true),
      new ProgBarExample('flash success progress-fade', 'Success Flash w/ fade'),
      new ProgBarExample('danger', 'Danger/Warning'),
      new ProgBarExample('flash-danger progress-fade', 'Fade Out, flash danger'),
    ];
  }

  getNewValue(): number {
    const random: number = Math.floor(Math.random() * 98) + 1;
    return parseInt(random + '', 10);
  }

  setNewValues(): void {
    this.staticProgbarValue = this.getNewValue();
    this.staticLabeledProgbarValue = this.getNewValue();
    this.staticDangerValue = this.getNewValue();
    this.staticSuccessValue = this.getNewValue();
    this.value1 = this.getNewValue();
    this.value2 = this.getNewValue();
    this.value3 = this.getNewValue();
    this.inlineProgress = this.getNewValue();
    this.inlineStaticProgbarValue = this.getNewValue();
  }

  stopProgressBar(): void {
    if (this.inlineProgressTimerId > -1) {
      clearInterval(this.inlineProgressTimerId);
      this.inlineProgressTimerId = -1;
      this.inlineProgress = 0;
    }
  }

  runProgressBar(): void {
    this.stopProgressBar();
    this.inlineProgressTimerId = window.setInterval(() => {
      const oldProgressValue: number = this.inlineProgress;
      let increment: number = Math.floor(Math.random() * 15) + 1;
      increment = parseInt(increment + '', 10);
      let newProgressValue: number = oldProgressValue + increment;

      newProgressValue = newProgressValue > 99 ? 100 : newProgressValue;

      this.inlineProgress = newProgressValue;

      if (newProgressValue > 99) {
        this.stopProgressBar();
      }
    }, 300);
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.runProgressBar();
      this.setNewValues();
    }, 200);
  }
}
