/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClarityModule } from '@clr/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { DocWrapperModule } from '../_doc-wrapper/doc-wrapper.module';
import { UtilsModule } from '../../../utils/utils.module';

import { ComboboxDemo } from './combobox.demo';
import { ComboboxBasicDemo } from './combobox-basic.demo';
import { ComboboxSingleDemo } from './combobox-single.demo';
import { ComboboxMultiDemo } from './combobox-multi.demo';
import { ComboboxAsyncDemo } from './combobox-async.demo';

@NgModule({
  imports: [
    CommonModule,
    ClarityModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forChild([{ path: '', component: ComboboxDemo }]),
    DocWrapperModule,
    UtilsModule,
  ],
  declarations: [ComboboxDemo, ComboboxBasicDemo, ComboboxSingleDemo, ComboboxMultiDemo, ComboboxAsyncDemo],
  exports: [ComboboxDemo],
})
export class ComboboxDemoModule {}
