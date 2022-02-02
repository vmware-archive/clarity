/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClarityModule } from '@clr/angular';

import { ComboboxDemo } from './combobox.demo';
import { ROUTING } from './combobox.demo.routing';

@NgModule({
  imports: [CommonModule, ClarityModule, FormsModule, ReactiveFormsModule, ROUTING],
  declarations: [ComboboxDemo],
  exports: [ComboboxDemo],
})
export class ComboboxDemoModule {}
