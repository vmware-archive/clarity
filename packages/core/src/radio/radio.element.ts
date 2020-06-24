/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property, listenForAttributeChange } from '@clr/core/internal';
import { CdsInternalControlInline } from '@clr/core/forms';
import { styles } from './radio.element.css.js';

/**
 * Radio
 *
 * ```typescript
 * import '@clr/core/radio/register.js';
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
 * @slot default - For projecting radio input
 * @cssprop --width
 * @cssprop --height
 * @cssprop --border
 * @cssprop --fill-box-shadow
 */
export class CdsRadio extends CdsInternalControlInline {
  @property({ type: Boolean }) protected checked = false;

  static get styles() {
    return [...super.styles, styles];
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.checked = this.inputControl.hasAttribute('checked') || this.inputControl.checked;
    this.observers.push(listenForAttributeChange(this.inputControl, 'checked', val => (this.checked = val !== null)));
  }
}
