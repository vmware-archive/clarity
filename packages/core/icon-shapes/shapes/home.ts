/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.71,17.29l-15-15a1,1,0,0,0-1.41,0l-15,15a1,1,0,0,0,1.41,1.41L18,4.41,32.29,18.71a1,1,0,0,0,1.41-1.41Z"/><path d="M28,32h-5V22H13V32H8V18L6,20V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76l-2-2Z"/>',
  solid:
    '<path d="M33,19a1,1,0,0,1-.71-.29L18,4.41,3.71,18.71a1,1,0,0,1-1.41-1.41l15-15a1,1,0,0,1,1.41,0l15,15A1,1,0,0,1,33,19Z"/><path d="M18,7.79,6,19.83V32a2,2,0,0,0,2,2h7V24h6V34h7a2,2,0,0,0,2-2V19.76Z"/>',
};

export const homeIconName = 'home';
export const homeIcon: IconShapeTuple = [homeIconName, renderIcon(icon)];
