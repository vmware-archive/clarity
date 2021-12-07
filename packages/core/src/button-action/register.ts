/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { ClarityIcons } from '@cds/core/icon/icon.service.js';
import { ellipsisVerticalIcon } from '@cds/core/icon/shapes/ellipsis-vertical.js';
import { timesIcon } from '@cds/core/icon/shapes/times.js';
import { CdsButtonAction } from './button-action.element.js';
import '@cds/core/icon/register.js';

ClarityIcons.addIcons(ellipsisVerticalIcon, timesIcon);
ClarityIcons.addAliases(['times', ['close']]);

registerElementSafely('cds-button-action', CdsButtonAction);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button-action': CdsButtonAction;
  }
}
