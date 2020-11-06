/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addClassnames, baseStyles, CdsBaseButton } from '@cds/core/internal';
import { html } from 'lit-element';
import { styles } from './inline-button.element.css.js';

/**
 * Inline buttons are used inside and alongside textual content within Clarity components.
 * They give action buttons a less prominent, yet familiar, visual presence.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-inline-button>Button text goes here</cds-inline-button>
 * ```
 * @beta
 * @element cds-inline-button
 * @slot - Content slot for inside the button
 * @cssprop --text-decoration
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --line-height
 * @cssprop --letter-spacing
 */
export class CdsInlineButton extends CdsBaseButton {
  connectedCallback(): void {
    super.connectedCallback();

    // we need a class on the icon because that's how the icon element knows to style itself
    // we can't style it from the icon-button anymore because it's a nested+slotted element
    if (this.icon) {
      addClassnames(this.icon, 'anchored-icon');
    }
  }

  render() {
    return html`<span class="private-host"><slot></slot></span>`;
  }

  static get styles() {
    return [baseStyles, styles];
  }
}
