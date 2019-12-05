/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/core/common';
import { html, LitElement, property } from 'lit-element';
import { styles } from './badge.element.css';

/**
 * Web component badges.
 *
 * ```typescript
 * import '@clr/core/badge';
 * ```
 *
 * ```html
 * <cwc-badge status="info">2</cwc-badge>
 * ```
 *
 * @noInheritDoc
 * @beta 3.0
 * @element cwc-badge
 * @slot default - Content slot for inside the badge
 * @attr {String} color - Sets the color of the badge from a predefined list of choices <br/> (`gray`, `purple`, `blue`, `orange`, `light-blue`)
 * @attr {String} status - Sets the color of the badge from a predefined list of statuses <br/> (`info`, `success`, `warning`, `danger`)
 * @cssprop --clr-badge-background-color
 * @cssprop --clr-badge-color
 */
// @dynamic
export class CwcBadge extends LitElement {
  /** Sets the color of the badge from a predefined list of choices */
  @property({ type: String, reflect: true })
  color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';

  /** Sets the color of the badge from a predefined list of statuses */
  @property({ type: String, reflect: true })
  status: 'info' | 'success' | 'warning' | 'danger';

  render() {
    return html`<slot></slot>`;
  }

  static get styles() {
    return styles;
  }
}

registerElementSafely('cwc-badge', CwcBadge);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-badge': CwcBadge;
  }
}
