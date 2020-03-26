/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.54,13H7.46a1,1,0,0,1,0-2H28.54a1,1,0,0,1,0,2Z"/><path d="M21.17,19H7.46a1,1,0,0,1,0-2H21.17a1,1,0,0,1,0,2Z"/><path d="M13.74,25H7.46a1,1,0,0,1,0-2h6.28a1,1,0,0,1,0,2Z"/>',
};

export const sortByIconName = 'sort-by';
export const sortByIcon: IconShapeTuple = [sortByIconName, renderIcon(icon)];
