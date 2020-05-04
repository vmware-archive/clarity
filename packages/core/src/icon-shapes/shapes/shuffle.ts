/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M21.61,11h8.62l-3.3,3.3a1,1,0,1,0,1.41,1.42L34,10.08l-.71-.71h0L28.34,4.43a1,1,0,0,0-1.41,1.42L30.11,9H21a1,1,0,0,0-.86.5L17.5,14.09l1.16,2Z"/><path d="M11.07,25.07H3a1,1,0,0,0,0,2h8.65a1,1,0,0,0,.86-.5L15.18,22,14,20Z"/><path d="M28.34,20.17a1,1,0,0,0-1.41,1.42l3.5,3.5H21.61L12.51,9.53a1,1,0,0,0-.86-.5H3a1,1,0,1,0,0,2h8.07l9.1,15.55a1,1,0,0,0,.86.5H29.9l-3,3a1,1,0,0,0,1.41,1.42l4.95-4.94h0l.71-.71Z"/>',
};

export const shuffleIconName = 'shuffle';
export const shuffleIcon: IconShapeTuple = [shuffleIconName, renderIcon(icon)];
