/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>',
  outlineAlerted:
    '<path d="M31,31H5c-0.6,0-1,0.4-1,1s0.4,1,1,1h26c0.6,0,1-0.4,1-1S31.6,31,31,31z"/><path d="M8.8,15L17,6.8v20.6c0,0.6,0.4,1,1,1s1-0.4,1-1V6.8L20.1,8l1-1.8L18,3L7.4,13.6C7,14,6.9,14.6,7.2,15s1,0.5,1.4,0.1C8.7,15.1,8.8,15.1,8.8,15z"/>',
  outlineBadged:
    '<path d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M8.81,15,17,6.83V27.48a1,1,0,0,0,2,0V6.83L27.19,15a1,1,0,0,0,1.41-1.41L18,3,7.39,13.61A1,1,0,1,0,8.81,15Z"/>',
};

export const uploadIconName = 'upload';
export const uploadIcon: IconShapeTuple = [uploadIconName, renderIcon(icon)];
