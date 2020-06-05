/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z"/><path d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z"/><path d="M5.56,22.54a1,1,0,0,1-.7-1.71L7.68,18,4.86,15.17a1,1,0,0,1,0-1.41,1,1,0,0,1,1.41,0L10.51,18,6.27,22.24A1,1,0,0,1,5.56,22.54Z"/>',
};

export const indentIconName = 'indent';
export const indentIcon: IconShapeTuple = [indentIconName, renderIcon(icon)];
