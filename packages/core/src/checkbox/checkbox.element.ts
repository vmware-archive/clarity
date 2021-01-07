/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsInternalControlInline } from '@cds/core/forms';
import { styles } from './checkbox.element.css.js';

/**
 * Checkbox
 *
 * ```typescript
 * import '@cds/core/checkbox/register.js';
 * ```
 *
 * ```html
 * <cds-checkbox>
 *   <label>checkbox</label>
 *   <input type="checkbox" />
 *   <cds-control-message>message text</cds-control-message>
 * </cds-checkbox>
 * ```
 *
 * @element cds-checkbox
 * @slot - For projecting checkbox
 * @cssprop --color
 * @cssprop --check-color
 * @cssprop --background
 * @cssprop --border-radius
 */
export class CdsCheckbox extends CdsInternalControlInline {
  static get styles() {
    return [...super.styles, styles];
  }
}
