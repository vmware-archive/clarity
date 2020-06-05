/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.37,6.35a2,2,0,0,0-2.83,0L18,14.94,9.37,6.35A2,2,0,0,0,6.54,9.18l8.59,8.59L6.54,26.35a2,2,0,1,0,2.83,2.83L18,20.6l8.58,8.58a2,2,0,0,0,2.83-2.83l-8.59-8.58,8.59-8.59A2,2,0,0,0,29.37,6.35Z"/>',
};

export const timesMiniIconName = 'times-mini';
export const timesMiniIcon: IconShapeTuple = [timesMiniIconName, renderIcon(icon)];
