/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/common';
import { CdsBaseAlert } from './alert.base.js';
import { styles } from './alert.element.css.js';

/**
 * Web component alerts.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-alert>
 *    <cds-alert-content>This is an alert.</cds-alert-content>
 * </cds-alert>
 * ```
 *
 * @beta 3.0
 * @element cds-alert
 * @slot default - Content slot for inside the alert. Usually will contain at least a <cds-alert-content> component.
 * @cssprop --color
 * @cssprop --background
 * @cssprop --border-radius
 * @cssprop --border-color
 * @cssprop --icon-color
 * @cssprop --close-icon-color
 * @cssprop --close-icon-color-hover
 */
// @dynamic
export class CdsAlert extends CdsBaseAlert {
  /** Sets the overall height and width of the alert and icon based on value */
  @property({ type: String })
  size: 'default' | 'sm';

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-alert', CdsAlert);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert': CdsAlert;
  }
}
