/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, StatusTypes } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { styles } from './badge.element.css.js';

/**
 * Badges provide a method to highlight a count of an element either next to it
 * or inside the element itself.
 *
 * ```typescript
 * import '@cds/core/badge/register.js';
 * ```
 *
 * ```html
 * <cds-badge status="info">2<span cds-layout="display:screen-reader-only"> items. Item text for screen-readers should be added to badges in elements that will only be read in a screen-reader.</span></cds-badge>
 * ```
 *
 * @element cds-badge
 * @slot - Content slot for inside the badge
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
  /**
   * Sets the color of the badge
   */
  @property({ type: String })
  color: 'default' | 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue' | null = null;

  /**
   * @type {default | info | success | warning | danger}
   * Sets the color of the badge
   */
  @property({ type: String })
  status: StatusTypes | null = null;

  render() {
    return html`
      <div class="private-host">
        <span cds-text="lhe">
          <slot></slot>
        </span>
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
