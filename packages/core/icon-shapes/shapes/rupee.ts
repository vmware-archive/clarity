/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28,8H24.14A7.52,7.52,0,0,0,22.6,6H28a1,1,0,0,0,0-2H10a1,1,0,0,0,0,2h7.55a5.42,5.42,0,0,1,4.2,2H10a1,1,0,0,0,0,2H22.79A5.54,5.54,0,0,1,23,11.51,5.48,5.48,0,0,1,17.55,17H11.14a1,1,0,0,0-.75,1.66L22.06,32a1,1,0,1,0,1.5-1.32L13.35,19h4.21a7.51,7.51,0,0,0,7.3-9H28a1,1,0,0,0,0-2Z"/>',
  solid:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm5.88,9H26a1,1,0,0,1,0,2H24.26c0,.06,0,.12,0,.19a6.09,6.09,0,0,1-6,6.2h-2l6.82,8.06a1.25,1.25,0,0,1-1.91,1.62L12.63,18.94a1.25,1.25,0,0,1,1-2.06h4.71a3.59,3.59,0,0,0,3.48-3.69c0-.07,0-.13,0-.2h-9a1,1,0,0,1,0-2h8.32a3.41,3.41,0,0,0-2.78-1.5H12.75a1.25,1.25,0,0,1,0-2.5H26a1,1,0,0,1,0,2H22.68A6.23,6.23,0,0,1,23.88,11Z"/>',
};

export const rupeeIconName = 'rupee';
export const rupeeIcon: IconShapeTuple = [rupeeIconName, renderIcon(icon)];
