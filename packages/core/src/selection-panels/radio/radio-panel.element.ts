/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsRadio } from '@cds/core/radio';
import styles from '../shared/selection-panel.element.scss';
import { property } from '@cds/core/internal';
import { SelectionPanelSizes } from '../shared/selection-panel.interfaces.js';

/**
 * Radio Panel
 *
 * ```typescript
 * import '@cds/core/selection-panels/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio-group>
 *   <cds-radio-panel>
 *     <label cds-layout="vertical gap:md align:center">
 *       <span cds-text="section">VM One</span>
 *       <span cds-text="subsection center">Orchestrate & Automate</p>
 *     </label>
 *     <input type="radio" value="0" />
 *   </cds-radio-panel>
 *   <cds-radio-panel>
 *     <label cds-layout="vertical gap:md align:center">
 *       <span cds-text="section">VM One</span>
 *       <span cds-text="subsection center">Orchestrate & Automate</p>
 *     </label>
 *     <input type="radio" value="1" />
 *   </cds-radio-panel>
 * </cds-radio-group>
 * ```
 * @beta
 * @element cds-radio-panel
 * @slot - For projecting radio and it's complex label
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
