/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V26H24V15ZM24,30V27.6h8V30Z"/><path d="M20,22H4V6H28v5h2V6a2,2,0,0,0-2-2H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2H20Z"/><path d="M20,26H9a1,1,0,0,0,0,2H20Z"/>',
  solid:
    '<path d="M32,13H24a2,2,0,0,0-2,2V30a2,2,0,0,0,2,2h8a2,2,0,0,0,2-2V15A2,2,0,0,0,32,13Zm0,2V28H24V15Z"/><path d="M28,4H4A2,2,0,0,0,2,6V22a2,2,0,0,0,2,2h8v2H9.32A1.2,1.2,0,0,0,8,27a1.2,1.2,0,0,0,1.32,1H19.92v-.37H20V22H4V6H28v5h2V6A2,2,0,0,0,28,4Z"/>',
};

export const devicesIconName = 'devices';
export const devicesIcon: IconShapeTuple = [devicesIconName, renderIcon(icon)];
