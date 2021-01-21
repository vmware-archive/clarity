/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-progress-circle' })
export class CdsProgressCircleDirective extends BaseCdsDirective {
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
  get inverse() {
    return this.element['inverse'];
  }
  @Input() set inverse(value) {
    this.element['inverse'] = value;
  }
  get value() {
    return this.element['value'];
  }
  @Input() set value(value) {
    this.element['value'] = value;
  }
  get line() {
    return this.element['line'];
  }
  @Input() set line(value) {
    this.element['line'] = value;
  }
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
}
