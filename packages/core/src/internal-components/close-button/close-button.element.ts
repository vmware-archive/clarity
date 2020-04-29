/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, registerElementSafely } from '@clr/core/internal';
import '@clr/core/icon';
import { html } from 'lit-element';
import { styles } from './close-button.element.css.js';
import { styles as baseButtonStyles } from '../../button/base-button.element.css.js';
import { CdsIconButton } from '@clr/core/button';
import { ClarityIcons, timesIcon } from '@clr/core/icon-shapes';

ClarityIcons.addIcons(timesIcon);

/**
 * Icon buttons give applications a compact alternative to communicate action and direct user intent.
 *
 * ```typescript
 * import '@clr/core/internal-components';
 * ```
 *
 * ```html
 * <cds-internal-close-button></cds-internal-close-button>
 * ```
 * @beta
 * @element cds-close-button
 * @slot default - Content slot for inside the button
 * @cssprop --background
 * @cssprop --border-color
 * @cssprop --border-radius
 * @cssprop --border-width
 * @cssprop --box-shadow-color
 * @cssprop --color
 * @cssprop --opacity
 * @cssprop --padding
 */
export class CdsCloseButton extends CdsIconButton {
  @property({ type: String })
  iconSize = '18';

  @property({ type: String })
  iconShape = 'times';

  render() {
    return html`
      <div class="private-host">
        <cds-icon shape="${this.iconShape}" size="${this.iconSize}"></cds-icon>
        ${this.hiddenButtonTemplate}
      </div>
    `;
  }

  static get styles() {
    return [baseStyles, baseButtonStyles, styles];
  }
}

registerElementSafely('cds-internal-close-button', CdsCloseButton);

declare global {
  interface HTMLElementTagNameMap {
    'cds-internal-close-button': CdsCloseButton;
  }
}
