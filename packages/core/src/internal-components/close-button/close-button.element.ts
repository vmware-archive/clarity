/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, CdsBaseButton } from '@clr/core/internal';
import { html } from 'lit-element';
import { styles } from './close-button.element.css.js';
import { ClarityIcons, timesIcon } from '@clr/core/icon';

/**
 * Standard close button for Clarity Components
 *
 * ```typescript
 * import '@clr/core/internal-components/close-button/register.js';
 * ```
 *
 * ```html
 * <cds-internal-close-button></cds-internal-close-button>
 * ```
 * @beta
 * @element cds-internal-close-button
 * @cssprop --background
 * @cssprop --color
 * @cssprop --opacity
 * @cssprop --padding
 */
export class CdsInternalCloseButton extends CdsBaseButton {
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
    return [baseStyles, styles];
  }

  constructor() {
    super();
    ClarityIcons.addIcons(timesIcon);
  }
}
