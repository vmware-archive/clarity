/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="11.49" cy="17.5" r="1.5"/><path d="M33.48,9.29a1,1,0,0,0-1,0c-3.37,2-5.91,5.81-6.9,7.45L24.85,18s-1,1.62-1,1.62c-1.76,2.49-5.1,6.36-8.79,6.36-4.65,0-8.75-6.15-9.84-7.94,1.09-1.79,5.18-7.94,9.84-7.94,3.54,0,6.77,3.58,8.58,6.07l.28-.48s.36-.51.93-1.25C22.72,11.64,19.18,8.06,15,8.06c-6.59,0-11.67,9.07-11.88,9.46L2.89,18l.27.48c.21.39,5.29,9.46,11.88,9.46,5.06,0,9.22-5.34,11-8C26,20,27.18,18,27.18,18h0l.07-.11a18.06,18.06,0,0,1,1.88-2.75s0,0,0,0a20.31,20.31,0,0,1,2.86-3V23.88a20.93,20.93,0,0,1-3.61-4l-.16.26h0l-1,1.59a18.74,18.74,0,0,0,5.21,4.95,1,1,0,0,0,.5.14,1.13,1.13,0,0,0,.5-.13,1,1,0,0,0,.5-.87V10.16A1,1,0,0,0,33.48,9.29Z"/>',
};

export const fishIconName = 'fish';
export const fishIcon: IconShapeTuple = [fishIconName, renderIcon(icon)];
