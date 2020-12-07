/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdsModule } from '@cds/angular';
import { CdsDemo } from './cds.demo';
import { ROUTING } from './cds.demo.routing';

@NgModule({
  imports: [CommonModule, CdsModule, FormsModule, ReactiveFormsModule, ROUTING],
  declarations: [CdsDemo],
  exports: [CdsDemo],
})
export class CdsDemoModule {}
