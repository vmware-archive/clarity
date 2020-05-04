/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18.05,33.61a1,1,0,0,1-1-1V3.37a1,1,0,1,1,1.95,0V32.63A1,1,0,0,1,18.05,33.61Z"/><path d="M18.06,10.07,14.52,6.54a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0l2.13,2.12,2.12-2.12a1,1,0,0,1,1.41,0,1,1,0,0,1,0,1.41Z"/><path d="M20.85,31.17a1,1,0,0,1-.7-.29L18,28.76,15.9,30.88a1,1,0,0,1-1.41,0,1,1,0,0,1,0-1.42L18,25.93l3.54,3.53a1,1,0,0,1,0,1.42A1,1,0,0,1,20.85,31.17Z"/><path d="M30.92,26.5a1,1,0,0,1-.5-.13l-26-15A1,1,0,0,1,4.07,10a1,1,0,0,1,1.37-.36l26,15a1,1,0,0,1-.5,1.87Z"/><path d="M6,15.37a1,1,0,0,1-.26-2l2.9-.78L7.84,9.73a1,1,0,1,1,1.93-.52L11.07,14,6.24,15.33A.82.82,0,0,1,6,15.37Z"/><path d="M27.05,27.54a1,1,0,0,1-1-.75L24.8,22l4.82-1.3a1,1,0,1,1,.52,1.93l-2.9.78.78,2.9a1,1,0,0,1-.71,1.22A.75.75,0,0,1,27.05,27.54Z"/><path d="M4.94,26.5a1,1,0,0,1-.5-1.87l26-15a1,1,0,0,1,1.36.36,1,1,0,0,1-.36,1.37l-26,15A1,1,0,0,1,4.94,26.5Z"/><path d="M8.81,27.54a.75.75,0,0,1-.26,0,1,1,0,0,1-.71-1.22l.78-2.9-2.9-.78A1,1,0,0,1,5,21.38a1,1,0,0,1,1.23-.71L11.07,22l-1.3,4.82A1,1,0,0,1,8.81,27.54Z"/><path d="M29.88,15.37a.82.82,0,0,1-.26,0L24.8,14l1.29-4.83A1,1,0,1,1,28,9.73l-.78,2.89,2.9.78a1,1,0,0,1-.26,2Z"/>',
};

export const snowflakeIconName = 'snowflake';
export const snowflakeIcon: IconShapeTuple = [snowflakeIconName, renderIcon(icon)];
