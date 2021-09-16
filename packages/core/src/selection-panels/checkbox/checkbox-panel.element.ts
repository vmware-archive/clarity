/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { CdsCheckbox } from '@cds/core/checkbox';
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
 * <cds-checkbox>
 *   <label>
 *     <div cds-layout="vertical align:center">
 *       <span cds-text="section">VM One</span>
 *       <cds-icon shape="vm" badge="info"></cds-icon>
 *       <p>Machines for orchestration and automation.</p>
 *     </div>
 *   </label>
 *   <input type="checkbox" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-checkbox>
 * ```
 *
 * @element cds-checkbox
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
