/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M30,32H6a2,2,0,0,1-2-2V6A2,2,0,0,1,6,4H30a2,2,0,0,1,2,2V30A2,2,0,0,1,30,32ZM6,6V30H30V6Z"/>',
  solid: '<rect x="3.96" y="4" width="27.99" height="28" rx="2" ry="2"/>',
};

export const stopIconName = 'stop';
export const stopIcon: IconShapeTuple = [stopIconName, renderIcon(icon)];
