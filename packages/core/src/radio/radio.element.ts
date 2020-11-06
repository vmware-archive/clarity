/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { internalProperty, listenForAttributeChange } from '@cds/core/internal';
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
  @internalProperty({ type: Boolean, reflect: true }) protected checked = false;

  static get styles() {
    return [...super.styles, styles];
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.checked = this.inputControl.hasAttribute('checked') || this.inputControl.checked;
    this.checked ? this.inputControl.setAttribute('checked', '') : this.inputControl.removeAttribute('checked');
    this.observers.push(listenForAttributeChange(this.inputControl, 'checked', val => (this.checked = val !== null)));
  }
}
