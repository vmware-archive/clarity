/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsSearch } from './search.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/icon/register.js';

registerElementSafely('cds-search', CdsSearch);

declare global {
  interface HTMLElementTagNameMap {
    'cds-search': CdsSearch;
  }
}
