/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsDivider } from './divider.element.js';

registerElementSafely('cds-divider', CdsDivider);

declare global {
  interface HTMLElementTagNameMap {
    'cds-divider': CdsDivider;
  }
}
