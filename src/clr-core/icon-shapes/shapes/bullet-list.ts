/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="5.21" cy="9.17" r="2"/><circle cx="5.21" cy="17.17" r="2"/><circle cx="5.21" cy="25.17" r="2"/><path d="M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z"/><path d="M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z"/><path d="M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z"/>',
};

export const bulletListIconName = 'bullet-list';
export const bulletListIcon: IconShapeTuple = [bulletListIconName, renderIcon(icon)];
