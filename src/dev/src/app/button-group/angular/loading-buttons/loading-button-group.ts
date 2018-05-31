/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-loading-button-group-demo',
  templateUrl: './loading-button-group.html',
  styleUrls: ['../../button-group.demo.scss'],
})
export class LoadingButtonGroupDemo {
  load: boolean = false;

  startLoading(): void {
    this.load = true;
    setTimeout(() => {
      this.load = false;
    }, 2000);
  }
}
