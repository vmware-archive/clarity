/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, ViewChildren } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ClrForm } from '@clr/angular';

@Component({ templateUrl: './validation.html' })
export class FormsValidationDemo {
  @ViewChildren(ClrForm) forms: ClrForm[];

  items = ['one', 'two'];

  model = new FormGroup({
    input: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    'input-help': new FormControl('', []),
    date: new FormControl('', [Validators.required]),
    'date-helper': new FormControl('', []),
    textarea: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    password: new FormControl('', [Validators.required, Validators.minLength(6), Validators.pattern(/asdfasdf/)]),
    options: new FormControl('', [Validators.required]),
    checkbox: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
    range: new FormControl('', [Validators.required]),
    datalist: new FormControl('', [Validators.required]),
  });

  validate() {
    this.forms.forEach(f => {
      f.markAsTouched();
    });
  }
}
