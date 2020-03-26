/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24,33H12a1,1,0,0,1,0-2H24a1,1,0,0,1,0,2Z"/><rect x="17" y="9" width="2" height="22.5"/><path d="M28,7H8A1,1,0,0,1,8,5H28a1,1,0,0,1,0,2Z"/><path d="M26.93,24.79a7.23,7.23,0,0,1-5.81-2.89l-.6-.8,1.59-1.21.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,26.93,24.79Z"/><path d="M30.51,19.25a.8.8,0,0,1-.73-.48L26.93,12.2l-2.85,6.57a.8.8,0,0,1-1.47-.64L26.2,9.87a.83.83,0,0,1,1.47,0l3.58,8.26a.8.8,0,0,1-.73,1.12Z"/><path d="M9.68,24.79A7.23,7.23,0,0,1,3.88,21.9l-.6-.8L4.86,19.9l.6.8a5.28,5.28,0,0,0,8.42,0l.6-.8,1.59,1.21-.6.8A7.23,7.23,0,0,1,9.68,24.79Z"/><path d="M13.26,19.25a.8.8,0,0,1-.73-.48L9.68,12.2,6.84,18.77a.8.8,0,0,1-1.47-.64L8.95,9.87a.83.83,0,0,1,1.47,0L14,18.13a.8.8,0,0,1-.73,1.12Z"/>',
};

export const balanceIconName = 'balance';
export const balanceIcon: IconShapeTuple = [balanceIconName, renderIcon(icon)];
