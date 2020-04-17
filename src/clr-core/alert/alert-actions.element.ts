/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, registerElementSafely } from '@clr/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './alert-actions.element.css.js';

/**
 * Web component alert actions to be used inside app-level alert.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cds-app-alert>
 *    <cds-alert-content>Lorem ipsum dolor sit amet</cds-alert-content>
 *    <cds-alert-actions>
 *       <cds-button>Fix</cds-button>
 *    </cds-alert-actions>
 * </cds-app-alert>
 * ```
 *
 * @beta
 * @element cds-alert-actions
 */
export class CdsAlertActions extends LitElement {
  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('slot', 'actions');
  }

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-alert-actions', CdsAlertActions);

declare global {
  interface HTMLElementTagNameMap {
    'cds-alert-actions': CdsAlertActions;
  }
}
