/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM28.29,24.61a1,1,0,0,0-.32.73l0,5.34-4.38-2.79a1,1,0,0,0-.83-.11A16,16,0,0,1,18,28.5c-7.72,0-14-5.38-14-12s6.28-12,14-12,14,5.38,14,12A11.08,11.08,0,0,1,28.29,24.61Z"/><path d="M18,20.63a1,1,0,0,0,1-1V8.48a1,1,0,1,0-2,0V19.61A1,1,0,0,0,18,20.63Z"/><circle cx="18" cy="24.04" r="1.33"/>',
  solid:
    '<path d="M18,2.5c-8.82,0-16,6.28-16,14s7.18,14,16,14a18,18,0,0,0,4.88-.68l5.53,3.52a1,1,0,0,0,1.54-.84l0-6.73a13,13,0,0,0,4-9.27C34,8.78,26.82,2.5,18,2.5ZM16.93,9.13a1.41,1.41,0,1,1,2.81,0V18.9a1.41,1.41,0,1,1-2.81,0Zm1.41,17.35a1.87,1.87,0,1,1,1.87-1.87A1.87,1.87,0,0,1,18.34,26.47Z"/>',
};

export const bubbleExclamationIconName = 'bubble-exclamation';
export const bubbleExclamationIcon: IconShapeTuple = [bubbleExclamationIconName, renderIcon(icon)];
