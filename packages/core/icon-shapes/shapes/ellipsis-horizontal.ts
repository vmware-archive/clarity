/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<circle cx="31.1" cy="18" r="2.9"/><circle cx="18" cy="18" r="2.9"/><circle cx="4.9" cy="18" r="2.9"/>',
  outlineBadged:
    '<circle cx="31.1" cy="18" r="2.9"/><circle cx="18" cy="18" r="2.9"/><circle cx="4.9" cy="18" r="2.9"/>',
};

export const ellipsisHorizontalIconName = 'ellipsis-horizontal';
export const ellipsisHorizontalIcon: IconShapeTuple = [ellipsisHorizontalIconName, renderIcon(icon)];
