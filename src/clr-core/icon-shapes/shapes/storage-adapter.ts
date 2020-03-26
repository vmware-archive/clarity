/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.06,30a1,1,0,0,1-1-1V8h-2a1,1,0,0,1,0-2h4V29A1,1,0,0,1,6.06,30Z"/><path d="M30.06,27h-25V9h25a3,3,0,0,1,3,3V24A3,3,0,0,1,30.06,27Zm-23-2h23a1,1,0,0,0,1-1V12a1,1,0,0,0-1-1h-23Z"/><rect x="22.06" y="20" width="6" height="2"/><rect x="22.06" y="14" width="6" height="2"/><path d="M19.06,22h-8V20h7V14h2v7A1,1,0,0,1,19.06,22Z"/>',
};

export const storageAdapterIconName = 'storage-adapter';
export const storageAdapterIcon: IconShapeTuple = [storageAdapterIconName, renderIcon(icon)];
