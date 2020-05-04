/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,34H13a1,1,0,0,1-1-1V11a1,1,0,0,1,1-1H31a1,1,0,0,1,1,1V33A1,1,0,0,1,31,34ZM14,32H30V12H14Z"/><rect x="16" y="16" width="12" height="2"/><rect x="16" y="20" width="12" height="2"/><rect x="16" y="24" width="12" height="2"/><path d="M6,24V4H24V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V25a1,1,0,0,0,1,1H6Z"/><path d="M10,28V8H28V7a1,1,0,0,0-1-1H9A1,1,0,0,0,8,7V29a1,1,0,0,0,1,1h1Z"/>',
  solid:
    '<path d="M31,10H13a1,1,0,0,0-1,1V33a1,1,0,0,0,1,1H31a1,1,0,0,0,1-1V11A1,1,0,0,0,31,10ZM28,26H16V24H28Zm0-4H16V20H28Zm0-4H16V16H28Z"/><path d="M6,24V4H24V3a1,1,0,0,0-1-1H5A1,1,0,0,0,4,3V25a1,1,0,0,0,1,1H6Z"/><path d="M10,28V8H28V7a1,1,0,0,0-1-1H9A1,1,0,0,0,8,7V29a1,1,0,0,0,1,1h1Z"/>',
};

export const fileGroupIconName = 'file-group';
export const fileGroupIcon: IconShapeTuple = [fileGroupIconName, renderIcon(icon)];
