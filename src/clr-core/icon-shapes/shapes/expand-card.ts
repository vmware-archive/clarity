/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33,6H3A1,1,0,0,0,2,7V29a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V7A1,1,0,0,0,33,6ZM32,28H4V8H32Z"/><path d="M13.48,15.86,18,11.34l4.52,4.52a.77.77,0,0,0,.56.24.81.81,0,0,0,.57-1.37L18,9.08l-5.65,5.65a.8.8,0,1,0,1.13,1.13Z"/><path d="M13.48,21.86,18,17.34l4.52,4.52a.77.77,0,0,0,.56.24.81.81,0,0,0,.57-1.37L18,15.08l-5.65,5.65a.8.8,0,1,0,1.13,1.13Z"/>',
  solid:
    '<path d="M33,6H3A1,1,0,0,0,2,7V29a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V7A1,1,0,0,0,33,6ZM23.79,21.41a1,1,0,0,1-1.41,0L18,17l-4.38,4.38a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,14.2,23.79,20A1,1,0,0,1,23.79,21.41Zm0-6.2a1,1,0,0,1-1.41,0L18,10.83l-4.38,4.38a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,8l5.79,5.79A1,1,0,0,1,23.79,15.21Z"/>',
};

export const expandCardIconName = 'expand-card';
export const expandCardIcon: IconShapeTuple = [expandCardIconName, renderIcon(icon)];
