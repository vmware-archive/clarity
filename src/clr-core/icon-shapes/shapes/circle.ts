/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34ZM18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Z"/>',
  solid: '<path d="M18,34A16,16,0,1,1,34,18,16,16,0,0,1,18,34Z"/>',
};

export const circleIconName = 'circle';
export const circleIcon: IconShapeTuple = [circleIconName, renderIcon(icon)];
