/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28,4H12a2,2,0,0,0-2,2H28V30H12V20.2H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"/><path d="M15.12,18.46a1,1,0,1,0,1.41,1.41l5.79-5.79L16.54,8.29a1,1,0,0,0-1.41,1.41L18.5,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1H18.5Z"/>',
  solid:
    '<path d="M28,4H12a2,2,0,0,0-2,2v7h8.5L15.12,9.71a1,1,0,0,1,1.41-1.41l5.79,5.79-5.79,5.79a1,1,0,0,1-1.41-1.41L18.5,15H10V30a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V6A2,2,0,0,0,28,4Z"/><path d="M10,13H4a1,1,0,0,0-1,1,1,1,0,0,0,1,1h6Z"/>',
};

export const loginIconName = 'login';
export const loginIcon: IconShapeTuple = [loginIconName, renderIcon(icon)];
