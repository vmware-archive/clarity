/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { CLR_MENU_POSITIONS } from '@clr/angular';

@Component({
  selector: 'clr-menu-directions-demo',
  templateUrl: './menu-directions.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class MenuDirectionsDemo {
  menuPosition: string = CLR_MENU_POSITIONS[0];

  flipDirection(): void {
    const direction: string = this.menuPosition;
    while (direction === this.menuPosition) {
      this.menuPosition = CLR_MENU_POSITIONS[Math.floor(Math.random() * CLR_MENU_POSITIONS.length)];
    }
  }
}
