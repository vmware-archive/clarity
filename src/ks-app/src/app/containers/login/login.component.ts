/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './login.component.html' })
export class KSLogin {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      authSource: 'admin',
      username: ['', Validators.required],
      password: ['', Validators.required],
      remember: '',
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.loginForm.value);
  }

  login() {
    this.submitted = true;
    console.log(this.loginForm.value);
    this.loginForm.reset();
    this.submitted = false;
  }
}
