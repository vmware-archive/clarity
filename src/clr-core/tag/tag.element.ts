/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, CdsBaseButton, property, registerElementSafely, StatusTypes } from '@clr/core/internal';
import { html } from 'lit-element';
import { styles } from './tag.element.css.js';

/**
 * Tags show concise metadata in a compact format.
 * Tags are visually styled to differentiate them from buttons.
 *
 * ```typescript
 * import '@clr/core/tag';
 * ```
 *
 * ```html
 * <cds-tag status="info">Info</cds-tag>
 * ```
 *
 * @element cds-tag
 * @slot default - Content slot for inside the tag
 * @cssprop --background
 * @cssprop --background-hover
 * @cssprop --border-color
 * @cssprop --border-radius
 */
// @dynamic
export class CdsTag extends CdsBaseButton {
  /** Sets the color of the tag (and badge if present) from the following predefined list of statuses:
   *  'info', 'success', 'warning', 'danger'
   */
  @property({ type: String })
  status: StatusTypes;

  /** Sets the color of the tag (and badge if present) from a predefined list of choices */
  @property({ type: String })
  color: 'gray' | 'purple' | 'blue' | 'orange' | 'light-blue';
  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
    <div class="private-host">
      <slot></slot>
    </div>
    ${this.hiddenButtonTemplate}
    `;
  }
}

registerElementSafely('cds-tag', CdsTag);

declare global {
  interface HTMLElementTagNameMap {
    'cds-tag': CdsTag;
  }
}
