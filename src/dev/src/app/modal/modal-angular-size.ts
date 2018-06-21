/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-modal-angular-size-demo',
  templateUrl: './modal-angular-size.demo.html',
})
export class ModalAngularSizeDemo {
  // Booleans to open each example modal
  public small: boolean = false;
  public large: boolean = false;
}
