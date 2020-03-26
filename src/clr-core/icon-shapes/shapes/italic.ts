/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.42,8H17.1a1.1,1.1,0,1,0,0,2.19h2.13L13.11,25.55H10.47a1.1,1.1,0,1,0,0,2.19H17.8a1.1,1.1,0,1,0,0-2.19H15.51l6.13-15.36h2.78a1.1,1.1,0,1,0,0-2.19Z"/>',
};

export const italicIconName = 'italic';
export const italicIcon: IconShapeTuple = [italicIconName, renderIcon(icon)];
