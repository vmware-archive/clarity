/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.54,20.82a.88.88,0,0,0-.88-.88H20.75l1.1-1.1A.88.88,0,0,0,20.6,17.6l-3.21,3.22L20.6,24a.88.88,0,1,0,1.25-1.24L20.76,21.7h4.9A.88.88,0,0,0,26.54,20.82Z"/><path d="M29.27,21.7a.88.88,0,1,0,0-1.76h-.58a.88.88,0,1,0,0,1.76Z"/><path d="M32.21,20h-.06a.85.85,0,0,0-.85.88.91.91,0,0,0,.91.88.88.88,0,1,0,0-1.76Z"/><path d="M32.59,11a.88.88,0,0,0-1.25,1.24l1.1,1.1H27.53a.88.88,0,1,0,0,1.76h4.9l-1.09,1.09a.88.88,0,0,0,1.25,1.24l3.21-3.22Z"/><path d="M24.5,15.07a.88.88,0,1,0,0-1.76h-.58a.88.88,0,1,0,0,1.76Z"/><path d="M21.9,14.27a.85.85,0,0,0-.85-.88H21a.88.88,0,1,0,0,1.76A.91.91,0,0,0,21.9,14.27Z"/><path d="M30.36,23.65c0,.13,0,.26,0,.39a3.77,3.77,0,0,1-3.62,3.89H7.28a5.32,5.32,0,0,1-5.13-5.48A5.32,5.32,0,0,1,7.28,17H8.91L9,16.12a8.92,8.92,0,0,1,8.62-8h.08a8.49,8.49,0,0,1,6.56,3.29h2.37a10.55,10.55,0,0,0-8.91-5.25h-.11A10.82,10.82,0,0,0,7.22,15a7.28,7.28,0,0,0-7,7.43,7.27,7.27,0,0,0,7.08,7.43H26.77A5.72,5.72,0,0,0,32.35,24a3.77,3.77,0,0,0,0-.39Z"/>',
};

export const cloudTrafficIconName = 'cloud-traffic';
export const cloudTrafficIcon: IconShapeTuple = [cloudTrafficIconName, renderIcon(icon)];
