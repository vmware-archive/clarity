/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { querySlot, globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import styles from './datalist.global.scss';

/**
 * Datalist
 *
 * ```typescript
 * import '@cds/core/datalist/register.js';
 * ```
 *
 * ```html
 * <cds-datalist>
 *   <label>datalist</label>
 *   <input type="text" />
 *   <datalist>
 *     <option value="item 1"></option>
 *     <option value="item 2"></option>
 *     <option value="item 3"></option>
 *   </datalist>
 *   <cds-control-message>message text</cds-control-message>
 * </cds-datalist>
 * ```
 *
 * @element cds-datalist
 * @slot - For projecting input, datalist and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsDatalist extends CdsControl {
  @globalStyle() protected globalStyles = styles;

  @querySlot('datalist', { required: 'error' }) protected datalistControl: HTMLDataListElement;

  protected get suffixDefaultTemplate() {
    return html`<cds-button-expand expanded readonly></cds-button-expand>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }
}
