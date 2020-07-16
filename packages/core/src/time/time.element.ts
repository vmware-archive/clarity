/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle } from '@clr/core/internal';
import { CdsControl } from '@clr/core/forms';
import { inputStyles } from '@clr/core/input';
import { ClarityIcons, clockIcon } from '@clr/core/icon';
import { styles as globalStyles } from './time.global.css.js';

ClarityIcons.addIcons(clockIcon);

/**
 * Time Input
 *
 * ```typescript
 * import '@clr/core/time/register.js';
 * ```
 *
 * ```html
 * <cds-time>
 *   <label>time</label>
 *   <input type="time" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-time>
 * ```
 *
 * @element cds-time
 * @slot - For projecting time input and label
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
export class CdsTime extends CdsControl {
  @globalStyle() protected globalStyles = globalStyles;

  protected get suffixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="clock" size="18"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }
}
