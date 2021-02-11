/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { CdsNavigation } from './navigation.element.js';
import { CdsNavigationHeader } from './navigation-header.element.js';
import { CdsNavigationItem } from './navigation-item.element.js';

registerElementSafely('cds-navigation', CdsNavigation);
registerElementSafely('cds-navigation-header', CdsNavigationHeader);
registerElementSafely('cds-navigation-item', CdsNavigationItem);

declare global {
  interface HTMLElementTagNameMap {
    'cds-navigation': CdsNavigation;
    'cds-navigation-header': CdsNavigationHeader;
    'cds-navigation-item': CdsNavigationItem;
  }
}
