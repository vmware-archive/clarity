/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, HostBinding } from '@angular/core';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';
import { ClrAriaLiveService, ClrAriaLivePoliteness } from '../../utils/a11y/aria-live.service';

@Component({
  providers: [ClrAriaLiveService],
  selector: 'clr-progress-bar',
  template: `
    <progress [id]="id" [attr.max]="max" [attr.value]="value" [attr.data-displayval]="displayValue"></progress>
    <span *ngIf="displayAriaLive()">{{ displayValue }}</span>
  `,
})
export class ClrProgressBar {
  constructor(private ariaLiveService: ClrAriaLiveService) {}

  /**
   * Handle component ID
   */
  private _ID: string;
  @HostBinding('attr.id') externalId = '';
  @Input()
  set id(value: string) {
    this._ID = value;
    this.externalId = null;
  }
  get id() {
    return this._ID;
  }

  // Progress
  @Input('clrMax') max = 100;
  @Input('clrDisplayval') displayval: string;

  private _value = 0;
  @Input('clrValue')
  get value() {
    return this._value;
  }

  set value(value) {
    this._value = value;
    if (this.displayAriaLive()) {
      this.ariaLiveService.announce(this.displayValue, this.ariaLive);
    }
  }

  // Styles
  @HostBinding('class.progress')
  get progressClass() {
    return true;
  }

  private _labeled: boolean;
  @HostBinding('class.labeled')
  get labeledClass() {
    return this._labeled;
  }

  @Input('clrLabeled')
  set clrLabeled(value: boolean | string) {
    this._labeled = isBooleanAttributeSet(value);
  }

  private _fade: boolean;
  @HostBinding('class.progress-fade')
  get fadeClass() {
    return this._fade;
  }

  @Input('clrFade')
  set clrFade(value: boolean | string) {
    this._fade = isBooleanAttributeSet(value);
  }

  private _loop: boolean;
  @HostBinding('class.loop')
  get loopClass() {
    return this._loop;
  }

  @Input('clrLoop')
  set clrLoop(value: boolean | string) {
    this._loop = isBooleanAttributeSet(value);
  }

  private _success: boolean;
  @HostBinding('class.success')
  get successClass() {
    return this._success;
  }

  /** @deprecated since 2.0, remove in 4.0 */
  @Input('clrSuccess')
  set clrSuccess(value: boolean | string) {
    this._success = isBooleanAttributeSet(value);
  }

  private _danger: boolean;
  @HostBinding('class.danger')
  get dangerClass() {
    return this._danger;
  }

  /** @deprecated since 2.0, remove in 4.0 */
  @Input('clrDanger')
  set clrDanger(value: boolean | string) {
    this._danger = isBooleanAttributeSet(value);
  }

  private _flash: boolean;
  @HostBinding('class.flash')
  get flashClass() {
    return this._flash;
  }

  @Input('clrFlash')
  set clrFlash(value: boolean | string) {
    this._flash = isBooleanAttributeSet(value);
  }

  private _flashDanger: boolean;
  @HostBinding('class.flash-danger')
  get flashDangerClass() {
    return this._flashDanger;
  }

  /** @deprecated since 2.0, remove in 4.0 */
  @Input('clrFlashDanger')
  set clrFlashDanger(value: boolean | string) {
    this._flashDanger = isBooleanAttributeSet(value);
  }

  // Aria Live
  /** @deprecated since 3.0, remove in 4.0 */
  @Input('clrAssertive') assertive: boolean;
  /** @deprecated since 3.0, remove in 4.0 */
  @Input('clrOff') off: boolean;

  /**
   * Make sure that we always will have something that is readable
   * for the screen reader
   */
  get displayValue() {
    if (this.displayval) {
      return this.displayval;
    }
    return `${this.value}%`;
  }

  /**
   * Display aria-live only when there is value and it's not 0 or equal to the max value
   */
  displayAriaLive() {
    return (this.value !== undefined || this.value !== 0) && this.value !== this.max;
  }

  get ariaLive(): ClrAriaLivePoliteness {
    if (isBooleanAttributeSet(this.assertive)) {
      return ClrAriaLivePoliteness.assertive;
    }
    if (isBooleanAttributeSet(this.off)) {
      return ClrAriaLivePoliteness.off;
    }
    return ClrAriaLivePoliteness.polite;
  }
}
