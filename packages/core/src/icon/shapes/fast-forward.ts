/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M17.77,31.92a2,2,0,0,1-.86-.2A1.81,1.81,0,0,1,16,29.93v-6.7L5.24,31.5a1.94,1.94,0,0,1-2.06.22,2,2,0,0,1-1.11-1.79v-24A2,2,0,0,1,3.18,4.12a1.93,1.93,0,0,1,2.06.22L16,12.61V5.91a1.81,1.81,0,0,1,.91-1.79A1.93,1.93,0,0,1,19,4.34l15.32,12a2,2,0,0,1,0,3.15L19,31.5A2,2,0,0,1,17.77,31.92Zm0-12.8V29.93l15.26-12-15.32-12,.06,10.81L4,5.91v24Z"/>',
  solid:
    '<path d="M17.71,32a2,2,0,0,1-.86-.2A1.77,1.77,0,0,1,16,30v-6.7L5.17,31.58a1.94,1.94,0,0,1-2.06.22A2,2,0,0,1,2,30V6A2,2,0,0,1,3.11,4.2a1.93,1.93,0,0,1,2.06.22L16,12.69V6a1.77,1.77,0,0,1,.85-1.79,1.93,1.93,0,0,1,2.06.22l15.32,12a2,2,0,0,1,0,3.15l-15.32,12A2,2,0,0,1,17.71,32Z"/>',
};

export const fastForwardIconName = 'fast-forward';
export const fastForwardIcon: IconShapeTuple = [fastForwardIconName, renderIcon(icon)];
