/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { IconSetsDemoComponent } from './icon-sets.demo';

@NgModule({
  imports: [CommonModule, ReactiveFormsModule, RouterModule.forChild([{ path: '', component: IconSetsDemoComponent }])],
  declarations: [IconSetsDemoComponent],
  exports: [IconSetsDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class IconSetsDemoModule {}
