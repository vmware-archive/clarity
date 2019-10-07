/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DatalistDemo } from './datalist.demo';
import { ClarityModule } from '@clr/angular';
import { ROUTING } from './datalist.demo.routing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ROUTING],
  declarations: [DatalistDemo],
})
export class DatalistDemoModule {}
