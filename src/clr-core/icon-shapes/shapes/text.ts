/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12.19,8.84a1.45,1.45,0,0,0-1.4-1h-.12a1.46,1.46,0,0,0-1.42,1L1.14,26.56a1.29,1.29,0,0,0-.14.59,1,1,0,0,0,1,1,1.12,1.12,0,0,0,1.08-.77l2.08-4.65h11l2.08,4.59a1.24,1.24,0,0,0,1.12.83,1.08,1.08,0,0,0,1.08-1.08,1.64,1.64,0,0,0-.14-.57ZM6.08,20.71l4.59-10.22,4.6,10.22Z"/><path d="M32.24,14.78A6.35,6.35,0,0,0,27.6,13.2a11.36,11.36,0,0,0-4.7,1,1,1,0,0,0-.58.89,1,1,0,0,0,.94.92,1.23,1.23,0,0,0,.39-.08,8.87,8.87,0,0,1,3.72-.81c2.7,0,4.28,1.33,4.28,3.92v.5a15.29,15.29,0,0,0-4.42-.61c-3.64,0-6.14,1.61-6.14,4.64v.05c0,2.95,2.7,4.48,5.37,4.48a6.29,6.29,0,0,0,5.19-2.48V26.9a1,1,0,0,0,1,1,1,1,0,0,0,1-1.06V19A5.71,5.71,0,0,0,32.24,14.78Zm-.56,7.7c0,2.28-2.17,3.89-4.81,3.89-1.94,0-3.61-1.06-3.61-2.86v-.06c0-1.8,1.5-3,4.2-3a15.2,15.2,0,0,1,4.22.61Z"/>',
};

export const textIconName = 'text';
export const textIcon: IconShapeTuple = [textIconName, renderIcon(icon)];
