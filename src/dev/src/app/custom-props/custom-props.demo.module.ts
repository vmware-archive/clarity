/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { CustomPropsDemo } from './custom-props.demo';
import { ROUTING } from './custom-props.routing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ROUTING],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  declarations: [CustomPropsDemo],
  exports: [CustomPropsDemo],
})
export class CustomPropsDemoModule {}
