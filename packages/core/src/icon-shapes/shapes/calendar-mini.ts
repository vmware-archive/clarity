/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29,8H27.6V4a1.6,1.6,0,0,0-3.2,0V8H11.6V4A1.6,1.6,0,0,0,8.4,4V8H7a3,3,0,0,0-3,3V29a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V11A3,3,0,0,0,29,8Zm-1,4v4.4H8V12ZM8,28V19.6H28V28Z"/>',
  solid:
    '<path d="M29,8H27.6V4a1.6,1.6,0,0,0-3.2,0V8H11.6V4A1.6,1.6,0,0,0,8.4,4V8H7a3,3,0,0,0-3,3V29a3,3,0,0,0,3,3H29a3,3,0,0,0,3-3V11A3,3,0,0,0,29,8ZM8,28V16H28V28Z"/>',
};

export const calendarMiniIconName = 'calendar-mini';
export const calendarMiniIcon: IconShapeTuple = [calendarMiniIconName, renderIcon(icon)];
