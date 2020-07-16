/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/core/internal';
import { CdsFile } from './file.element.js';
import '@clr/core/forms/register.js';
import '@clr/core/button/register.js';
import '@clr/core/icon/register.js';

registerElementSafely('cds-file', CdsFile);

declare global {
  interface HTMLElementTagNameMap {
    'cds-file': CdsFile;
  }
}
