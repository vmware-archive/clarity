/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsInternalVisualCheckbox } from './visual-checkbox.element.js';

registerElementSafely('cds-internal-visual-checkbox', CdsInternalVisualCheckbox);

declare global {
  interface HTMLElementTagNameMap {
    'cds-internal-visual-checkbox': CdsInternalVisualCheckbox;
  }
}
