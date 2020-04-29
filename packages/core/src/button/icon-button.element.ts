/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  assignSlotNames,
  baseStyles,
  iconSlot,
  iconSpinner,
  iconSpinnerCheck,
  property,
  registerElementSafely,
} from '@clr/core/internal';
import { html } from 'lit-element';
import { styles as baseButtonStyles } from './base-button.element.css.js';
import { styles } from './icon-button.element.css.js';
import { CdsButton, ClrLoadingState } from './button.element.js';

/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@clr/core/button';
 * ```
 *
 * ```html
 * <cds-icon-button><cds-icon shape="download"></cds-icon></cds-icon-button>
 * ```
 * @beta
 * @element cds-icon-button
 * @slot default - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --height
 * @cssprop --padding
 */
export class CdsIconButton extends CdsButton {
  /**
   * The aria-label attribute is required for accessibility. The cds-icon-button
   * will warn if used without the aria-label being set.
   *
   * Ideally, the aria-label will be specific to the button's purpose. Avoid sharing
   * generic labels across multiple icon buttons on a page.
   */
  @property({ type: String, required: 'warning' })
  ariaLabel: string;

  connectedCallback(): void {
    // have to override default behavior when an anchor is passed into the icon button
    super.connectedCallback();
    if (this.anchor) {
      // removes slot designation from icon and adds it to the anchor tag
      assignSlotNames([this.icon, false], [this.anchor, 'button-icon']);

      // we need a class on the icon because that's how the icon element knows to style itself
      // we can't style it from the icon-button anymore because it's a nested+slotted element
      if (this.icon) {
        this.icon.classList.add('anchored-icon');
      }
    }
  }

  render() {
    return html`
      <div class="private-host">
        ${this.loadingState === ClrLoadingState.LOADING ? iconSpinner : ''}
        ${this.loadingState === ClrLoadingState.SUCCESS ? iconSpinnerCheck : ''}
        ${this.loadingState === ClrLoadingState.DEFAULT ? iconSlot : ''} ${this.hiddenButtonTemplate}
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, baseButtonStyles, styles];
  }
}

registerElementSafely('cds-icon-button', CdsIconButton);

declare global {
  interface HTMLElementTagNameMap {
    'cds-icon-button': CdsIconButton;
  }
}
