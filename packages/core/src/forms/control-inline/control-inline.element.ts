/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, internalProperty } from 'lit-element';
import { property } from '@cds/core/internal';
import { styles } from './control-inline.element.css.js';
import { CdsControl } from '../control/control.element.js';
import { getStatusIcon } from '../utils/index.js';

/**
 * Internal Control Inline
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-inline>
 *   <label>inline</label>
 *   <input type="radio" />
 * </ds-internal-control-inline>
 * ```
 *
 * @slot - For projecting inline input and label
 */
export class CdsInternalControlInline extends CdsControl {
  /** Align the labels of controls within group left or right */
  @property({ type: String }) controlAlign: 'left' | 'right' = 'left';

  /** @private */
  @internalProperty() isControlGroup: boolean;

  protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }

  render() {
    return html`
      <div class="private-host" cds-layout="vertical gap:sm">
        <div cds-layout="horizontal gap:sm wrap:none ${this.controlAlign === 'right' ? 'order:reverse' : ''}">
          <div class="input" @click=${() => this.inputControl.click()}></div>
          <cds-internal-control-label
            action="secondary"
            .disabled="${this.disabled}"
            cds-layout="align:vertical-center"
          >
            <slot name="label"></slot>
          </cds-internal-control-label>
        </div>
        ${!this.isControlGroup
          ? html` <div cds-layout="horizontal wrap:none ${this.messages?.length ? 'gap:sm' : ''}">
              ${getStatusIcon(this.status)}
              <div cds-layout="align:vertical-center" class="messages">
                <slot name="message"></slot>
              </div>
            </div>`
          : ''}
      </div>
      <div cds-layout="display:screen-reader-only">
        <slot name="input"></slot>
      </div>
    `;
  }

  connectedCallback() {
    super.connectedCallback();
    this.setAttribute('cds-control-inline', '');
  }
}
