/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-icon-button-group-demo',
  templateUrl: './icon-button-group.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class IconButtonGroupDemo {
  flip: boolean = false;

  toggleFlip() {
    this.flip = !this.flip;
  }

  flip1: boolean = false;

  toggleFlip1() {
    this.flip1 = !this.flip1;
  }

  flip2: boolean = false;

  toggleFlip2() {
    this.flip2 = !this.flip2;
  }

  flip3: boolean = false;

  toggleFlip3() {
    this.flip3 = !this.flip3;
  }
}
