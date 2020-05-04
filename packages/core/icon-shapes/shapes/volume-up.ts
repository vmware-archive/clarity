/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/><path d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/><path d="M18,32.06a2,2,0,0,1-1.42-.59L9.14,24H4a2,2,0,0,1-2-2V14a2,2,0,0,1,2-2H9.22l7.33-7.39A2,2,0,0,1,20,6v24a2,2,0,0,1-1.24,1.85A2,2,0,0,1,18,32.06ZM4,14v8H9.56a1,1,0,0,1,.71.3L18,30.06V6L10.35,13.7a1,1,0,0,1-.71.3ZM18,6Z"/>',
  solid:
    '<path d="M23.41,25.25a1,1,0,0,1-.54-1.85,6.21,6.21,0,0,0-.19-10.65,1,1,0,1,1,1-1.73,8.21,8.21,0,0,1,.24,14.06A1,1,0,0,1,23.41,25.25Z"/><path d="M25.62,31.18a1,1,0,0,1-.45-1.89A12.44,12.44,0,0,0,25,6.89a1,1,0,1,1,.87-1.8,14.44,14.44,0,0,1,.24,26A1,1,0,0,1,25.62,31.18Z"/><path d="M18.33,4,9.07,12h-6a1,1,0,0,0-1,1v9.92a1,1,0,0,0,1,1H8.88l9.46,8.24A1,1,0,0,0,20,31.43V4.72A1,1,0,0,0,18.33,4Z"/>',
};

export const volumeUpIconName = 'volume-up';
export const volumeUpIcon: IconShapeTuple = [volumeUpIconName, renderIcon(icon)];
