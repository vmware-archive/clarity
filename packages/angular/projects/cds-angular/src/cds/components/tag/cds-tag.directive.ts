/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-tag' })
export class CdsTagDirective extends BaseCdsDirective {
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
  get color() {
    return this.element['color'];
  }
  @Input() set color(value) {
    this.element['color'] = value;
  }
  get closable() {
    return this.element['closable'];
  }
  @Input() set closable(value) {
    this.element['closable'] = value;
  }
  get readonly() {
    return this.element['readonly'];
  }
  @Input() set readonly(value) {
    this.element['readonly'] = value;
  }
  get type() {
    return this.element['type'];
  }
  @Input() set type(value) {
    this.element['type'] = value;
  }
  get name() {
    return this.element['name'];
  }
  @Input() set name(value) {
    this.element['name'] = value;
  }
  get value() {
    return this.element['value'];
  }
  @Input() set value(value) {
    this.element['value'] = value;
  }
  get disabled() {
    return this.element['disabled'];
  }
  @Input() set disabled(value) {
    this.element['disabled'] = value;
  }
}
