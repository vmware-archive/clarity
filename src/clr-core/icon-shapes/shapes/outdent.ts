/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.06,9h-26a1,1,0,1,1,0-2h26a1,1,0,1,1,0,2Z"/><path d="M31.06,14h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,19h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,24h-17a1,1,0,0,1,0-2h17a1,1,0,1,1,0,2Z"/><path d="M31.06,29h-26a1,1,0,0,1,0-2h26a1,1,0,1,1,0,2Z"/><path d="M9.56,22.54a1,1,0,0,1-.7-.3L4.61,18l4.25-4.24a1,1,0,0,1,1.41,1.41L7.44,18l2.83,2.83a1,1,0,0,1-.71,1.71Z"/>',
};

export const outdentIconName = 'outdent';
export const outdentIcon: IconShapeTuple = [outdentIconName, renderIcon(icon)];
