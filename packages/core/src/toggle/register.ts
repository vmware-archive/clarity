/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsToggleGroup } from './toggle-group.element.js';
import { CdsToggle } from './toggle.element.js';
import '@cds/core/forms/register.js';

registerElementSafely('cds-toggle', CdsToggle);
registerElementSafely('cds-toggle-group', CdsToggleGroup);

declare global {
  interface HTMLElementTagNameMap {
    'cds-toggle-group': CdsToggleGroup;
    'cds-toggle': CdsToggle;
  }
}
