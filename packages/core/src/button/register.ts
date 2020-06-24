/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import '@clr/core/icon/register.js';
import { registerElementSafely } from '@clr/core/internal';
import { CdsButton, CdsIconButton, CdsInlineButton } from '@clr/core/button';

registerElementSafely('cds-button', CdsButton);
registerElementSafely('cds-icon-button', CdsIconButton);
registerElementSafely('cds-inline-button', CdsInlineButton);

declare global {
  interface HTMLElementTagNameMap {
    'cds-button': CdsButton;
    'cds-icon-button': CdsIconButton;
    'cds-inline-button': CdsInlineButton;
  }
}
