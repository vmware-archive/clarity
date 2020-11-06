/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { clockIcon } from '@cds/core/icon/shapes/clock.js';
import { styles as globalStyles } from './time.global.css.js';

/**
 * Time Input
 *
 * ```typescript
 * import '@cds/core/time/register.js';
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

  constructor() {
    super();
    ClarityIcons.addIcons(clockIcon);
  }
}
