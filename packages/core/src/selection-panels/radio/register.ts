/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsRadioPanel } from './radio-panel.element.js';

registerElementSafely('cds-radio-panel', CdsRadioPanel);

declare global {
  interface HTMLElementTagNameMap {
    'cds-radio-panel': CdsRadioPanel;
  }
}
