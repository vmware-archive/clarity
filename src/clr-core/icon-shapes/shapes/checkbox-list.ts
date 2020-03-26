/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.43,16H10v2H31.43a1,1,0,0,0,0-2Z"/><path d="M31.43,24H10v2H31.43a1,1,0,0,0,0-2Z"/><path d="M15.45,10h16a1,1,0,0,0,0-2h-14Z"/><path d="M17.5,3.42a1.09,1.09,0,0,0-1.55,0L7.89,11.48,4.51,7.84A1.1,1.1,0,1,0,2.9,9.34l4.94,5.3L17.5,5A1.1,1.1,0,0,0,17.5,3.42Z"/>',
};

export const checkboxListIconName = 'checkbox-list';
export const checkboxListIcon: IconShapeTuple = [checkboxListIconName, renderIcon(icon)];
