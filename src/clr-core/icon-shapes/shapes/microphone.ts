/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,24c3.9,0,7-3.1,7-7V9c0-3.9-3.1-7-7-7s-7,3.1-7,7v8C11,20.9,14.1,24,18,24z M13,9c0-2.8,2.2-5,5-5s5,2.2,5,5v8c0,2.8-2.2,5-5,5s-5-2.2-5-5V9z"/><path d="M30,17h-2c0,5.5-4.5,10-10,10S8,22.5,8,17H6c0,6.3,4.8,11.4,11,11.9V32h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3v-3.1C25.2,28.4,30,23.3,30,17z"/>',
  solid:
    '<path d="M18,24c3.9,0,7-3.1,7-7V9c0-3.9-3.1-7-7-7s-7,3.1-7,7v8C11,20.9,14.1,24,18,24z"/><path d="M30,17h-2c0,5.5-4.5,10-10,10S8,22.5,8,17H6c0,6.3,4.8,11.4,11,11.9V32h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3v-3.1C25.2,28.4,30,23.3,30,17z"/>',
};

export const microphoneIconName = 'microphone';
export const microphoneIcon: IconShapeTuple = [microphoneIconName, renderIcon(icon)];
