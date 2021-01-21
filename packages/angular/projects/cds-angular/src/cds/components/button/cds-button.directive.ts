/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-button' })
export class CdsButtonDirective extends BaseCdsDirective {
  get action() {
    return this.element['action'];
  }
  @Input() set action(value) {
    this.element['action'] = value;
  }
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
  get block() {
    return this.element['block'];
  }
  @Input() set block(value) {
    this.element['block'] = value;
  }
  get privateHost() {
    return this.element['privateHost'];
  }
  @Input() set privateHost(value) {
    this.element['privateHost'] = value;
  }
  get loadingState() {
    return this.element['loadingState'];
  }
  @Input() set loadingState(value) {
    this.element['loadingState'] = value;
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
