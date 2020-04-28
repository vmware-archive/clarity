/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ClrIconModule } from '../icon/icon.module';
import { ClrAccordionPanel } from './accordion-panel';
import { ClrAccordionTitle } from './accordion-title';
import { ClrAccordionDescription } from './accordion-description';
import { ClrAccordion } from './accordion';
import { ClrAccordionContent } from './accordion-content';
import { AccordionOompaLoompa } from './chocolate/accordion-oompa-loompa';
import { AccordionWillyWonka } from './chocolate/accordion-willy-wonka';

const declarations = [
  ClrAccordion,
  ClrAccordionPanel,
  ClrAccordionTitle,
  ClrAccordionDescription,
  ClrAccordionContent,
  AccordionOompaLoompa,
  AccordionWillyWonka,
];

@NgModule({
  imports: [CommonModule, ClrIconModule],
  declarations: [...declarations],
  exports: [...declarations],
})
export class ClrAccordionModule {}
