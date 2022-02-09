/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { PropertyValues } from 'lit';
import { CdsInternalControlInline } from '@cds/core/forms';
import styles from './radio.element.scss';

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

  firstUpdated(props: PropertyValues<this>) {
    super.firstUpdated(props);

    if (!this.isControlGroup) {
      this.associateNonGroupRadios();
    }
  }

  /**
   * Native radio inputs have no concept of an un-checked event. This means for
   * our radios to update/rerender we need to listen for the other radios in the
   * group when the are checked. If the Radio is within a cds-control-group or
   * cds-radio-group then the group handles this. Radios can be used outside of
   * groups in cases of using aria-labelledby like a selectable grid row/cell.
   */
  private associateNonGroupRadios() {
    const root = this.getRootNode() as HTMLElement;
    root.addEventListener('checkedChange', (e: any) => {
      if (e.target.tagName === 'CDS-RADIO' && e.target.inputControl.name === this.inputControl.name) {
        root
          .querySelectorAll<CdsRadio>(`cds-radio input[type=radio][name=${this.inputControl.name}]`)
          .forEach(c => (c.checked = false));
        e.target.inputControl.checked = true;
      }
    });
  }
}
