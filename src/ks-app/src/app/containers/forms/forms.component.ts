/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import {
  ClrInput,
  ClrInputContainer,
  ClrControlError,
  ClrControlHelper,
  ClrTextarea,
  ClrForm,
  ClrTextareaContainer,
  ClrIfError,
} from '@clr/angular';

@Component({ templateUrl: './forms.component.html' })
export class KSForms implements OnInit {
  employeeAddressForm: FormGroup;
  clrInput: ClrInput;
  clrInputContainer: ClrInputContainer;
  clrForm: ClrForm;
  clrTextarea: ClrTextarea;
  clrTextareaContainer: ClrTextareaContainer;
  clrControlHelper: ClrControlHelper;
  clrControlError: ClrControlError;
  clrIfError: ClrIfError;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.employeeAddressForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      address: this.formBuilder.group({ postalCode: ['', Validators.required], country: '' }),
    });
  }

  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log(this.employeeAddressForm.value);
  }

  addNewEmployeeAddress() {
    this.employeeAddressForm.reset();
    this.submitted = false;
  }
}
