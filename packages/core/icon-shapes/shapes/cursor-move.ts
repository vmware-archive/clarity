/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.85,12.89a1,1,0,0,0-1.42,0,1,1,0,0,0,0,1.41L30.14,17H19V5.86l2.69,2.7a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.42L18,2,12.89,7.15a1,1,0,0,0-.29.71,1,1,0,0,0,1.71.7L17,5.86V17H5.86l2.7-2.69a1,1,0,0,0,0-1.41,1,1,0,0,0-1.42,0L2,18l5.14,5.11a1,1,0,0,0,.71.29,1,1,0,0,0,.7-1.71L5.86,19H17V30.14l-2.69-2.7a1,1,0,0,0-1.71.7,1,1,0,0,0,.29.71L18,34l5.11-5.14a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L19,30.14V19H30.14l-2.7,2.69a1,1,0,0,0,.7,1.71,1,1,0,0,0,.71-.29L34,18Z"/>',
};

export const cursorMoveIconName = 'cursor-move';
export const cursorMoveIcon: IconShapeTuple = [cursorMoveIconName, renderIcon(icon)];
