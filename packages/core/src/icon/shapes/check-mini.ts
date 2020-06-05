/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline: '<path d="M13.13,27.94,4.61,17.43a2,2,0,1,1,3.11-2.52l5.71,7L28.49,6.68a2,2,0,0,1,2.85,2.81Z"/>',
};

export const checkMiniIconName = 'check-mini';
export const checkMiniIcon: IconShapeTuple = [checkMiniIconName, renderIcon(icon)];
