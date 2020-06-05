/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.18,26.11,20.35,13.28A9.28,9.28,0,0,0,7.54,2.79l-1.34.59,5.38,5.38L8.76,11.59,3.38,6.21,2.79,7.54A9.27,9.27,0,0,0,13.28,20.35L26.11,33.18a2,2,0,0,0,2.83,0l4.24-4.24A2,2,0,0,0,33.18,26.11Zm-5.66,5.66L13.88,18.12l-.57.16a7.27,7.27,0,0,1-9.31-7,7.2,7.2,0,0,1,.15-1.48l4.61,4.61,5.66-5.66L9.81,4.15a7.27,7.27,0,0,1,8.47,9.16l-.16.57L31.77,27.53Z"/><circle cx="27.13" cy="27.09" r="1.3" transform="translate(-11.21 27.12) rotate(-45)"/>',
  solid:
    '<path d="M33.73,27.72,19.67,13.66a8.79,8.79,0,0,0-12-10.5L13,8.53,8.53,13,3.16,7.67a8.79,8.79,0,0,0,10.5,12L27.72,33.73a1.07,1.07,0,0,0,1.5,0l4.51-4.51A1.07,1.07,0,0,0,33.73,27.72ZM29,29a1.38,1.38,0,1,1,0-2A1.38,1.38,0,0,1,29,29Z"/>',
};

export const wrenchIconName = 'wrench';
export const wrenchIcon: IconShapeTuple = [wrenchIconName, renderIcon(icon)];
