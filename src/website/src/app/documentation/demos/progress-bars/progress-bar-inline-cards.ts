/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
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
  value1 = 0;
  value2 = 0;
  value3 = 0;

  getNewValue(): number {
    const random: number = Math.floor(Math.random() * 98) + 1;
    return parseInt(random + '', 10);
  }

  setNewValues(): void {
    this.value1 = this.getNewValue();
    this.value2 = this.getNewValue();
    this.value3 = this.getNewValue();
  }

  ngOnInit(): void {
    this.setNewValues();
  }
}
