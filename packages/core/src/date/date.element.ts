/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-element';
import { globalStyle } from '@clr/core/internal';
import { CdsControl } from '@clr/core/forms';
import { inputStyles } from '@clr/core/input';
import { ClarityIcons } from '@clr/core/icon/icon.service.js';
import { calendarIcon } from '@clr/core/icon/shapes/calendar.js';
import { styles as globalStyles } from './date.global.css.js';

/**
 * Date
 *
 * ```typescript
 * import '@clr/core/date/register.js';
 * ```
 *
 * ```html
 * <cds-date>
 *   <label>Date</label>
 *   <input type="date" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-date>
 * ```
 *
 * @element cds-date
 * @slot - For projecting date input and label
 */
export class CdsDate extends CdsControl {
  @globalStyle() protected globalStyles = globalStyles;

  protected get suffixDefaultTemplate() {
    return html`<cds-control-action readonly><cds-icon shape="calendar"></cds-icon></cds-control-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }

  constructor() {
    super();
    ClarityIcons.addIcons(calendarIcon);
  }
}
