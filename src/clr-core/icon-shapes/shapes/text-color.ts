/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19.47,3.84a1.45,1.45,0,0,0-1.4-1H18a1.45,1.45,0,0,0-1.42,1L8.42,21.56a1.35,1.35,0,0,0-.14.59,1,1,0,0,0,1,1,1.11,1.11,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.59,1.59,0,0,0-.14-.57ZM13.36,15.71,18,5.49l4.6,10.22Z"/><rect x="4.06" y="25" width="28" height="8" rx="2" ry="2"/>',
};

export const textColorIconName = 'text-color';
export const textColorIcon: IconShapeTuple = [textColorIconName, renderIcon(icon)];
