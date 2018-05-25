/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-hide-show-overflow-menu-demo',
  templateUrl: './hide-show-overflow-toggle.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class HideShowOverflowToggleDemo {
  hide: boolean = false;

  toggleHide() {
    this.hide = !this.hide;
  }
}
