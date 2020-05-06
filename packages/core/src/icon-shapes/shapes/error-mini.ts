/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm0,24A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/><rect x="16" y="12" width="4" height="6"/><rect x="16" y="20.8" width="4" height="3.2"/>',
  solid: '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm2,20H16V20h4Zm0-8H16V8h4Z"/>',
};

export const errorMiniIconName = 'error-mini';
export const errorMiniIcon: IconShapeTuple = [errorMiniIconName, renderIcon(icon)];
