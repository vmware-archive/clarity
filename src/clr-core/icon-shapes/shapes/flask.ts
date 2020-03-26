/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.43,27.28,23,14.84V4h1a1,1,0,0,0,0-2H12a1,1,0,0,0,0,2h1V14.84L4.51,27.36A4.29,4.29,0,0,0,5,32.8,4.38,4.38,0,0,0,8.15,34H28a4.24,4.24,0,0,0,3.42-6.72ZM29.85,31a2.62,2.62,0,0,1-2,1H8a2.2,2.2,0,0,1-2.06-1.41,2.68,2.68,0,0,1,.29-2.17l3-4.44,14,0-1.31-2H10.57L15,15.46V4h6V15.46l8.84,13.05A2.23,2.23,0,0,1,29.85,31Z"/>',
  solid:
    '<path d="M31.49,27.4,23,14.94V4h1a1,1,0,0,0,0-2H12.08a1,1,0,0,0,0,2H13V14.94L4.58,27.31a4.31,4.31,0,0,0-.78,3A4.23,4.23,0,0,0,8,34H27.86A4.36,4.36,0,0,0,31,32.8,4.23,4.23,0,0,0,31.49,27.4ZM15,15.49V4h6V15.49L26.15,23H9.85Z"/>',
};

export const flaskIconName = 'flask';
export const flaskIcon: IconShapeTuple = [flaskIconName, renderIcon(icon)];
