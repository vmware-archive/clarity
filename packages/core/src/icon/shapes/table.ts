/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8,34a1,1,0,0,1-1-1V2.92a1,1,0,0,1,2,0V33A1,1,0,0,1,8,34Z"/><path d="M17,33.92a1,1,0,0,1-1-1V9.1a1,1,0,1,1,2,0V32.92A1,1,0,0,1,17,33.92Z"/><path d="M26,34a1,1,0,0,1-1-1V9a1,1,0,0,1,2,0V33A1,1,0,0,1,26,34Z"/><path d="M33.11,18h-25a1,1,0,1,1,0-2h25a1,1,0,1,1,0,2Z"/><path d="M33.1,26.94H8.1A1,1,0,1,1,8.1,25h25a1,1,0,1,1,0,1.92Z"/><path d="M33,8.92H3A1,1,0,1,1,3,7H33a1,1,0,1,1,0,1.94Z"/>',
};

export const tableIconName = 'table';
export const tableIcon: IconShapeTuple = [tableIconName, renderIcon(icon)];
