/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { baseStyles, property, CdsBaseButton } from '@clr/core/internal';
import { html } from 'lit-element';
import { styles } from './close-button.element.css.js';
import { ClarityIcons } from '@clr/core/icon/icon.service.js';
import { timesIcon } from '@clr/core/icon/shapes/times.js';

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
 *
 * @element cds-internal-close-button
 * @cssprop --background
 * @cssprop --color
 * @cssprop --opacity
 * @cssprop --padding
 */
export class CdsInternalCloseButton extends CdsBaseButton {
  @property({ type: String })
  iconSize = '10';

  @property({ type: Number })
  innerOffset = 0.4;

  @property({ type: String })
  iconShape = 'times';

  render() {
    return html`
      <div class="private-host">
        <cds-icon
          .shape="${this.iconShape}"
          .size="${this.iconSize}"
          inner-offset=${this.iconShape === 'times' ? this.innerOffset : ''}
        ></cds-icon>
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

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.calculatePaddingOffset();
  }

  /**
   * If the icon size is smaller than the minimum button size then offset with
   * negative margin to remove visual empty space while preserving touch target size.
   */
  private calculatePaddingOffset() {
    const iconWidth = this.shadowRoot?.querySelector('cds-icon')?.getBoundingClientRect().width;
    if (iconWidth && iconWidth < this.getBoundingClientRect().width) {
      const offset = iconWidth * this.innerOffset;
      this.style.margin = `-${offset - 1}px -${offset - 1}px 0 -${offset - 1}px`;
    }
  }
}
