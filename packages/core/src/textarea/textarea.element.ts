/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsControl } from '@cds/core/forms';
import { styles } from './textarea.element.css.js';

/**
 * Form
 *
 * ```typescript
 * import '@cds/core/textarea/register.js';
 * ```
 *
 * ```html
 * <cds-textarea>
 *   <label>textarea</label>
 *   <textarea></textarea>
 *   <cds-control-message>message text</cds-control-message>
 * </cds-textarea>
 * ```
 * @element cds-textarea
 * @slot - For projecting cds-inputs
 * @cssprop --background
 * @cssprop --border
 * @cssprop --padding
 * @cssprop --font-size
 * @cssprop --color
 * @cssprop --border-radius
 */
export class CdsTextarea extends CdsControl {
  protected supportsPrefixSuffixActions = false;

  static get styles() {
    return [...super.styles, styles];
  }
}
