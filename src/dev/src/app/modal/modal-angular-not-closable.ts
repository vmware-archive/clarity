/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';

@Component({
  selector: 'clr-modal-angular-not-closable-demo',
  templateUrl: './modal-angular-not-closable.demo.html',
})
export class ModalAngularNotClosableDemo {
  // Booleans to open each example modal
  public closable: boolean = false;
}
