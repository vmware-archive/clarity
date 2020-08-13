/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';

import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { I18nDemo } from './i18n.demo';
import { RouterModule } from '@angular/router';
import { UtilsModule } from '../../../utils/utils.module';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    DocWrapperModule,
    UtilsModule,
    RouterModule.forChild([{ path: '', component: I18nDemo }]),
  ],
  declarations: [I18nDemo],
  exports: [I18nDemo],
})
export class I18nDemoModule {}
