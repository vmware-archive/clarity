/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import '@cds/core/progress-circle/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { CdsButton } from './button.element.js';
import { CdsIconButton } from './icon-button.element.js';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { errorStandardIcon } from '@cds/core/icon/shapes/error-standard.js';
import { checkIcon } from '@cds/core/icon/shapes/check.js';

ClarityIcons.addIcons(errorStandardIcon, checkIcon);

registerElementSafely('cds-button', CdsButton);
registerElementSafely('cds-icon-button', CdsIconButton);
declare global {
  interface HTMLElementTagNameMap {
    'cds-button': CdsButton;
    'cds-icon-button': CdsIconButton;
  }
}
