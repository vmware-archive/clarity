/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { FormCompactDemo } from './compact-forms/form-compact';
import { FormFieldsDemo } from './form-fields/form-fields';
import { FormGridValidationDemo } from './form-grid-validation/form-grid-validation';
import { FormGridDemo } from './form-grid/form-grid';
import { FormTestDemo } from './form-test/form-test';
import { FormValidationDemo } from './form-validation-static/form-validation';
import { FormsDemo } from './forms.demo';
import { ROUTING } from './forms.demo.routing';
import { ReactiveFormsDemo } from './reactive-forms/reactive-forms';
import { TemplateDrivenFormsDemo } from './template-driven-forms/template-driven-forms';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ROUTING],
  declarations: [
    FormsDemo,
    FormFieldsDemo,
    FormGridDemo,
    FormTestDemo,
    FormValidationDemo,
    FormGridValidationDemo,
    FormCompactDemo,
    TemplateDrivenFormsDemo,
    ReactiveFormsDemo,
  ],
  exports: [
    FormsDemo,
    FormFieldsDemo,
    FormGridDemo,
    FormTestDemo,
    FormValidationDemo,
    FormGridValidationDemo,
    FormCompactDemo,
    TemplateDrivenFormsDemo,
    ReactiveFormsDemo,
  ],
})
export class FormsDeprecatedDemoModule {}
