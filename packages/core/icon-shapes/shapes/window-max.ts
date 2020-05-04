/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.89,9h-20a2,2,0,0,0-2,2V25a2,2,0,0,0,2,2h20a2,2,0,0,0,2-2V11A2,2,0,0,0,27.89,9Zm-20,16V11h20V25Z"/>',
};

export const windowMaxIconName = 'window-max';
export const windowMaxIcon: IconShapeTuple = [windowMaxIconName, renderIcon(icon)];
