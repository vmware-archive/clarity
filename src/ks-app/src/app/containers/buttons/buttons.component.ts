/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { ClrButton, ClrLoadingButton, ClrLoadingState } from '@clr/angular';

@Component({ templateUrl: './buttons.component.html' })
export class KSButtons {
  public validateState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public submitState: ClrLoadingState = ClrLoadingState.DEFAULT;
  public validateSmState: boolean = false;
  public submitSmState: ClrLoadingState = ClrLoadingState.DEFAULT;
  numbers: number[] = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  display: number[];

  /**
   * @description
   * These exist so that the exported API from Clarity is tested when ks-app is compiled with --prod.
   */
  private aClrButton: ClrButton;
  private aCLrLoadingButton: ClrLoadingButton;

  constructor() {
    this.display = this.numbers;
  }

  changeNumbers() {
    this.display.length = 0;
    for (const num of this.numbers) {
      console.log('num: ', num);
      this.display.push(this.numbers[Math.floor(Math.random() * this.numbers.length)]);
    }
    console.log(this.display);
  }

  validateDemo() {
    this.validateState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.validateState = ClrLoadingState.SUCCESS;
    }, 1500);
  }

  submitDemo() {
    this.submitState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.submitState = ClrLoadingState.DEFAULT;
    }, 1500);
  }

  validateSmDemo() {
    this.validateSmState = true;
    setTimeout(() => {
      this.validateSmState = false;
    }, 1500);
  }

  submitSmDemo() {
    this.submitSmState = ClrLoadingState.LOADING;
    setTimeout(() => {
      this.submitSmState = ClrLoadingState.DEFAULT;
    }, 1500);
  }
}
