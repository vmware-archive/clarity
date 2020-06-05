/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.53,21.58l-4.94-2.83V13.09a1,1,0,0,0-.51-.87L22.64,9.1a1,1,0,0,0-1,0L16.2,12.22a1,1,0,0,0-.51.87v5.66l-4.94,2.83a1,1,0,0,0-.5.87v6.24a1,1,0,0,0,.5.86l5.45,3.12a1,1,0,0,0,1,0l4.95-2.83,4.95,2.83a1,1,0,0,0,.5.14,1,1,0,0,0,.49-.14l5.45-3.12a1,1,0,0,0,.5-.86V22.45A1,1,0,0,0,33.53,21.58ZM22.14,11.12l4.45,2.55V19l-4.46,2.56-4.44-2.6V13.67ZM16.69,30.65l-4.44-2.54V23l4.68-2.68,4.4,2.57V28ZM32,28.11l-4.44,2.54L22.93,28V22.93l4.46-2.57L32,23Z"/><path d="M7,27.43a1,1,0,0,1-1-1V19.9A1,1,0,0,1,6.5,19l4.95-2.83V10.54a1,1,0,0,1,.5-.87l5.21-3a1,1,0,0,1,1.37.37,1,1,0,0,1-.38,1.37l-4.7,2.68v5.66a1,1,0,0,1-.51.87L8,20.48v5.95A1,1,0,0,1,7,27.43Z"/><path d="M3,25.05a1,1,0,0,1-1-1V17.53a1,1,0,0,1,.5-.86l5-2.84V8.17A1,1,0,0,1,8,7.31l5.25-3a1,1,0,0,1,1,1.74L9.45,8.75v5.66a1,1,0,0,1-.51.87L4,18.11v5.94A1,1,0,0,1,3,25.05Z"/>',
};

export const nodeGroupIconName = 'node-group';
export const nodeGroupIcon: IconShapeTuple = [nodeGroupIconName, renderIcon(icon)];
