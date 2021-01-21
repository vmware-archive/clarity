/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Directive, Input } from '@angular/core';
import { BaseCdsDirective } from '../../cds-base';

@Directive({ selector: 'cds-modal' })
export class CdsModalDirective extends BaseCdsDirective {
  get i18n() {
    return this.element['i18n'];
  }
  @Input() set i18n(value) {
    this.element['i18n'] = value;
  }
  get closable() {
    return this.element['closable'];
  }
  @Input() set closable(value) {
    this.element['closable'] = value;
  }
  get size() {
    return this.element['size'];
  }
  @Input() set size(value) {
    this.element['size'] = value;
  }
  get ariaModal() {
    return this.element['ariaModal'];
  }
  @Input() set ariaModal(value) {
    this.element['ariaModal'] = value;
  }
  get role() {
    return this.element['role'];
  }
  @Input() set role(value) {
    this.element['role'] = value;
  }
  get overlayIsActive() {
    return this.element['overlayIsActive'];
  }
  @Input() set overlayIsActive(value) {
    this.element['overlayIsActive'] = value;
  }
  get focusTrap() {
    return this.element['focusTrap'];
  }
  @Input() set focusTrap(value) {
    this.element['focusTrap'] = value;
  }
  get topReboundElement() {
    return this.element['topReboundElement'];
  }
  @Input() set topReboundElement(value) {
    this.element['topReboundElement'] = value;
  }
  get bottomReboundElement() {
    return this.element['bottomReboundElement'];
  }
  @Input() set bottomReboundElement(value) {
    this.element['bottomReboundElement'] = value;
  }
  get hidden() {
    return this.element['hidden'];
  }
  @Input() set hidden(value) {
    this.element['hidden'] = value;
  }
  get focusTrapId() {
    return this.element['focusTrapId'];
  }
  @Input() set focusTrapId(value) {
    this.element['focusTrapId'] = value;
  }
}
