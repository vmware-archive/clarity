/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsCheckbox } from '@cds/core/checkbox';
import styles from '../shared/selection-panel.element.scss';
import { property } from '@cds/core/internal';
import { SelectionPanelSizes } from '../shared/selection-panel.interfaces.js';

/**
 * Checkbox Panel
 *
 * ```typescript
 * import '@cds/core/selection-panels/checkbox/register.js';
 * ```
 *
 * ```html
 * <cds-checkbox-panel>
 *   <label cds-layout="vertical gap:md align:center">
 *     <span cds-text="section">VM One</span>
 *     <span cds-text="subsection center">Orchestrate & Automate</p>
 *   </label>
 *   <input type="radio" value="0" />
 * </cds-checkbox-panel>
 * ```
 *
 * @beta
 * @element cds-checkbox-panel
 * @slot - For projecting checkbox and it's complex label
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --box-shadow
 */
export class CdsCheckboxPanel extends CdsCheckbox {
  @property({ type: String })
  size: SelectionPanelSizes = 'default';

  protected get internalLabelTemplate() {
    return html`<slot name="label" @slotchange=${() => this.associateInputAndLabel()}></slot>`;
  }

  static get styles() {
    return [...super.styles, styles];
  }
}
