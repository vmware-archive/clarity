/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClarityModule } from '@clr/angular';

import { InputFieldsDemo } from './input-fields.demo';
import { ROUTING } from './input-fields.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [InputFieldsDemo],
  exports: [InputFieldsDemo],
})
export class InputFieldsDemoModule {}
