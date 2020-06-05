/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.43,17.54a4.67,4.67,0,0,0,2.8-4.37v-.06a4.43,4.43,0,0,0-1.31-3.25,7.09,7.09,0,0,0-5.13-1.73h-7A1.71,1.71,0,0,0,10,9.86V26a1.72,1.72,0,0,0,1.74,1.74h7.33c4.37,0,7.25-1.88,7.25-5.38V22.3C26.32,19.64,24.73,18.32,22.43,17.54ZM13.68,11.4h4.54c2,0,3.15.89,3.15,2.33v.06c0,1.68-1.36,2.49-3.38,2.49H13.68ZM22.37,22c0,1.59-1.31,2.43-3.46,2.43H13.68V19.62h5c2.49,0,3.69.88,3.69,2.37Z"/>',
};

export const boldIconName = 'bold';
export const boldIcon: IconShapeTuple = [boldIconName, renderIcon(icon)];
