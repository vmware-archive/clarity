/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@clr/core/common';
import { CwcIcon } from '@clr/core/icon-shapes';

registerElementSafely('cwc-icon', CwcIcon);

declare global {
  interface HTMLElementTagNameMap {
    'cwc-icon': CwcIcon;
  }
}
