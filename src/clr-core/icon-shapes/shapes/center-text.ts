/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.88,8H5.12a1.1,1.1,0,0,0,0,2.2H30.88a1.1,1.1,0,1,0,0-2.2Z"/><path d="M25.5,16.2a1.1,1.1,0,1,0,0-2.2h-15a1.1,1.1,0,1,0,0,2.2Z"/><path d="M30.25,20H5.75a1.1,1.1,0,0,0,0,2.2h24.5a1.1,1.1,0,0,0,0-2.2Z"/><path d="M24.88,26H11.12a1.1,1.1,0,1,0,0,2.2H24.88a1.1,1.1,0,1,0,0-2.2Z"/>',
};

export const centerTextIconName = 'center-text';
export const centerTextIcon: IconShapeTuple = [centerTextIconName, renderIcon(icon)];
