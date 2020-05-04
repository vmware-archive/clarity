/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6,10.2H31.75a1.1,1.1,0,1,0,0-2.2H6a1.1,1.1,0,1,0,0,2.2Z"/><path d="M31.75,14H6a1.1,1.1,0,1,0,0,2.2H31.75a1.1,1.1,0,1,0,0-2.2Z"/><path d="M31.12,20H6.62a1.1,1.1,0,1,0,0,2.2h24.5a1.1,1.1,0,1,0,0-2.2Z"/><path d="M30.45,25.83H6.6a1.1,1.1,0,0,0,0,2.2H30.45a1.1,1.1,0,0,0,0-2.2Z"/>',
};

export const justifyTextIconName = 'justify-text';
export const justifyTextIcon: IconShapeTuple = [justifyTextIconName, renderIcon(icon)];
