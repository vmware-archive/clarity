/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { querySlotAll, id } from '@cds/core/internal';
import { CdsInternalControlGroup } from '@cds/core/forms';
import { CdsRadio } from './radio.element.js';

/**
 * Radio Group
 *
 * ```typescript
 * import '@cds/core/radio/register.js';
 * ```
 *
 * ```html
 * <cds-radio-group>
 *   <label>radio group</label>
 *   <cds-radio>
 *     <label>item 1</label>
 *     <input type="radio" />
 *   </cds-radio>
 *
 *   <cds-radio>
 *     <label>item 2</label>
 *     <input type="radio" />
 *   </cds-radio>
 * </cds-radio-group>
 * ```
 *
 * @element cds-radio-group
 * @slot - For projecting cds-radio controls
 */
export class CdsRadioGroup extends CdsInternalControlGroup {
  @querySlotAll('cds-radio', { assign: 'controls' }) protected controls: NodeListOf<CdsRadio>;

  @id() protected radioName: string;

  static get styles() {
    return [...super.styles];
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.associateRadioControls();
    this.syncRadioControls();
  }

  private associateRadioControls() {
    this.controls.forEach(radio => radio && radio.inputControl.setAttribute('name', this.radioName));
  }

  private syncRadioControls() {
    this.controls.forEach(c =>
      c.inputControl.addEventListener('click', (e: any) => {
        Array.from(this.controls).forEach(c => c.inputControl.removeAttribute('checked'));
        e.target.setAttribute('checked', '');
      })
    );
  }
}
