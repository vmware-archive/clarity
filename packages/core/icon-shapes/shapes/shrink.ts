/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,15H22.41l9.25-9.25a1,1,0,0,0-1.41-1.41L21,13.59V4a1,1,0,0,0-2,0V17H32a1,1,0,0,0,0-2Z"/><path d="M4,19a1,1,0,0,0,0,2h9.59L4.33,30.25a1,1,0,1,0,1.41,1.41L15,22.41V32a1,1,0,0,0,2,0V19Z"/>',
};

export const shrinkIconName = 'shrink';
export const shrinkIcon: IconShapeTuple = [shrinkIconName, renderIcon(icon)];
