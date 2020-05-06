/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12,19v8.8l4,2.05V18.27A2,2,0,0,0,15.55,17L8.18,8H27.74l-7.29,8.93A2,2,0,0,0,20,18.19V31.88l4,2v-15L33.51,7.26A2,2,0,0,0,32,4H4A2,2,0,0,0,2.41,7.27Z"/>',
  solid: '<path d="M32.13,4H3.92A2,2,0,0,0,2.53,7.44L14,18.54v9.52l8,4.08V18.58L33.52,7.44A2,2,0,0,0,32.13,4Z"/>',
};

export const filterGridMiniIconName = 'filter-grid-mini';
export const filterGridMiniIcon: IconShapeTuple = [filterGridMiniIconName, renderIcon(icon)];
