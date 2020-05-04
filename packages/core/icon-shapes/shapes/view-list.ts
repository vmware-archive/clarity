/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="2" y="8" width="2" height="2"/><path d="M7,10H31a1,1,0,0,0,0-2H7a1,1,0,0,0,0,2Z"/><rect x="2" y="14" width="2" height="2"/><path d="M31,14H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><rect x="2" y="20" width="2" height="2"/><path d="M31,20H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><rect x="2" y="26" width="2" height="2"/><path d="M31,26H7a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/>',
};

export const viewListIconName = 'view-list';
export const viewListIcon: IconShapeTuple = [viewListIconName, renderIcon(icon)];
