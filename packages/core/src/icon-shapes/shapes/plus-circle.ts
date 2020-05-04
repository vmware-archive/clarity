/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.17,17H19V9.83a1,1,0,0,0-2,0V17H9.83a1,1,0,0,0,0,2H17v7.17a1,1,0,0,0,2,0V19h7.17a1,1,0,0,0,0-2Z"/><path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/>',

  solid:
    '<path d="M34,18A16,16,0,1,1,18,2,16,16,0,0,1,34,18Zm-8.41-1.5H19.5V10.41a1.5,1.5,0,0,0-3,0V16.5H10.41a1.5,1.5,0,0,0,0,3H16.5v6.09a1.5,1.5,0,0,0,3,0V19.5h6.09a1.5,1.5,0,0,0,0-3Z"/>',
};

export const plusCircleIconName = 'plus-circle';
export const plusCircleIcon: IconShapeTuple = [plusCircleIconName, renderIcon(icon)];
