/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-accordion-panel' })
export class CdsAccordionPanelDirective extends BaseCdsDirective {
  get disabled() {
    return this.element['disabled'];
  }
  @Input() set disabled(value) {
    this.element['disabled'] = value;
  }
  get expanded() {
    return this.element['expanded'];
  }
  @Input() set expanded(value) {
    this.element['expanded'] = value;
  }
}
