/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsProgressCircle } from './progress-circle.element.js';

registerElementSafely('cds-progress-circle', CdsProgressCircle);

declare global {
  interface HTMLElementTagNameMap {
    'cds-progress-circle': CdsProgressCircle;
  }
}
