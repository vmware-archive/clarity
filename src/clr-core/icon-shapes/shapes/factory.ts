/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.47,7.37a1,1,0,0,0-1,.06L23,13.77V8.26a1,1,0,0,0-1.64-.77L13.48,14H10V4.62a1,1,0,0,0-.78-1l-4-.9a1,1,0,0,0-.85.2A1,1,0,0,0,4,3.73V14H3a1,1,0,0,0-1,1V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V8.26A1,1,0,0,0,33.47,7.37ZM6,5l2,.44V14H6ZM32,30H4V16h9.83a1,1,0,0,0,.64-.23L21,10.37v5.28a1,1,0,0,0,1.56.83L32,10.14Z"/><rect x="6" y="17.99" width="8" height="2"/><rect x="6" y="21.99" width="8" height="2"/><rect x="6" y="25.99" width="8" height="2"/><rect x="19" y="18.99" width="2" height="3"/><rect x="19" y="24.99" width="2" height="3"/><rect x="23" y="18.99" width="2" height="3"/><rect x="23" y="24.99" width="2" height="3"/><rect x="27" y="18.99" width="2" height="3"/><rect x="27" y="24.99" width="2" height="3"/>',
  solid:
    '<path d="M32.45,8.44,22,15.3V9.51a1,1,0,0,0-1.63-.78L14.07,14H10V4.06L4,2.71V14H2V31a1,1,0,0,0,1,1H33a1,1,0,0,0,1-1V9.27A1,1,0,0,0,32.45,8.44ZM14,29H6V27h8Zm0-4H6V23h8Zm0-4H6V19h8Zm8,8H20V26h2Zm0-6H20V20h2Zm4,6H24V26h2Zm0-6H24V20h2Zm4,6H28V26h2Zm0-6H28V20h2Z"/>',
};

export const factoryIconName = 'factory';
export const factoryIcon: IconShapeTuple = [factoryIconName, renderIcon(icon)];
