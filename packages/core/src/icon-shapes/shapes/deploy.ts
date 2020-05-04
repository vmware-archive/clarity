/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"/><path d="M11.54,10.73l-9,5.17a1,1,0,0,0-.5.87v11a1,1,0,0,0,.5.87l9,5.15a1,1,0,0,0,1,0l9-5.15a1,1,0,0,0,.5-.87v-11a1,1,0,0,0-.5-.87l-9-5.17A1,1,0,0,0,11.54,10.73ZM11,31.08l-7-4V18.44l7,4ZM12,21,4.81,16.87,12,12.78l7.21,4.12Zm8,6.09-7,4V22.44l7-4Z"/>',
  solid:
    '<path d="M33,2H22.1a1,1,0,0,0,0,2h8.53l-8.82,9a1,1,0,1,0,1.43,1.4L32,5.46V13.9a1,1,0,0,0,2,0V3A1,1,0,0,0,33,2Z"/><path d="M12.46,10.73a1,1,0,0,0-1,0l-8.68,5L12,21l9.19-5.26Z"/><path d="M2,27.73a1,1,0,0,0,.5.87L11,33.46v-11L2,17.28Z"/><path d="M13,33.46l8.5-4.86a1,1,0,0,0,.5-.87V17.29l-9,5.15Z"/>',
};

export const deployIconName = 'deploy';
export const deployIcon: IconShapeTuple = [deployIconName, renderIcon(icon)];
