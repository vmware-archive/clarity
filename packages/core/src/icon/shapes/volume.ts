/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M25.88,32H12a4,4,0,0,1-4-4V11.46L2.31,5.77a1,1,0,0,1-.22-1.09A1,1,0,0,1,3,4.06H28.86a1,1,0,0,1,1,1V28A4,4,0,0,1,25.88,32ZM5.43,6l4.28,4.34a.75.75,0,0,1,.21.63v17A2.13,2.13,0,0,0,12,30H25.88A2.1,2.1,0,0,0,28,28V6Z"/><path d="M33,16a1,1,0,0,1-1-1V6H28.86a.92.92,0,0,1-1-.9,1,1,0,0,1,1-1H33a1,1,0,0,1,1,1V15A1,1,0,0,1,33,16Z"/><path d="M24,11H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z"/><path d="M24,15H21a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z"/><path d="M24,19H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z"/><path d="M24,27H18a1,1,0,1,1,0-2H24a1,1,0,1,1,0,2Z"/><path d="M24,23H21A1,1,0,1,1,21,21H24A1,1,0,1,1,24,23Z"/>',
};

export const volumeIconName = 'volume';
export const volumeIcon: IconShapeTuple = [volumeIconName, renderIcon(icon)];
