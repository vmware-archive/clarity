/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29,8H27.6V4a1.6,1.6,0,0,0-3.2,0V8H11.6V4A1.6,1.6,0,0,0,8.4,4V8H7a3,3,0,0,0-3,3V29a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V11A3,3,0,0,0,29,8ZM28,28H8V12H28Z"/><path d="M16.8,25.66l7.71-7.8a1.6,1.6,0,1,0-2.27-2.25l-5.45,5.51L14,18.33a1.6,1.6,0,0,0-2.26,2.27Z"/>',
  solid:
    '<path d="M30,8H27.6V4a1.6,1.6,0,0,0-3.2,0V8H11.6V4A1.6,1.6,0,0,0,8.4,4V8H6a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V10A2,2,0,0,0,30,8Zm-4.57,9.43L16.36,26.6l-6-6a2,2,0,1,1,2.82-2.83l3.14,3.13,6.23-6.3a2,2,0,0,1,2.85,2.81Z"/>',
};

export const eventMiniIconName = 'event-mini';
export const eventMiniIcon: IconShapeTuple = [eventMiniIconName, renderIcon(icon)];
