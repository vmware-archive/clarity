/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,32.43a1,1,0,0,1-.61-.21C11.83,27.9,8,24.18,5.32,20.51,1.9,15.82,1.12,11.49,3,7.64c1.34-2.75,5.19-5,9.69-3.69A9.87,9.87,0,0,1,18,7.72a9.87,9.87,0,0,1,5.31-3.77c4.49-1.29,8.35.94,9.69,3.69,1.88,3.85,1.1,8.18-2.32,12.87C28,24.18,24.17,27.9,18.61,32.22A1,1,0,0,1,18,32.43ZM10.13,5.58A5.9,5.9,0,0,0,4.8,8.51c-1.55,3.18-.85,6.72,2.14,10.81A57.13,57.13,0,0,0,18,30.16,57.13,57.13,0,0,0,29.06,19.33c3-4.1,3.69-7.64,2.14-10.81-1-2-4-3.59-7.34-2.65a8,8,0,0,0-4.94,4.2,1,1,0,0,1-1.85,0,7.93,7.93,0,0,0-4.94-4.2A7.31,7.31,0,0,0,10.13,5.58Z"/>',
  solid:
    '<path d="M33,7.64c-1.34-2.75-5.2-5-9.69-3.69A9.87,9.87,0,0,0,18,7.72a9.87,9.87,0,0,0-5.31-3.77C8.19,2.66,4.34,4.89,3,7.64c-1.88,3.85-1.1,8.18,2.32,12.87C8,24.18,11.83,27.9,17.39,32.22a1,1,0,0,0,1.23,0c5.55-4.31,9.39-8,12.07-11.71C34.1,15.82,34.88,11.49,33,7.64Z"/>',
};

export const heartIconName = 'heart';
export const heartIcon: IconShapeTuple = [heartIconName, renderIcon(icon)];
