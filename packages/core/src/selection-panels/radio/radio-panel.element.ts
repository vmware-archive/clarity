/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsRadio } from '@cds/core/radio';
import styles from '../shared/selection-panel.element.scss';
import { property } from '@cds/core/internal';
import { SelectionPanelSizes } from '../shared/selection-panel.interfaces.js';

/**
 * Checkbox
 *
 * ```typescript
 * import '@cds/core/checkbox/register.js';
 * ```
 *
 * ```html
 * <cds-radio>
 *   <label>
 *     <div cds-layout="vertical align:center">
 *       <span cds-text="section">VM One</span>
 *       <cds-icon shape="vm" badge="info"></cds-icon>
 *       <p>Machines for orchestration and automation.</p>
 *     </div>
 *   </label>
 *   <input type="radio" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-radio>
 * ```
 *
 * @element cds-radio
 * @slot - For projecting checkbox and it's complex label
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --box-shadow
 */
export class CdsRadioPanel extends CdsRadio {
  @property({ type: String })
  size: SelectionPanelSizes = 'default';
  static get styles() {
    return [...super.styles, styles];
  }
  protected get internalLabelTemplate() {
    return html`<slot name="label" @slotchange=${() => this.associateInputAndLabel()}></slot>`;
  }
}
