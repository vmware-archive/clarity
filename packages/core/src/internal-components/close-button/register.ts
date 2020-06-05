/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon/register.js';
import '@clr/core/button/register.js';
import { registerElementSafely } from '@clr/core/internal';
import { CdsCloseButton } from '@clr/core/internal-components/close-button';

registerElementSafely('cds-internal-close-button', CdsCloseButton);

declare global {
  interface HTMLElementTagNameMap {
    'cds-internal-close-button': CdsCloseButton;
  }
}
