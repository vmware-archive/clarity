/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,29A11,11,0,1,1,29,18,11,11,0,0,1,18,29ZM18,9a9,9,0,1,0,9,9A9,9,0,0,0,18,9Z"/><path d="M18,23a5,5,0,1,1,5-5A5,5,0,0,1,18,23Zm0-8a3,3,0,1,0,3,3A3,3,0,0,0,18,15Z"/><path d="M18,9a1,1,0,0,1-1-1V2.8a1,1,0,0,1,2,0V8A1,1,0,0,1,18,9Z"/><path d="M18,34a1,1,0,0,1-1-1V28a1,1,0,0,1,2,0v5A1,1,0,0,1,18,34Z"/><path d="M8,19H3.17a1,1,0,0,1,0-2H8a1,1,0,0,1,0,2Z"/><path d="M33.1,19H28a1,1,0,0,1,0-2h5.1a1,1,0,0,1,0,2Z"/>',
};

export const crosshairsIconName = 'crosshairs';
export const crosshairsIcon: IconShapeTuple = [crosshairsIconName, renderIcon(icon)];
