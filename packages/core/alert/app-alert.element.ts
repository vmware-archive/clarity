/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/internal';
import { CdsBaseAlert } from './alert.base.js';
import { styles } from './app-alert.element.css.js';
/**
 * App-level alerts are placed at the very top of the global context. They should
 * not be placed in any other configuration. Their purpose is to provide global
 * alerts available and relating to the full context of the overall application.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-app-alert>
 *  <cds-alert-content>This is an app alert.</cds-alert-content>
 * </cds-app-alert>
 * ```
 *
 * @beta
 * @element cds-app-alert
 * @slot default - Content slot for inside the alert. Usually will contain at least a <cds-alert-content> component.
 * @cssprop --color
 * @cssprop --background
 * @cssprop --icon-color
 * @cssprop --close-icon-color
 * @cssprop --close-icon-color-hover
 */
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
