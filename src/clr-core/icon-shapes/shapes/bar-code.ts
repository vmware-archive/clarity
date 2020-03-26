/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5,7A1,1,0,0,0,4,8V30a1,1,0,0,0,2,0V8A1,1,0,0,0,5,7Z"/><path d="M9,7A1,1,0,0,0,8,8V26a1,1,0,0,0,2,0V8A1,1,0,0,0,9,7Z"/><path d="M13,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,13,7Z"/><path d="M17,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,17,7Z"/><path d="M21,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,21,7Z"/><path d="M25,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,25,7Z"/><path d="M29,7a1,1,0,0,0-1,1V26a1,1,0,0,0,2,0V8A1,1,0,0,0,29,7Z"/><path d="M33,7a1,1,0,0,0-1,1V30a1,1,0,0,0,2,0V8A1,1,0,0,0,33,7Z"/>',
};

export const barCodeIconName = 'bar-code';
export const barCodeIcon: IconShapeTuple = [barCodeIconName, renderIcon(icon)];
