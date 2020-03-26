/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12,12.37A4,4,0,0,0,9,8.48V5A1,1,0,1,0,7,5V8.48a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V16.26A4,4,0,0,0,12,12.37Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,8,14.4Z"/><path d="M32,15.83a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0v6.94a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V19.72A4,4,0,0,0,32,15.83Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,28,17.87Z"/><path d="M22,24.5a4,4,0,0,0-3-3.89V5a1,1,0,1,0-2,0V20.61a4,4,0,0,0,0,7.78V31a1,1,0,1,0,2,0V28.39A4,4,0,0,0,22,24.5Zm-4,2a2,2,0,1,1,2-2A2,2,0,0,1,18,26.53Z"/>',

  solid:
    '<path d="M9,9.29V5A1,1,0,1,0,7,5V9.3a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V15.43A3.22,3.22,0,0,0,9,9.29Z"/><path d="M19,21.45V5a1,1,0,1,0-2,0V21.47a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V27.6a3.22,3.22,0,0,0,0-6.14Z"/><path d="M29,12.75V5a1,1,0,1,0-2,0v7.76a3.22,3.22,0,0,0,0,6.11V31a1,1,0,1,0,2,0V18.89a3.22,3.22,0,0,0,0-6.14Z"/>',
};

export const sliderIconName = 'slider';
export const sliderIcon: IconShapeTuple = [sliderIconName, renderIcon(icon)];
