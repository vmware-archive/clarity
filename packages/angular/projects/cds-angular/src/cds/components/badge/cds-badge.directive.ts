/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-badge' })
export class CdsBadgeDirective extends BaseCdsDirective {
  get color() {
    return this.element['color'];
  }
  @Input() set color(value) {
    this.element['color'] = value;
  }
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
}
