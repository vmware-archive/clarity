/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-internal-control-label' })
export class CdsInternalControlLabelDirective extends BaseCdsDirective {
  get disabled() {
    return this.element['disabled'];
  }
  @Input() set disabled(value) {
    this.element['disabled'] = value;
  }
  get action() {
    return this.element['action'];
  }
  @Input() set action(value) {
    this.element['action'] = value;
  }
}
