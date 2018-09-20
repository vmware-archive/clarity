/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, SimpleChanges } from '@angular/core';

@Component({ selector: 'clr-login-demo', templateUrl: './login.demo.html' })
export class LoginDemo {
  formData = {
    userType: 'Local Users',
    username: '',
    password: '',
  };
}
