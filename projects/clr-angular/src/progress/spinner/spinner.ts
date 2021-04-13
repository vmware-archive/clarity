/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input, HostBinding } from '@angular/core';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';

@Component({
  selector: 'clr-spinner',
  template: ` <ng-content></ng-content> `,
  host: {
    '[attr.aria-busy]': 'true',
  },
})
export class ClrSpinner {
  /**
   * Default class for all spinners. This class is always true
   */
  @HostBinding('class.spinner')
  get spinnerClass() {
    return true;
  }

  // Style
  private _inline: boolean;
  @HostBinding('class.spinner-inline')
  get inlineClass() {
    return this._inline;
  }

  @Input('clrInline')
  set clrInline(value: boolean | string) {
    this._inline = isBooleanAttributeSet(value);
  }

  private _inverse: boolean;
  @HostBinding('class.spinner-inverse')
  get inverseClass() {
    return this._inverse;
  }

  @Input('clrInverse')
  set clrInverse(value: boolean | string) {
    this._inverse = isBooleanAttributeSet(value);
  }

  // Size
  /**
   * By default all spinners are Large. (spinner-lg)
   * To change the size you need to use set clrSmall or clrMedium to TRUE/
   */

  /**
   * Small
   */
  private _small: boolean;
  @HostBinding('class.spinner-sm')
  get smallClass() {
    return this._small;
  }

  @Input('clrSmall')
  set clrSmall(value: boolean | string) {
    this._small = isBooleanAttributeSet(value);
  }

  /**
   * When clrSmall & clrMedium are set both to true.
   * The CSS with high priority will be small - so medium size will be ignored.
   *
   * For this reason if clrSmall is set we won't add clrMedium class.
   *
   * NOTE: This is dictated by the CSS rules.
   * DON'T USE clrSmall & clrMedium to toggle classes. This could change without notice.
   *
   * Also there is no logical need to have both of them set to TRUE or FALSE.
   */
  private _medium: boolean;
  @HostBinding('class.spinner-md')
  get mediumClass() {
    if (this._small) {
      return false;
    }
    return this._medium;
  }

  @Input('clrMedium')
  set clrMedium(value: boolean | string) {
    this._medium = isBooleanAttributeSet(value);
  }
}
