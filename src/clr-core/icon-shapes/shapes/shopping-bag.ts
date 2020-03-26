/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25,12V9.05a7,7,0,1,0-14,0v7a1,1,0,0,0,2,0V14h8V12H13V9.05a5,5,0,1,1,10,0V16a1,1,0,1,0,2,0V14h5V32H6V14H9V12H4V32.09A1.91,1.91,0,0,0,5.91,34H30.09A1.91,1.91,0,0,0,32,32.09V12Z"/>',
  solid:
    '<path d="M13,9.22a5,5,0,1,1,10,0V12h2V9.22a7,7,0,1,0-14,0V12h2Z"/><path d="M25,12v3.1a1,1,0,1,1-2,0V12H13v3.1a1,1,0,0,1-2,0V12H4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12Z"/>',
};

export const shoppingBagIconName = 'shopping-bag';
export const shoppingBagIcon: IconShapeTuple = [shoppingBagIconName, renderIcon(icon)];
