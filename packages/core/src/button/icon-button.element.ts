/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
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
 * import '@clr/core/icon-button';
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
