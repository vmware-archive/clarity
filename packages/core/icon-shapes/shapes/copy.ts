/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.5,7h-19A1.5,1.5,0,0,0,9,8.5v24A1.5,1.5,0,0,0,10.5,34h19A1.5,1.5,0,0,0,31,32.5V8.5A1.5,1.5,0,0,0,29.5,7ZM29,32H11V9H29Z"/><path d="M26,3.5A1.5,1.5,0,0,0,24.5,2H5.5A1.5,1.5,0,0,0,4,3.5v24A1.5,1.5,0,0,0,5.5,29H6V4H26Z"/>',

  solid:
    '<path d="M27,3.56A1.56,1.56,0,0,0,25.43,2H5.57A1.56,1.56,0,0,0,4,3.56V28.44A1.56,1.56,0,0,0,5.57,30h.52V4.07H27Z"/><rect x="8" y="6" width="23" height="28" rx="1.5" ry="1.5"/>',
};

export const copyIconName = 'copy';
export const copyIcon: IconShapeTuple = [copyIconName, renderIcon(icon)];
