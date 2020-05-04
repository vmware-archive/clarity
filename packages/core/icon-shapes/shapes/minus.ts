/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M26,17H10a1,1,0,0,0,0,2H26a1,1,0,0,0,0-2Z"/>',
};

export const minusIconName = 'minus';
export const minusIcon: IconShapeTuple = [minusIconName, renderIcon(icon)];
