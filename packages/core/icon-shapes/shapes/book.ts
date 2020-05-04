/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="10" y="5.2" width="18" height="1.55"/><path d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,0,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8ZM28,32H9.86A2,2,0,0,1,8,30V9.55A3.63,3.63,0,0,0,9.86,10H28Z"/>',
  solid:
    '<rect x="10" y="5.2" width="18" height="1.55"/><path d="M29,8H9.86A1.89,1.89,0,0,1,8,6,2,2,0,0,1,9.86,4H29a1,1,0,1,0,0-2H9.86A4,4,0,0,0,6,6a4.14,4.14,0,0,0,0,.49,1,1,0,0,0,0,.24V30a4,4,0,0,0,3.86,4H29a1,1,0,0,0,1-1V9.25s0-.06,0-.09,0-.06,0-.09A1.07,1.07,0,0,0,29,8Z"/>',
};

export const bookIconName = 'book';
export const bookIcon: IconShapeTuple = [bookIconName, renderIcon(icon)];
