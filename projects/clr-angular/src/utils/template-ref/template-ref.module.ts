/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { TEMPLATE_REF_DIRECTIVES } from './index';

@NgModule({
  imports: [CommonModule],
  declarations: [TEMPLATE_REF_DIRECTIVES],
  entryComponents: [TEMPLATE_REF_DIRECTIVES],
  exports: [TEMPLATE_REF_DIRECTIVES],
})
export class ClrTemplateRefModule {}
