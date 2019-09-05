/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ButtonDemoComponent } from './button.demo';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: ButtonDemoComponent }])],
  declarations: [ButtonDemoComponent],
  exports: [ButtonDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonDemoModule {}
