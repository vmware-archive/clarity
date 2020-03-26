/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19,3,25.22,9.4l-5.66,5.8L21,16.63l5.68-5.83a2,2,0,0,0,0-2.78L20.48,1.7A2,2,0,0,0,18.85,1,2,2,0,0,0,17,3v11.4l2,2Z"/><path d="M4.77,5,3.36,6.42,15.89,19,9.06,26a1,1,0,0,0,.71,1.7,1,1,0,0,0,.72-.31L17,20.68V32.94a2.08,2.08,0,0,0,.71,1.63A2,2,0,0,0,19,35a2,2,0,0,0,1.42-.6l5.41-5.54,3.54,3.53L30.77,31ZM19,33.05v-11l5.41,5.41Z"/>',
  solid:
    '<path d="M19.31,5.17,23.7,9.7l-3.59,3.71,2.24,2.29,4.09-4.22a2.56,2.56,0,0,0,0-3.56l-6-6.14a2.51,2.51,0,0,0-2.77-.59,2.54,2.54,0,0,0-1.6,2.36v10l3.21,3.21Z"/><path d="M4.5,5,3.09,6.42,15.17,18.51,8.7,25.19A1.6,1.6,0,0,0,9.85,27.9,1.57,1.57,0,0,0,11,27.41l5.11-5.27V32.45a2.54,2.54,0,0,0,1.6,2.36,2.44,2.44,0,0,0,.95.19,2.55,2.55,0,0,0,1.82-.77l5.12-5.29,3.49,3.48L30.5,31ZM19.81,30.83V22.65l4,4Z"/>',
};

export const bluetoothOffIconName = 'bluetooth-off';
export const bluetoothOffIcon: IconShapeTuple = [bluetoothOffIconName, renderIcon(icon)];
