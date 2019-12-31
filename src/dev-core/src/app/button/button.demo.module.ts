/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import '@clr/core/icon';
import { ClarityIcons, userIcon } from '@clr/core/icon-shapes';
import { ButtonDemoComponent } from './button.demo';

ClarityIcons.addIcons(userIcon);

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: ButtonDemoComponent }])],
  declarations: [ButtonDemoComponent],
  exports: [ButtonDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ButtonDemoModule {}
