/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33,11H3a1,1,0,0,0,0,2H33a1,1,0,0,0,0-2Z"/><path d="M28,17H8a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M23,23H13a1,1,0,0,0,0,2H23a1,1,0,0,0,0-2Z"/>',
};

export const filter2IconName = 'filter-2';
export const filter2Icon: IconShapeTuple = [filter2IconName, renderIcon(icon)];
