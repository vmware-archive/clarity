/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.58,32.31a1,1,0,0,1-.94-.65L4,5.65A1,1,0,0,1,5.25,4.37l26,9.68a1,1,0,0,1-.05,1.89l-8.36,2.57,8.3,8.3a1,1,0,0,1,0,1.41l-3.26,3.26a1,1,0,0,1-.71.29h0a1,1,0,0,1-.71-.29l-8.33-8.33-2.6,8.45a1,1,0,0,1-.93.71Zm3.09-12a1,1,0,0,1,.71.29l8.79,8.79L29,27.51l-8.76-8.76a1,1,0,0,1,.41-1.66l7.13-2.2L6.6,7l7.89,21.2L16.71,21a1,1,0,0,1,.71-.68Z"/>',
  solid:
    '<path d="M29,12.36,3.88,3A1,1,0,0,0,2.59,4.28L12,29.44a1,1,0,0,0,1.89-.05l2.69-8.75,9.12,8.9a1,1,0,0,0,1.41,0l2.35-2.35a1,1,0,0,0,0-1.41l-9.09-8.86L29,14.25A1,1,0,0,0,29,12.36Z"/>',
};

export const cursorArrowIconName = 'cursor-arrow';
export const cursorArrowIcon: IconShapeTuple = [cursorArrowIconName, renderIcon(icon)];
