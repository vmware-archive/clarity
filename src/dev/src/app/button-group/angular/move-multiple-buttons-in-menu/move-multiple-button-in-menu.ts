/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-move-mulitple-button-in-menu-demo',
  templateUrl: './move-multiple-button-in-menu.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class MoveMultipleButtonInMenuDemo {
  flip: boolean = false;

  toggleFlip() {
    this.flip = !this.flip;
  }
}
