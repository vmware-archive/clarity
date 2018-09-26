/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClrIconModule, ClrInputModule } from '@clr/angular';

import { InputDemo } from './input.demo';
import { ROUTING } from './input.demo.routing';

@NgModule({
  imports: [ClrIconModule, ClrInputModule, FormsModule, ROUTING],
  declarations: [InputDemo],
})
export class InputDemoModule {}
