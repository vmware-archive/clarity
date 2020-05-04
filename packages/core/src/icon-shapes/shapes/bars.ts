/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,29H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/><path d="M32,19H4a1,1,0,0,1,0-2H32a1,1,0,0,1,0,2Z"/><path d="M32,9H4A1,1,0,0,1,4,7H32a1,1,0,0,1,0,2Z"/>',
};

export const barsIconName = 'bars';
export const barsIcon: IconShapeTuple = [barsIconName, renderIcon(icon)];
