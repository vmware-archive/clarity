/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-textarea' })
export class CdsTextareaDirective extends BaseCdsDirective {
  get status() {
    return this.element['status'];
  }
  @Input() set status(value) {
    this.element['status'] = value;
  }
  get controlWidth() {
    return this.element['controlWidth'];
  }
  @Input() set controlWidth(value) {
    this.element['controlWidth'] = value;
  }
  get validate() {
    return this.element['validate'];
  }
  @Input() set validate(value) {
    this.element['validate'] = value;
  }
  get responsive() {
    return this.element['responsive'];
  }
  @Input() set responsive(value) {
    this.element['responsive'] = value;
  }
  get layout() {
    return this.element['layout'];
  }
  @Input() set layout(value) {
    this.element['layout'] = value;
  }
  get layoutChange() {
    return this.element['layoutChange'];
  }
  @Input() set layoutChange(value) {
    this.element['layoutChange'] = value;
  }
  get layoutStable() {
    return this.element['layoutStable'];
  }
  @Input() set layoutStable(value) {
    this.element['layoutStable'] = value;
  }
}
