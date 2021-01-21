/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-icon' })
export class CdsIconDirective extends BaseCdsDirective {
  get shape() {
    return this.element['shape'];
  }
  @Input() set shape(value) {
    this.element['shape'] = value;
  }
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
  get direction() {
    return this.element['direction'];
  }
  @Input() set direction(value) {
    this.element['direction'] = value;
  }
  get flip() {
    return this.element['flip'];
  }
  @Input() set flip(value) {
    this.element['flip'] = value;
  }
  get solid() {
    return this.element['solid'];
  }
  @Input() set solid(value) {
    this.element['solid'] = value;
  }
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
  get badge() {
    return this.element['badge'];
  }
  @Input() set badge(value) {
    this.element['badge'] = value;
  }
}
