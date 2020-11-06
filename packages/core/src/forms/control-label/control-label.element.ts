/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { baseStyles, property } from '@cds/core/internal';
import { styles } from './control-label.element.css.js';

/**
 * Label
 *
 * ```typescript
 * import '@cds/core/forms/register.js';
 * ```
 *
 * ```html
 * <cds-internal-control-label status="primary | secondary">
 *   <label>...</label>
 * </cds-internal-control-label>
 * ```
 * @internal
 * @element cds-internal-control-label
 * @slot - For projecting label text
 */
export class CdsInternalControlLabel extends LitElement {
  @property({ type: Boolean }) disabled = false;

  @property({ type: String }) action: 'primary' | 'secondary' = 'primary';

  static get styles() {
    return [baseStyles, styles];
  }

  render() {
    return html`
      <div class="private-host" cds-layout="horizontal gap:sm align:shrink">
        <slot></slot>
      </div>
    `;
  }
}
