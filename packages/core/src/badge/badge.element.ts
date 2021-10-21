/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, StatusTypes } from '@cds/core/internal';
import { html, LitElement } from 'lit';
import styles from './badge.element.scss';

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
   * Sets the color of the badge
   * @type {neutral | info | success | warning | danger}
   */
  @property({ type: String })
  status: StatusTypes = 'neutral';

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
