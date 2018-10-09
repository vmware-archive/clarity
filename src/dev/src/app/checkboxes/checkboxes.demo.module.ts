/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ClarityModule, ClrFormsDeprecatedModule } from '@clr/angular';

import { CheckboxesDemo, MinimumSelectionValidatorDirective } from './checkboxes.demo';
import { ROUTING } from './checkboxes.demo.routing';

@NgModule({
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ClarityModule, ClrFormsDeprecatedModule, ROUTING],
  declarations: [CheckboxesDemo, MinimumSelectionValidatorDirective],
  exports: [CheckboxesDemo],
})
export class CheckboxesDemoModule {}
