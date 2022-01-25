/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addClassnames, baseStyles, CdsBaseButton, querySlot } from '@cds/core/internal';
import { html } from 'lit';
import styles from './button-inline.element.scss';

/**
 * Inline buttons are used inside and alongside textual content within Clarity components.
 * They give action buttons a less prominent, yet familiar, visual presence.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-button-inline>Button text goes here</cds-button-inline>
 * ```
 *
 * @element cds-button-inline
 * @slot - Content slot for inside the button
 * @cssprop --text-decoration
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --line-height
 * @cssprop --letter-spacing
 */
export class CdsButtonInline extends CdsBaseButton {
  @querySlot('cds-icon') protected icon: HTMLElement;

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

/**
 * @deprecated
 * renamed to `cds-button-inline` in 6.0 to align to rest of the `cds-button-*` APIs
 */
export class CdsInlineButton extends CdsButtonInline {}
