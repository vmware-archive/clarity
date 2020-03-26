/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,30H2a1,1,0,0,0,0,2H34a1,1,0,0,0,0-2Z"/><path d="M16,5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V28H16ZM14,26H8V6h6Z"/><path d="M30,13a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1V28H30ZM28,26H22V14h6Z"/>',
};

export const alignBottomIconName = 'align-bottom';
export const alignBottomIcon: IconShapeTuple = [alignBottomIconName, renderIcon(icon)];
