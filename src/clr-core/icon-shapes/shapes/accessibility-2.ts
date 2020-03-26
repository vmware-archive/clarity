/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.06,11h-24a1,1,0,1,0,0,2H14v9.65s0,0,0,0l-3.75,10a1,1,0,0,0,.58,1.29,1.13,1.13,0,0,0,.36.06,1,1,0,0,0,.93-.65L15.62,24h4.76l3.52,9.35a1,1,0,0,0,.93.65,1.13,1.13,0,0,0,.36-.06,1,1,0,0,0,.58-1.29L22,22.68s0,0,0,0V13h8.06a1,1,0,1,0,0-2ZM20,22H16V13h4Z"/><path d="M18,10a4,4,0,1,0-4-4A4,4,0,0,0,18,10Zm0-6a2,2,0,1,1-2,2A2,2,0,0,1,18,4Z"/>',
  solid:
    '<circle cx="17.96" cy="5" r="3"/><path d="M30,10H6a1,1,0,0,0,0,2h8v8.36s0,0,0,0L10.11,33.17a1,1,0,0,0,.66,1.25,1.55,1.55,0,0,0,.29,0,1,1,0,0,0,1-.71l3.29-10.84h5.38L24,33.75a1,1,0,0,0,1,.71,1.55,1.55,0,0,0,.29,0,1,1,0,0,0,.66-1.25L22,20.4s0,0,0,0V12h8a1,1,0,0,0,0-2Z"/>',
};

export const accessibility2IconName = 'accessibility-2';
export const accessibility2Icon: IconShapeTuple = [accessibility2IconName, renderIcon(icon)];
