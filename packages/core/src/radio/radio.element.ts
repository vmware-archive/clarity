/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsInternalControlInline } from '@cds/core/forms';
import { styles } from './radio.element.css.js';

/**
 * Radio
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio>
 *   <label>Test</label>
 *   <input type="radio" />
 * </cds-radio>
 * ```
 *
 * @element cds-radio
 * @slot - For projecting radio input
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --fill-box-shadow
 */
export class CdsRadio extends CdsInternalControlInline {
  static get styles() {
    return [...super.styles, styles];
  }
}
