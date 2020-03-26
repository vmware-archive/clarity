/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.09,31.58l-15.32-12a2,2,0,0,1,0-3.15l15.32-12a1.93,1.93,0,0,1,2.06-.22A1.77,1.77,0,0,1,20,6v6.7L30.83,4.42a1.93,1.93,0,0,1,2.06-.22A2,2,0,0,1,34,6V30a2,2,0,0,1-1.11,1.79,1.94,1.94,0,0,1-2.06-.22L20,23.31V30a1.77,1.77,0,0,1-.85,1.79,1.94,1.94,0,0,1-2.06-.22ZM32,30l.06-24L18,16.8V6L3,18,18,30V19.2Z"/>',
  solid:
    '<path d="M16.92,31.58,1.6,19.57a2,2,0,0,1,0-3.15l15.32-12A1.93,1.93,0,0,1,19,4.2,1.89,1.89,0,0,1,20,6v6.7L30.66,4.42a1.93,1.93,0,0,1,2.06-.22A2,2,0,0,1,33.83,6V30a2,2,0,0,1-1.11,1.79,1.94,1.94,0,0,1-2.06-.22L20,23.31V30a1.89,1.89,0,0,1-1,1.79,1.94,1.94,0,0,1-2.06-.22Z"/>',
};

export const rewindIconName = 'rewind';
export const rewindIcon: IconShapeTuple = [rewindIconName, renderIcon(icon)];
