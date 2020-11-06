/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsControl } from '@cds/core/forms';
import { styles } from './input.element.css.js';

/**
 * Input
 *
 * ```typescript
 * import '@cds/core/input/register.js';
 * ```
 *
 * ```html
 * <cds-input>
 *   <label>input</label>
 *   <input type="text" />
 * </cds-input>
 * ```
 *
 * @element cds-input
 * @slot - For projecting input and label
 * @cssprop --background
 * @cssprop --background-size
 * @cssprop --border
 * @cssprop --border-color
 * @cssprop --border-bottom
 * @cssprop --outline
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --line-height
 * @cssprop --transition
 */
export class CdsInput extends CdsControl {
  static get styles() {
    return [...super.styles, styles];
  }
}
