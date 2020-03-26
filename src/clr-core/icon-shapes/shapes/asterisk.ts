/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28.89,20.91l-5-2.91,4.87-2.86a3.11,3.11,0,0,0,1.14-1.08,3,3,0,0,0-4.09-4.15L21,12.76V7a3,3,0,0,0-6,0v5.76L10.15,9.91a3,3,0,1,0-3,5.18l5,2.91L7.2,20.86a3.11,3.11,0,0,0-1.14,1.08,3,3,0,0,0,4.09,4.14L15,23.24V28.9a3,3,0,0,0,2,2.94A3,3,0,0,0,21,29V23.24l4.85,2.85a3,3,0,1,0,3-5.18ZM28.24,24a1,1,0,0,1-1.37.36L19,19.75V29a1,1,0,0,1-2,0V19.75L9.13,24.36a1,1,0,0,1-1-1.72L16,18l-7.9-4.64a1,1,0,1,1,1-1.72L17,16.25V7a1,1,0,0,1,2,0v9.25l7.87-4.62a1,1,0,0,1,1,1.72L20,18l7.9,4.64A1,1,0,0,1,28.24,24Z"/>',
  solid:
    '<path d="M28.89,20.91l-5-2.91,4.87-2.86a3.11,3.11,0,0,0,1.14-1.08,3,3,0,0,0-4.09-4.15L21,12.76V7a3,3,0,0,0-6,0v5.76L10.15,9.91a3,3,0,1,0-3,5.18l5,2.91L7.2,20.86a3.11,3.11,0,0,0-1.14,1.08,3,3,0,0,0,4.09,4.14L15,23.24V28.9a3,3,0,0,0,2,2.94A3,3,0,0,0,21,29V23.24l4.85,2.85a3,3,0,1,0,3-5.18Z"/>',
};

export const asteriskIconName = 'asterisk';
export const asteriskIcon: IconShapeTuple = [asteriskIconName, renderIcon(icon)];
