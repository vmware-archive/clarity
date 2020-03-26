/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>',
  outlineAlerted:
    '<path d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>',
  outlineBadged:
    '<path d="M31,31H5a1,1,0,0,0,0,2H31a1,1,0,0,0,0-2Z"/><path d="M18,29.48,28.61,18.87a1,1,0,0,0-1.41-1.41L19,25.65V5a1,1,0,0,0-2,0V25.65L8.81,17.46a1,1,0,1,0-1.41,1.41Z"/>',
};

export const downloadIconName = 'download';
export const downloadIcon: IconShapeTuple = [downloadIconName, renderIcon(icon)];
