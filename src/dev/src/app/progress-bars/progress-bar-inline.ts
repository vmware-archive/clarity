/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clr-progress-bar-inline-demo',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-inline.html',
})
export class ProgressBarInlineDemo implements OnInit {
  inlineProgress: number = 0;
  inlineProgressTimerId: any = -1;

  inlineStaticProgbarValue: number = 0;
  staticDangerValue: number = 0;
  staticSuccessValue: number = 0;
  staticLabeledProgbarValue: number = 0;

  getNewValue(): number {
    const random: number = Math.floor(Math.random() * 98) + 1;
    return parseInt(random + '', 10);
  }

  setNewValues(): void {
    this.inlineStaticProgbarValue = this.getNewValue();
    this.staticLabeledProgbarValue = this.getNewValue();
    this.staticDangerValue = this.getNewValue();
    this.staticSuccessValue = this.getNewValue();
    this.runProgressBar();
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
    this.inlineProgressTimerId = setInterval(() => {
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
    this.runProgressBar();

    setTimeout(() => {
      this.setNewValues();
    }, 800);
  }
}
