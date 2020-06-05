/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM4,8H32v5.08H23.8v-4H22v4H14v-4H12v4H4Zm0,7H32v6.08H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z"/>',

  outlineAlerted:
    '<path d="M33.68,15.4H32v5.68H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4V15H20.58a3.58,3.58,0,0,1-1.76-1.92H14v-4H12v4H4V8H20.14l1.15-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z"/>',

  outlineBadged:
    '<path d="M30,13.5a7.47,7.47,0,0,1-2.45-.42H23.8V10.22a7.5,7.5,0,0,1-.63-1.14H22v4H14v-4H12v4H4V8H22.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,30,13.5ZM4,15H32v6.08H28.92V16.27H27v4.81H18.92V16.27H17v4.81H8.9V16.27H7v4.81H4ZM23.8,28V24.27H22.2V28H14V24.27h-1.6V28H4V23H32v5Z"/>',

  solid:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Zm0-8H4V12h8V8h2v4h8V8h2v4h8Z"/>',

  solidAlerted:
    '<path d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19.35,14H4V12h8V8h2v4h4.57A3.67,3.67,0,0,1,19,9.89L21.29,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Z"/>',

  solidBadged:
    '<path d="M24,10.49V12h1.51A7.53,7.53,0,0,1,24,10.49Z"/><path d="M32,13.22V14H4V12h8V8h2v4h8V8h.78a7.49,7.49,0,0,1-.28-2H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22ZM14,28H12V24h2Zm10,0H22V24h2Zm8-6H4V20H7V16H9v4h8V16h2v4h8V16h2v4h3Z"/>',
};

export const firewallIconName = 'firewall';
export const firewallIcon: IconShapeTuple = [firewallIconName, renderIcon(icon)];
