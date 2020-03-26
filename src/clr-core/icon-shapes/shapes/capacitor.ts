/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,15,34.06Z"/><path d="M21,34.06a1,1,0,0,1-1-1V3.15a1,1,0,1,1,2,0V33.06A1,1,0,0,1,21,34.06Z"/><path d="M14.46,19H3a1,1,0,0,1,0-2H14.46a1,1,0,0,1,0,2Z"/><path d="M33,19H21.54a1,1,0,0,1,0-2H33a1,1,0,0,1,0,2Z"/>',
};

export const capacitorIconName = 'capacitor';
export const capacitorIcon: IconShapeTuple = [capacitorIconName, renderIcon(icon)];
