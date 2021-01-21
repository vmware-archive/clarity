/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { CdsAccordionContentDirective } from './cds-accordion-content.directive';
import { CdsAccordionHeaderDirective } from './cds-accordion-header.directive';
import { CdsAccordionPanelDirective } from './cds-accordion-panel.directive';
import { CdsAccordionDirective } from './cds-accordion.directive';

import '@cds/core/accordion/register.js';

@NgModule({
  imports: [CommonModule],
  declarations: [
    CdsAccordionContentDirective,
    CdsAccordionHeaderDirective,
    CdsAccordionPanelDirective,
    CdsAccordionDirective,
  ],
  exports: [
    CdsAccordionContentDirective,
    CdsAccordionHeaderDirective,
    CdsAccordionPanelDirective,
    CdsAccordionDirective,
  ],
})
export class CdsAccordionModule {}
