/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsSearch } from './search.element.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { searchIcon } from '@cds/core/icon/shapes/search.js';
import '@cds/core/button-action/register.js';
import '@cds/core/icon/register.js';
import '@cds/core/forms/register.js';

registerElementSafely('cds-search', CdsSearch);
ClarityIcons.addIcons(searchIcon);

declare global {
  interface HTMLElementTagNameMap {
    'cds-search': CdsSearch;
  }
}
