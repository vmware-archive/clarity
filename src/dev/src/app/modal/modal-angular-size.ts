/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

export enum ModalSize {
  small = 'sm',
  medium = 'md',
  large = 'lg',
  extraLarge = 'xl',
}

@Component({
  selector: 'clr-modal-angular-size-demo',
  templateUrl: './modal-angular-size.demo.html',
})
export class ModalAngularSizeDemo {
  modalSize = ModalSize;
  selectedSize: ModalSize;
  open = false;
}
