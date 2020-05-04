/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,6a4.25,4.25,0,0,1-3.9-4H32Zm0,1.62v4.83A5.87,5.87,0,0,0,26.49,26h-17A5.87,5.87,0,0,0,4,20.44V15.6A5.87,5.87,0,0,0,9.51,10h17A5.87,5.87,0,0,0,32,15.6ZM7.9,10A4.25,4.25,0,0,1,4,14V10ZM4,22.06A4.25,4.25,0,0,1,7.9,26H4ZM28.1,26A4.25,4.25,0,0,1,32,22.06V26Z"/><path d="M18,10.85c-3.47,0-6.3,3.21-6.3,7.15s2.83,7.15,6.3,7.15,6.3-3.21,6.3-7.15S21.47,10.85,18,10.85Zm0,12.69c-2.59,0-4.7-2.49-4.7-5.55s2.11-5.55,4.7-5.55,4.7,2.49,4.7,5.55S20.59,23.55,18,23.55Z"/>',
  solid:
    '<path d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM4,26V21.15A5.18,5.18,0,0,1,8.79,26ZM4,14.85V10H8.79A5.18,5.18,0,0,1,4,14.85ZM18,25.15c-3.47,0-6.3-3.21-6.3-7.15s2.83-7.15,6.3-7.15,6.3,3.21,6.3,7.15S21.47,25.15,18,25.15ZM32,26H27.25A5.18,5.18,0,0,1,32,21.15Zm0-11.15A5.18,5.18,0,0,1,27.25,10H32Z"/><ellipse cx="18" cy="18" rx="4" ry="4.72"/>',
};

export const dollarBillIconName = 'dollar-bill';
export const dollarBillIcon: IconShapeTuple = [dollarBillIconName, renderIcon(icon)];
