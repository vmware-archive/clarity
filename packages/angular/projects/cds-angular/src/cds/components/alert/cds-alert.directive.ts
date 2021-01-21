/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-alert' })
export class CdsAlertDirective extends BaseCdsDirective {
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
  get closable() {
    return this.element['closable'];
  }
  @Input() set closable(value) {
    this.element['closable'] = value;
  }
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
  get i18n() {
    return this.element['i18n'];
  }
  @Input() set i18n(value) {
    this.element['i18n'] = value;
  }
}
