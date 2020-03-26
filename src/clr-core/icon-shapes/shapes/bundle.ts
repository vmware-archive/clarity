/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91ZM5,12.13,16,17.4V31.46L5,26.2ZM18,31.45V17.36l13-6.29v14.1Z"/>',
  solid:
    '<path d="M32.43,8.35l-13-6.21a1,1,0,0,0-.87,0l-15,7.24a1,1,0,0,0-.57.9V26.83a1,1,0,0,0,.6.92l13,6.19a1,1,0,0,0,.87,0l15-7.24a1,1,0,0,0,.57-.9V9.25A1,1,0,0,0,32.43,8.35ZM19,4.15,29.93,9.37l-5.05,2.44L14.21,6.46ZM17,15.64,6,10.41l5.9-2.85L22.6,12.91Zm1,15.8V17.36l13-6.29v14.1Z"/>',
};

export const bundleIconName = 'bundle';
export const bundleIcon: IconShapeTuple = [bundleIconName, renderIcon(icon)];
