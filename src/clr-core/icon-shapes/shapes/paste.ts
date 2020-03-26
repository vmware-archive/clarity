/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,12H26v2h4v2h2V14A2,2,0,0,0,30,12Z"/><rect x="30" y="18" width="2" height="6"/><path d="M30,30H28v2h2a2,2,0,0,0,2-2V26H30Z"/><path d="M24,22V6a2,2,0,0,0-2-2H6A2,2,0,0,0,4,6V22a2,2,0,0,0,2,2H22A2,2,0,0,0,24,22ZM6,6H22V22H6Z"/><rect x="20" y="30" width="6" height="2"/><path d="M14,26H12v4a2,2,0,0,0,2,2h4V30H14Z"/>',
  solid:
    '<path d="M30,12H26v2h4v2h2V14A2,2,0,0,0,30,12Z"/><rect x="30" y="18" width="2" height="6"/><path d="M30,30H28v2h2a2,2,0,0,0,2-2V26H30Z"/><rect x="4" y="4" width="20" height="20" rx="2" ry="2"/><rect x="20" y="30" width="6" height="2"/><path d="M14,26H12v4a2,2,0,0,0,2,2h4V30H14Z"/>',
};

export const pasteIconName = 'paste';
export const pasteIcon: IconShapeTuple = [pasteIconName, renderIcon(icon)];
