/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.12,34H5.9A2.81,2.81,0,0,1,3,31.19V4.86A2.9,2.9,0,0,1,6,2.07H20.22A2.72,2.72,0,0,1,23,4.86V31.19A2.82,2.82,0,0,1,20.12,34ZM5.9,4A.87.87,0,0,0,5,4.86V31.19a.87.87,0,0,0,.87.87H20.12a.94.94,0,0,0,.95-.87V4.86A.94.94,0,0,0,20.12,4Z"/><path d="M29.53,34A3.5,3.5,0,0,1,26,30.5V23a2,2,0,0,0-2-2H22.57a1,1,0,0,1,0-2H24a4,4,0,0,1,4,4V30.5a1.5,1.5,0,0,0,3,0V17.3l-3.13-7A2.29,2.29,0,0,0,25.8,9h-.73a1,1,0,1,1,0-2h.73a4.3,4.3,0,0,1,3.93,2.55l3.21,7.16a1,1,0,0,1,.09.41V30.5A3.5,3.5,0,0,1,29.53,34Z"/><path d="M18,9H8A1,1,0,1,1,8,7H18a1,1,0,0,1,0,2Z"/><path d="M18,13H8A1,1,0,1,1,8,11H18A1,1,0,1,1,18,13Z"/><path d="M25,12.08a1,1,0,0,1-1-1v-6a1,1,0,0,1,2,0v6A1,1,0,0,1,25,12.08Z"/>',
};

export const fuelIconName = 'fuel';
export const fuelIcon: IconShapeTuple = [fuelIconName, renderIcon(icon)];
