/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons, timesIcon } from '@cds/core/icon';
import { CdsTag } from './tag.element.js';

registerElementSafely('cds-tag', CdsTag);

ClarityIcons.addIcons(timesIcon);

declare global {
  interface HTMLElementTagNameMap {
    'cds-tag': CdsTag;
  }
}
