/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { ClarityDocComponent } from '../clarity-doc';

@Component({
  selector: 'clr-login-demo',
  templateUrl: './login.demo.html',
  host: {
    '[class.content-area]': 'true',
    '[class.dox-content-panel]': 'true',
  },
})
export class LoginDemo extends ClarityDocComponent {
  expanded = false;

  constructor() {
    super('login');
  }
}
