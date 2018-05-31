/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'clr-progress-bar-inline-cards-demo',
  styleUrls: ['progress-bars.demo.scss'],
  templateUrl: './progress-bar-inline-cards.html',
})
export class ProgressBarInlineCardsDemo implements OnInit {
  value1: number = 0;
  value2: number = 0;
  value3: number = 0;

  getNewValue(): number {
    const random: number = Math.floor(Math.random() * 98) + 1;
    return parseInt(random + '', 10);
  }

  setNewValues(): void {
    this.value1 = this.getNewValue();
    this.value2 = this.getNewValue();
    this.value3 = this.getNewValue();
  }

  // For CSS Regression Tests
  setInitialValues(): void {
    this.value1 = 55;
    this.value2 = 55;
    this.value3 = 55;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.setInitialValues();
    }, 500);
  }
}
