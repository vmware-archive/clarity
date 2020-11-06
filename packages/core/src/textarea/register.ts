/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsTextarea } from './textarea.element.js';
import '@cds/core/forms/register.js';

registerElementSafely('cds-textarea', CdsTextarea);

declare global {
  interface HTMLElementTagNameMap {
    'cds-textarea': CdsTextarea;
  }
}
