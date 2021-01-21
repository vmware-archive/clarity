/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-test-dropdown' })
export class CdsTestDropdownDirective extends BaseCdsDirective {
  get open() {
    return this.element['open'];
  }
  @Input() set open(value) {
    this.element['open'] = value;
  }
  get title() {
    return this.element['title'];
  }
  @Input() set title(value) {
    this.element['title'] = value;
  }
}
