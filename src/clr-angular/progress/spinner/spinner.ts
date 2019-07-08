/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Component, Input } from '@angular/core';
import { isBooleanAttributeSet } from '../../utils/component/is-boolean-attribute-set';

const SPINNER_BASE_CLASS = 'spinner';

const SPINNER_INVERSE = 'spinner-inverse';
const SPINNER_INLINE = 'spinner-inline';

const SPINNER_SMALL_SIZE = 'spinner-sm';
const SPINNER_MEDIUM_SIZE = 'spinner-md';

@Component({
  selector: 'clr-spinner',
  template: `
    <ng-content></ng-content>
  `,
  host: {
    '[attr.class]': 'assignClass',
    '[attr.aria-live]': 'setAriaLive',
    '[attr.aria-busy]': 'true',
  },
})
export class ClrSpinner {
  // Style
  @Input() inline: boolean;
  @Input() inverse: boolean;

  // Size
  @Input() small: boolean;
  @Input() medium: boolean;
  /* No need to handle large - default value */

  // Aria Live
  @Input() assertive: boolean;
  @Input() off: boolean;
  /* No need to handle polite - default value */

  get setAriaLive() {
    if (isBooleanAttributeSet(this.assertive)) {
      return 'assertive';
    }
    if (isBooleanAttributeSet(this.off)) {
      return 'off';
    }
    return 'polite';
  }

  get assignClass(): string {
    const classes = [SPINNER_BASE_CLASS];

    if (isBooleanAttributeSet(this.inline)) {
      classes.push(SPINNER_INLINE);
    }

    if (isBooleanAttributeSet(this.inverse)) {
      classes.push(SPINNER_INVERSE);
    }

    // You could have only on size at a time...
    if (isBooleanAttributeSet(this.small)) {
      classes.push(SPINNER_SMALL_SIZE);
    } else if (isBooleanAttributeSet(this.medium)) {
      classes.push(SPINNER_MEDIUM_SIZE);
    }

    return classes.join(' ');
  }
}
