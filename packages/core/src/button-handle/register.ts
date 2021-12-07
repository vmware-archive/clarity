/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { dragHandleIcon } from '@cds/core/icon/shapes/drag-handle.js';
import { CdsButtonHandle } from './button-handle.element.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(dragHandleIcon);

registerElementSafely('cds-button-handle', CdsButtonHandle);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button-handle': CdsButtonHandle;
  }
}
