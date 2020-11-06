/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { querySlotAll, baseStyles } from '@cds/core/internal';
import { CdsInternalControlGroup } from '@cds/core/forms';
import { styles } from './input-group.element.css.js';
import { CdsInput } from './input.element.js';

/**
 * Input Group
 *
 * ```typescript
 * import '@cds/core/input/register.js';
 * ```
 *
 * ```html
 * <cds-input-group>
 *   <label>Host URL</label>
 *   <cds-select cds-layout="align:shrink">
 *     <label>URL Protocol</label>
 *     <select>
 *       <option>https://</option>
 *       <option>http://</option>
 *     </select>
 *   </cds-select>
 *   <cds-input>
 *     <label>Host URL</label>
 *     <input placeholder="example.com" type="url" />
 *   </cds-input>
 *   <cds-control-message>Host ID: 123456</cds-control-message>
 * </cds-input-group>
 * ```
 *
 * @element cds-input-group
 * @slot - For projecting inputs
 */
export class CdsInputGroup extends CdsInternalControlGroup {
  @querySlotAll('cds-input, cds-select, cds-time, cds-date, cds-control, [cds-control]', { assign: 'controls' })
  protected controls: NodeListOf<CdsInput>;

  protected isInlineControlGroup = true;

  static get styles() {
    return [baseStyles, styles];
  }

  firstUpdated(props: Map<string, any>) {
    super.firstUpdated(props);
    this.controls.forEach(c => {
      c.responsive = false;
      c.hiddenLabel = true;
      c.controlWidth = this.controlWidth;
    });
  }
}
