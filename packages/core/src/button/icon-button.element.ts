/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property } from '@cds/core/internal';
import { html } from 'lit';
import baseButtonStyles from './base-button.element.scss';
import styles from './icon-button.element.scss';
import { CdsButton, ClrLoadingState, iconCheck, iconSpinner } from './button.element.js';

/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@cds/core/button/register.js';
 * ```
 *
 * ```html
 * <cds-icon-button><cds-icon shape="download"></cds-icon></cds-icon-button>
 * ```
 *
 * @element cds-icon-button
 * @slot - Content slot for inside the button
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
        ${this.loadingState === ClrLoadingState.loading ? iconSpinner(this.size) : ''}
        ${this.loadingState === ClrLoadingState.success ? iconCheck : ''}
        ${this.loadingState === ClrLoadingState.default ? html`<slot></slot>` : ''}
      </div>
    `;
  }

  static styles = [baseStyles, baseButtonStyles, styles];
}
