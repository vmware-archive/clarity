/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm0,24A10,10,0,1,1,28,18,10,10,0,0,1,18,28Z"/><path d="M21.66,14.72,16.5,19.88l-2.79-2.79a1.61,1.61,0,0,0-2.27,2.27l5.06,5.05L23.92,17a1.6,1.6,0,0,0,0-2.26A1.62,1.62,0,0,0,21.66,14.72Z"/>',
  solid:
    '<path d="M18,4A14,14,0,1,0,32,18,14,14,0,0,0,18,4Zm8.27,12.51L16.9,25.94l-6.34-6.55a2,2,0,1,1,2.88-2.78l3.5,3.62,6.49-6.54a2,2,0,1,1,2.84,2.82Z"/>',
};

export const checkCircleMiniIconName = 'check-circle-mini';
export const checkCircleMiniIcon: IconShapeTuple = [checkCircleMiniIconName, renderIcon(icon)];
