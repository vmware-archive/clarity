/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@cds/core/icon/register.js';
import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { CdsInternalCloseButton, CdsCloseButtonTagName } from './close-button.element.js';

registerElementSafely(CdsCloseButtonTagName, CdsInternalCloseButton);

ClarityIcons.addIcons(timesIcon);
ClarityIcons.addAliases(['times', ['close']]);

declare global {
  interface HTMLElementTagNameMap {
    'cds-internal-close-button': CdsInternalCloseButton;
  }
}
