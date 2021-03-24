/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsInternalControlGroup } from '@cds/core/forms';

/**
 * Checkbox Group
 *
 * ```typescript
 * import '@cds/core/checkbox';
 * ```
 *
 * ```html
 * <cds-checkbox-group>
 *   <label>Select an item</label>
 *   <cds-checkbox>
 *     <label>Test</label>
 *     <input type="checkbox" />
 *   </cds-checkbox>
 *
 *   <cds-checkbox>
 *     <label>Test</label>
 *     <input type="checkbox" />
 *   </cds-checkbox>
 * </cds-checkbox-group>
 * ```
 *
 * @element cds-checkbox-group
 * @slot - For projecting checkbox controls
 */
export class CdsCheckboxGroup extends CdsInternalControlGroup {}
