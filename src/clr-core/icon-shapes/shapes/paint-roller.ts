/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,10V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4v6a2,2,0,0,0,2,2H29A2,2,0,0,0,31,10ZM6,4H29v6H6Z"/><path d="M33,6H32v6.29L18.7,16.54a1,1,0,0,0-.7,1V19H16V33a2,2,0,0,0,2,2h2a2,2,0,0,0,2-2V19H20v-.73L33.3,14a1,1,0,0,0,.7-1V7A1,1,0,0,0,33,6ZM20,33H18V21h2Z"/>',
  solid:
    '<rect x="4" y="2" width="27" height="10" rx="1" ry="1"/><path d="M33,6H32v6.24L18.71,16.45a1,1,0,0,0-.71,1V19H16V34a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V19H20v-.82L33.29,14A1,1,0,0,0,34,13V7A1,1,0,0,0,33,6Z"/>',
};

export const paintRollerIconName = 'paint-roller';
export const paintRollerIcon: IconShapeTuple = [paintRollerIconName, renderIcon(icon)];
