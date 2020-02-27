/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/common';
import { CdsBaseAlert } from './alert.base';
import { styles } from './app-alert.element.css';
/**
 * Web component alerts.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-app-alert>
 *    <cds-alert-content>This is an alert.</cds-alert-content>
 * </cds-app-alert>
 * ```
 *
 * @beta 3.0
 * @element cds-app-alert
 * @slot default - Content slot for inside the alert. Usually will contain at least a <cds-alert-content> component.
 * @cssprop --color
 * @cssprop --background
 * @cssprop --icon-color
 * @cssprop --close-icon-color
 * @cssprop --close-icon-color-hover
 */
// @dynamic
export class CdsAppAlert extends CdsBaseAlert {
  /** Sets the color of the alert from a predefined list of statuses */
  @property({ type: String })
  status: 'info' | 'warning' | 'danger';

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-app-alert', CdsAppAlert);

declare global {
  interface HTMLElementTagNameMap {
    'cds-app-alert': CdsAppAlert;
  }
}
