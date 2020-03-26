/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM32,27H4V19.06L7.13,9H28.87L32,19.06Z"/><rect x="7.12" y="22" width="1.8" height="3"/><rect x="12.12" y="22" width="1.8" height="3"/><rect x="17.11" y="22" width="1.8" height="3"/><rect x="22.1" y="22" width="1.8" height="3"/><rect x="27.1" y="22" width="1.8" height="3"/><rect x="6.23" y="18" width="23.69" height="1.4"/>',

  outlineAlerted:
    '<rect x="7.12" y="22" width="1.8" height="3"/><rect x="12.12" y="22" width="1.8" height="3"/><rect x="17.11" y="22" width="1.8" height="3"/><rect x="22.1" y="22" width="1.8" height="3"/><rect x="27.1" y="22" width="1.8" height="3"/><rect x="6.23" y="18" width="23.69" height="1.4"/><path d="M33.91,18.47,33,15.4H30.86L32,19.06V27H4V19.06L7.13,9H19.56l1.15-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z"/>',

  outlineBadged:
    '<rect x="7.12" y="22" width="1.8" height="3"/><rect x="12.12" y="22" width="1.8" height="3"/><rect x="17.11" y="22" width="1.8" height="3"/><rect x="22.1" y="22" width="1.8" height="3"/><rect x="27.1" y="22" width="1.8" height="3"/><rect x="6.23" y="18" width="23.69" height="1.4"/><path d="M33.91,18.47l-1.65-5.32a7.49,7.49,0,0,1-2,.33L32,19.06V27H4V19.06L7.13,9h16a7.45,7.45,0,0,1-.55-2H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47Z"/>',

  solid:
    '<path d="M33.91,18.47,30.78,8.41A2,2,0,0,0,28.87,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06A2,2,0,0,0,33.91,18.47ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z"/>',

  solidAlerted:
    '<path d="M33,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z"/>',

  solidBadged:
    '<path d="M32.26,13.15A7.49,7.49,0,0,1,22.57,7H7.13A2,2,0,0,0,5.22,8.41L2.09,18.48a2,2,0,0,0-.09.59V27a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.06a2,2,0,0,0-.09-.59ZM8.92,25H7.12V22h1.8Zm5,0h-1.8V22h1.8Zm5,0h-1.8V22h1.8Zm5,0H22.1V22h1.8Zm5,0H27.1V22h1.8ZM31,19.4H5V18H31Z"/>',
};

export const networkSwitchIconName = 'network-switch';
export const networkSwitchIcon: IconShapeTuple = [networkSwitchIconName, renderIcon(icon)];
