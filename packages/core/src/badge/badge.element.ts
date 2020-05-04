/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely, StatusTypes } from '@clr/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './badge.element.css.js';

/**
 * Badges provide a method to highlight a count of an element either next to it
 * or inside the element itself.
 *
 * ```typescript
 * import '@clr/core/badge';
 * ```
 *
 * ```html
 * <cds-badge status="info">2</cds-badge>
 * ```
 * @beta
 * @element cds-badge
 * @slot default - Content slot for inside the badge
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --font-weight
 * @cssprop --padding
 * @cssprop --size
 */
export class CdsBadge extends LitElement {
  /** Sets the color of the badge from the following predefined list of choices:
   *  'gray', 'purple', 'blue', 'orange', 'light-blue'
   */
  @property({ type: String })
  color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';

  /** Sets the color of the badge from the following predefined list of statuses:
   *  'info', 'success', 'warning', 'danger'
   */
  @property({ type: String })
  status: StatusTypes;

  render() {
    return html`
      <div class="private-host">
        <span
          ><span><slot></slot></span
        ></span>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}

registerElementSafely('cds-badge', CdsBadge);

declare global {
  interface HTMLElementTagNameMap {
    'cds-badge': CdsBadge;
  }
}
