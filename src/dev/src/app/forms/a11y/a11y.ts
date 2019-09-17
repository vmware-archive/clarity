/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import '@clr/icons/shapes/social-shapes';
import '@clr/icons/shapes/essential-shapes';
import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({ templateUrl: './a11y.html' })
export class FormsA11yDemo {
  reactiveModel = new FormGroup({
    checkbox: new FormControl('', [Validators.required]),
    text: new FormControl('', [Validators.required]),
    radio: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
    select: new FormControl('', [Validators.required]),
    textarea: new FormControl('', [Validators.required]),
    date: new FormControl('', [Validators.required]),
    toggle: new FormControl('', [Validators.required]),
  });

  templateModel = {
    basic: '',
    container: '',
    required: '',
  };

  submitReactive() {
    console.log('FormsA11yReactive');
  }

  submitTemplate() {
    console.log('FormsA11yTemplate');
  }
}
