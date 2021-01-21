/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-alert-group' })
export class CdsAlertGroupDirective extends BaseCdsDirective {
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
  get type() {
    return this.element['type'];
  }
  @Input() set type(value) {
    this.element['type'] = value;
  }
  get role() {
    return this.element['role'];
  }
  @Input() set role(value) {
    this.element['role'] = value;
  }
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
}
