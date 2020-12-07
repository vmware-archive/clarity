/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { startWith } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { cloudIcon, ClarityIcons } from '@cds/core/icon';

@Component({
  templateUrl: './cds.demo.html',
})
export class CdsDemo {
  show = false;

  form: FormGroup;
  formValue: Observable<{}>;

  constructor(private formBuilder: FormBuilder) {
    ClarityIcons.addIcons(cloudIcon);

    this.form = this.formBuilder.group({
      name: ['', Validators.required],
      select: ['Option One'],
      datalist: [''],
      password: ['', [Validators.required, Validators.minLength(6)]],
      search: ['', Validators.minLength(5)],
      time: [''],
      inputGroupProtocol: ['http://'],
      inputGroupPort: [''],
      range: [75],
      checkboxGroup1: [true],
      checkboxGroup2: [''],
      checkboxGroup3: [''],
      radioGroup: ['south-america'],
      toggle1: [true],
      toggle2: [''],
      file: [''],
      selectMultiple: [''],
      textarea: ['hello world'],
    });

    this.formValue = this.form.valueChanges.pipe(startWith(this.form.value));
  }

  get nameInvalid() {
    return this.form.controls.name.touched && this.form.controls.name.hasError('required');
  }

  get passwordRequired() {
    return this.form.controls.password.touched && this.form.controls.password.hasError('required');
  }

  get passwordMinLength() {
    return this.form.controls.password.touched && this.form.controls.password.hasError('minlength');
  }

  submit() {
    console.log(this.form.value);
  }
}
