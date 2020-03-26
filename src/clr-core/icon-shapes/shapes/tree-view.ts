/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M15,32H11a1,1,0,0,1-1-1V27a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v4A1,1,0,0,1,15,32Zm-3-2h2V28H12Z"/><path d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8h6.36a.8.8,0,0,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16ZM4,8H6v2H4ZM14,20H12V18h2Z"/><path d="M34,9a1,1,0,0,0-1-1H10v2H33A1,1,0,0,0,34,9Z"/><path d="M33,18H18v2H33a1,1,0,0,0,0-2Z"/><path d="M33,28H18v2H33a1,1,0,0,0,0-2Z"/>',
  solid:
    '<rect x="10" y="26" width="6" height="6" rx="1" ry="1"/><path d="M15,16H11a1,1,0,0,0-1,1v1.2H5.8V12H7a1,1,0,0,0,1-1V7A1,1,0,0,0,7,6H3A1,1,0,0,0,2,7v4a1,1,0,0,0,1,1H4.2V29.8H11a.8.8,0,1,0,0-1.6H5.8V19.8H10V21a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V17A1,1,0,0,0,15,16Z"/><path d="M33,8H10v2H33a1,1,0,0,0,0-2Z"/><path d="M33,18H18v2H33a1,1,0,0,0,0-2Z"/><path d="M33,28H18v2H33a1,1,0,0,0,0-2Z"/>',
};

export const treeViewIconName = 'tree-view';
export const treeViewIcon: IconShapeTuple = [treeViewIconName, renderIcon(icon)];
