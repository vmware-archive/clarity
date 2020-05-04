/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.05,22.06h-12a1,1,0,0,0,0,2h12a1,1,0,0,0,0-2Z"/><path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/><circle cx="25.16" cy="14.28" r="1.8"/><circle cx="11.16" cy="14.28" r="1.8"/>',
  solid:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm7.05,21.06a1,1,0,0,1-1,1h-12a1,1,0,0,1,0-2h12A1,1,0,0,1,25.05,23.06ZM27,14.28a1.8,1.8,0,1,1-1.8-1.8A1.8,1.8,0,0,1,27,14.28Zm-15.8,1.8a1.8,1.8,0,1,1,1.8-1.8A1.8,1.8,0,0,1,11.16,16.08Z"/>',
};

export const neutralFaceIconName = 'neutral-face';
export const neutralFaceIcon: IconShapeTuple = [neutralFaceIconName, renderIcon(icon)];
