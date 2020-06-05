/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/><path d="M18,32a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.41A2,2,0,0,1,20,6V30a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32ZM4,14v8H9.56a1,1,0,0,1,.71.28L18,30V6l-7.65,7.68a1,1,0,0,1-.71.3ZM18,6Z"/>',
  solid:
    '<path d="M23.41,25.11a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73A8.21,8.21,0,0,1,23.94,25,1,1,0,0,1,23.41,25.11Z"/><path d="M18.34,3.87,9,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V4.62A1,1,0,0,0,18.34,3.87Z"/>',
};

export const volumeDownIconName = 'volume-down';
export const volumeDownIcon: IconShapeTuple = [volumeDownIconName, renderIcon(icon)];
