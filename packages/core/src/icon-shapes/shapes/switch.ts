/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5.71,14H20.92V12H5.71L9.42,8.27A1,1,0,1,0,8,6.86L1.89,13,8,19.14a1,1,0,1,0,1.42-1.4Z"/><rect x="23" y="12" width="3" height="2"/><rect x="28" y="12" width="2" height="2"/><path d="M27.92,17.86a1,1,0,0,0-1.42,1.41L30.21,23H15v2H30.21L26.5,28.74a1,1,0,1,0,1.42,1.4L34,24Z"/><rect x="10" y="23" width="3" height="2"/><rect x="6" y="23" width="2" height="2"/>',
};

export const switchIconName = 'switch';
export const switchIcon: IconShapeTuple = [switchIconName, renderIcon(icon)];
