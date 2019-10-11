/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { I18nDemoComponent } from './i18n.demo';

@NgModule({
  imports: [CommonModule, RouterModule.forChild([{ path: '', component: I18nDemoComponent }])],
  declarations: [I18nDemoComponent],
  exports: [I18nDemoComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class I18nDemoModule {}
