/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { globalStyle } from '@cds/core/internal';
import { CdsControl } from '@cds/core/forms';
import { inputStyles } from '@cds/core/input';
import globalStyles from './time.global.scss';

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
    return html`<cds-button-action shape="clock" readonly></cds-button-action>`;
  }

  static get styles() {
    return [...super.styles, inputStyles];
  }
}
