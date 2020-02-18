/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, registerElementSafely } from '@clr/core/common';
import { html, LitElement } from 'lit-element';
import { styles } from './alert-actions.element.css';

/**
 * Web component alert actions to be used inside app-level alert.
 *
 * ```typescript
 * import '@clr/core/alert';
 * ```
 *
 * ```html
 * <cwc-app-alert>
 *    <cwc-alert-content>Lorem ipsum dolor sit amet</cwc-alert-content>
 *    <cwc-alert-actions>
 *       <cwc-button>Fix</cwc-button>
 *    </cwc-alert-actions>
 * </cwc-app-alert>
 * ```
 *
 * @noInheritDoc
 * @beta 3.0
 * @element cwc-alert-actions
 */
// @dynamic
export class CwcAlertActions extends LitElement {
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

registerElementSafely('cwc-alert-actions', CwcAlertActions);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-alert-actions': CwcAlertActions;
  }
}
