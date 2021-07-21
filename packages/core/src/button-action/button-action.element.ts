/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, PropertyValues } from 'lit';
import { property, baseStyles, CdsBaseButton, LogService, state, i18n, I18nService } from '@cds/core/internal';
import styles from './button-action.element.scss';

/**
 * Action Button
 *
 * ```typescript
 * import '@cds/core/button-action/register.js';
 * ```
 *
 * ```html
 * <cds-button-action></cds-button-action>
 * ```
 * @beta
 * @element cds-button-action
 * @slot - For projecting text content or cds-icon
 * @property pressed
 * @cssprop --icon-width
 * @cssprop --icon-height
 * @cssprop --width
 * @cssprop --height
 * @cssprop --cursor
 * @cssprop --color
 * @cssprop --font-size
 * @cssprop --background
 * @cssprop --padding
 * @cssprop --outline
 * @cssprop --outline-offset
 * @property pressed - boolean
 * @property expanded - boolean
 */
export class CdsButtonAction extends CdsBaseButton {
  @property({ type: String }) shape: string;

  @property({ type: String, reflect: true }) action: string;

  @i18n() i18n = I18nService.keys.actions;

  @state({ type: Boolean, reflect: true, attribute: 'cds-button-action' }) protected cdsButtonAction = true;

  static styles = [baseStyles, styles];

  render() {
    return html`
      <div class="private-host">
        <slot
          ><cds-icon
            .shape=${this.shape ? this.shape : 'ellipsis-vertical'}
            ?solid=${this.pressed || this.expanded}
            inner-offset=${1}
          ></cds-icon
        ></slot>
      </div>
    `;
  }

  updated(props: PropertyValues<this>) {
    super.updated(props);

    if (!this.ariaLabel && !this.readonly) {
      LogService.warn('A aria-label is required for interactive cds-button-action type', this);
    }

    if (props.has('readonly')) {
      this.readonly && !this.hasAttribute('aria-label') ? (this.ariaHidden = 'true') : (this.ariaHidden = null);
    }
  }
}
