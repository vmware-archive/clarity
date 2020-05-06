/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm2,23.8V23l5.29-5.76A1.9,1.9,0,0,0,23.92,14H11.7a1.9,1.9,0,0,0-1.37,3.21L16,23.08V27.8a10,10,0,1,1,4,0Z"/>',
  solid:
    '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm8.76,10.68L20,20.8v5.08H16V20.8L9.24,14.68A1.56,1.56,0,0,1,10.52,12h15A1.56,1.56,0,0,1,26.76,14.68Z"/>',
};

export const filterGridCircleMiniIconName = 'filter-grid-circle-mini';
export const filterGridCircleMiniIcon: IconShapeTuple = [filterGridCircleMiniIconName, renderIcon(icon)];
