/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.82,15.8a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.41L27.2,21H9V3.78a1,1,0,1,0-2,0V21a2,2,0,0,0,2,2H27.15l-3.74,3.75a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29L31,22Z"/>',
};

export const childArrowIconName = 'child-arrow';
export const childArrowIcon: IconShapeTuple = [childArrowIconName, renderIcon(icon)];
