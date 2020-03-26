/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,22H4V8H32Z"/><path d="M9,14H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/><path d="M9,18H27a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/><path d="M9,22H19a1,1,0,0,0,0-2H9a1,1,0,0,0,0,2Z"/>',
  solid:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM19,22H9a1,1,0,0,1,0-2H19a1,1,0,0,1,0,2Zm8-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Zm0-4H9a1,1,0,0,1,0-2H27a1,1,0,0,1,0,2Z"/>',
};

export const detailsIconName = 'details';
export const detailsIcon: IconShapeTuple = [detailsIconName, renderIcon(icon)];
