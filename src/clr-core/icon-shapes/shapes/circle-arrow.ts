/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/><path d="M18.08,8.26l-7.61,7.61a1,1,0,1,0,1.41,1.41L17,12.18v15a1,1,0,0,0,2,0V12l5.28,5.28a1,1,0,1,0,1.41-1.41Z"/>',

  solid:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8,15.57a1.43,1.43,0,0,1-2,0L19.4,13V27.14a1.4,1.4,0,0,1-2.8,0v-14l-4.43,4.43a1.4,1.4,0,0,1-2-2L18.08,7.7,26,15.59A1.4,1.4,0,0,1,26,17.57Z"/>',
};

export const circleArrowIconName = 'circle-arrow';
export const circleArrowIcon: IconShapeTuple = [circleArrowIconName, renderIcon(icon)];
