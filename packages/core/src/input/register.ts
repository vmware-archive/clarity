/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsInput } from './input.element.js';
import { CdsInputGroup } from './input-group.element.js';
import '@cds/core/forms/register.js';

registerElementSafely('cds-input', CdsInput);
registerElementSafely('cds-input-group', CdsInputGroup);

declare global {
  interface HTMLElementTagNameMap {
    'cds-input': CdsInput;
    'cds-input-group': CdsInputGroup;
  }
}
