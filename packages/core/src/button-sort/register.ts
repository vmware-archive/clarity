/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { angleIcon } from '@cds/core/icon/shapes/angle.js';
import { CdsButtonSort } from './button-sort.element.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(angleIcon);

registerElementSafely('cds-button-sort', CdsButtonSort);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button-sort': CdsButtonSort;
  }
}
