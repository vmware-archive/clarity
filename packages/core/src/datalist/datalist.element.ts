/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { querySlot, globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { styles as globalStyles } from './datalist-global.element.css.js';

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
  @globalStyle() protected globalStyles = globalStyles;

  @querySlot('datalist', { required: 'error' }) protected datalistControl: HTMLDataListElement;

  protected get suffixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="angle" direction="down"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }

  constructor() {
    super();
    ClarityIcons.addIcons(angleIcon);
  }
}
