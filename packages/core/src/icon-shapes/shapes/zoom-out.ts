/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M16,4A12,12,0,1,0,28,16,12,12,0,0,0,16,4Zm0,21.91A10,10,0,1,1,26,16,10,10,0,0,1,16,25.91Z"/><path d="M31.71,29.69l-5.17-5.17A13.68,13.68,0,0,1,25.15,26l5.15,5.15a1,1,0,0,0,1.41-1.41Z"/><path d="M20,15H12a1,1,0,0,0,0,2h8a1,1,0,0,0,0-2Z"/>',
};

export const zoomOutIconName = 'zoom-out';
export const zoomOutIcon: IconShapeTuple = [zoomOutIconName, renderIcon(icon)];
