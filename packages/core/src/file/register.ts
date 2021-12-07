/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsFile } from './file.element.js';
import '@cds/core/forms/register.js';
import '@cds/core/button/register.js';
import '@cds/core/button-action/register.js';
import '@cds/core/icon/register.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { folderIcon } from '@cds/core/icon/shapes/folder.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';

ClarityIcons.addIcons(folderIcon, timesIcon);

registerElementSafely('cds-file', CdsFile);

declare global {
  interface HTMLElementTagNameMap {
    'cds-file': CdsFile;
  }
}
