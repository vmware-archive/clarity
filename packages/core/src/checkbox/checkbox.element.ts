/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { property, listenForAttributeChange, syncProps } from '@cds/core/internal';
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
  @property({ type: Boolean }) checked = false;

  @property({ type: Boolean }) indeterminate = false;

  static get styles() {
    return [...super.styles, styles];
  }

  updated(props: Map<string, any>) {
    super.updated(props);

    if (props.has('checked') && this.inputControl.checked !== this.checked) {
      syncProps(this.inputControl, this, { checked: true });
    }

    if (props.has('indeterminate') && this.inputControl.indeterminate !== this.indeterminate) {
      syncProps(this.inputControl, this, { indeterminate: true });
    }
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.listenForIndeterminateState();
    this.checked = this.inputControl.checked;
    this.inputControl.addEventListener('change', () => {
      this.checked = this.inputControl.checked;
      this.indeterminate = false;
    });
  }

  private listenForIndeterminateState() {
    this.indeterminate = this.inputControl.indeterminate || this.inputControl.hasAttribute('indeterminate');
    this.inputControl.indeterminate = this.indeterminate;

    this.observers.push(
      listenForAttributeChange(this.inputControl, 'indeterminate', val => (this.indeterminate = val !== null))
    );
  }
}
