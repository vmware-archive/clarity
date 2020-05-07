/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';

import { BasicNgComboboxDemo } from './basic-ng-combobox';
import { OptionalMenuDemo } from './optional-menu';
import { ComboboxDemo } from './combobox.demo';
import { ROUTING } from './combobox.demo.routing';
// Commenting out temporarily. AOT builds do not work when importing outside of scoped library.
// Can reimport once combobox is added as a public export to @clr/angular
// import { ClrComboboxModule } from '../../../../clr-angular/src/forms/combobox/combobox.module';

@NgModule({
  imports: [CommonModule, ClarityModule, ROUTING],
  declarations: [ComboboxDemo, BasicNgComboboxDemo, OptionalMenuDemo],
  exports: [ComboboxDemo, BasicNgComboboxDemo, OptionalMenuDemo],
})
export class ComboboxDemoModule {}
