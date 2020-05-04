/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.08,34h-14A1.08,1.08,0,0,1,6,33V12a1.08,1.08,0,0,1,1.08-1.08h14A1.08,1.08,0,0,1,22.16,12V33A1.08,1.08,0,0,1,21.08,34ZM8.16,31.88H20V13H8.16Z"/><rect x="10.08" y="14.96" width="8" height="2"/><path d="M26.1,27.81h-2V9h-12V7h13a1,1,0,0,1,1,1Z"/><path d="M30.08,23h-2V5h-11V3h12a1,1,0,0,1,1,1Z"/><rect x="13.08" y="27.88" width="2" height="2.16"/>',
  solid:
    '<path d="M15.08,31 L1.08,31 C0.513427197,31.0015564 0.0419663765,30.5650186 0,30 L0,9 C0,8.40353247 0.48353247,7.92 1.08,7.92 L15.08,7.92 C15.6764675,7.92 16.16,8.40353247 16.16,9 L16.16,30 C16.1180336,30.5650186 15.6465728,31.0015564 15.08,31 Z M4.08,11.96 L4.08,13.96 L12.08,13.96 L12.08,11.96 L4.08,11.96 Z M7.08,24.88 L7.08,27.04 L9.08,27.04 L9.08,24.88 L7.08,24.88 Z"/><path d="M20.1,24.81 L18.1,24.81 L18.1,6 L6.1,6 L6.1,4 L19.1,4 C19.6522847,4 20.1,4.44771525 20.1,5 L20.1,24.81 Z"/><path d="M24.08,20 L22.08,20 L22.08,2 L11.08,2 L11.08,0 L23.08,0 C23.6322847,0 24.08,0.44771525 24.08,1 L24.08,20 Z"/>',
};

export const hostGroupIconName = 'host-group';
export const hostGroupIcon: IconShapeTuple = [hostGroupIconName, renderIcon(icon)];
