/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsSelect } from './select.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';

registerElementSafely('cds-select', CdsSelect);

declare global {
  interface HTMLElementTagNameMap {
    'cds-select': CdsSelect;
  }
}
