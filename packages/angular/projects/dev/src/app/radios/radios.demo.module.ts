/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';

import { RadiosDemo } from './radios.demo';
import { ROUTING } from './radios.demo.routing';

@NgModule({
  imports: [ClarityModule, FormsModule, ROUTING],
  declarations: [RadiosDemo],
  exports: [RadiosDemo],
})
export class RadiosDemoModule {}
