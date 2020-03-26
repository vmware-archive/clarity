/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,21H13a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M12,16a1,1,0,0,0,1,1H31a1,1,0,0,0,0-2H13A1,1,0,0,0,12,16Z"/><path d="M27,27H13a1,1,0,0,0,0,2H27a1,1,0,0,0,0-2Z"/><path d="M15.89,9a1,1,0,0,0-1-1H10V3.21a1,1,0,0,0-2,0V8H2.89a1,1,0,0,0,0,2H8v5.21a1,1,0,0,0,2,0V10h4.89A1,1,0,0,0,15.89,9Z"/>',
};

export const addTextIconName = 'add-text';
export const addTextIcon: IconShapeTuple = [addTextIconName, renderIcon(icon)];
