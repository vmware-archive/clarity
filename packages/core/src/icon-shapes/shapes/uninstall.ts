/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,5.28-5.21a1,1,0,0,0-1.41-1.42L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/><path d="M30.92,8H26.55a1,1,0,0,0,0,2H31V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V10A2,2,0,0,0,30.92,8Z"/>',

  outlineAlerted:
    '<path d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,4.75-4.69H22.23a3.65,3.65,0,0,1-.81-.1L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/><path d="M31,15.4V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V15.4Z"/>',

  outlineBadged:
    '<path d="M11.29,26.72a1,1,0,0,0,1.41,0L18,21.49l5.3,5.23A1,1,0,0,0,24.7,25.3l-5.28-5.21,5.28-5.21a1,1,0,0,0-1.41-1.42L18,18.68l-5.3-5.23a1,1,0,0,0-1.41,1.42l5.28,5.21L11.3,25.3A1,1,0,0,0,11.29,26.72Z"/><path d="M31,13.43V30H5V10H9.38a1,1,0,0,0,0-2H5.08A2,2,0,0,0,3,10V30a2,2,0,0,0,2.08,2H30.92A2,2,0,0,0,33,30V12.87A7.45,7.45,0,0,1,31,13.43Z"/>',
};

export const uninstallIconName = 'uninstall';
export const uninstallIcon: IconShapeTuple = [uninstallIconName, renderIcon(icon)];
