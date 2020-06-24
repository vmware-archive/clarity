/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { querySlotAll } from '@clr/core/internal';
import { CdsInternalControlGroup } from '@clr/core/forms';
import { CdsToggle } from './toggle.element.js';

/**
 * Toggle Group
 *
 * ```typescript
 * import '@clr/core/toggle/register.js';
 * ```
 *
 * ```html
 * <cds-toggle-group>
 *   <label>Select an item</label>
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 *
 *   <cds-toggle>
 *     <label>toggle</label>
 *     <input type="checkbox" />
 *   </cds-toggle>
 * </cds-toggle-group>
 * ```
 *
 * @element cds-toggle-group
 * @slot default - For projecting toggle controls
 */
export class CdsToggleGroup extends CdsInternalControlGroup {
  @querySlotAll('cds-toggle', { assign: 'controls' }) protected controls: NodeListOf<CdsToggle>;
}
