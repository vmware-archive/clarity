/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<polygon points="9.6 22.88 9.6 10.6 24.4 10.6 25.98 9 8 9 8 22.88 9.6 22.88"/><path d="M6,7H30V23h2V6.5A1.5,1.5,0,0,0,30.5,5H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z"/><path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z"/>',

  outlineAlerted:
    '<path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z"/><path d="M9.6,22.88V10.6h9.14A3.64,3.64,0,0,1,19,9.89L19.56,9H8V22.88Z"/><path d="M6,7H20.71l1.15-2H5.5A1.5,1.5,0,0,0,4,6.5V23H6Z"/><rect x="30" y="15.4" width="2" height="7.6"/>',

  outlineBadged:
    '<path d="M1,25v3.4A2.6,2.6,0,0,0,3.6,31H32.34a2.6,2.6,0,0,0,2.6-2.6V25Zm32,3.4a.6.6,0,0,1-.6.6H3.56a.6.6,0,0,1-.6-.6V26.53h9.95a1.64,1.64,0,0,0,1.5,1h7.13a1.64,1.64,0,0,0,1.5-1H33Z"/><path d="M22.5,6a7.52,7.52,0,0,1,.07-1H5.5A1.5,1.5,0,0,0,4,6.5V23H6V7H22.57A7.52,7.52,0,0,1,22.5,6Z"/><path d="M30,13.5V23h2V13.22A7.49,7.49,0,0,1,30,13.5Z"/><path d="M23.13,9H8V22.88H9.6V10.6H24.08A7.49,7.49,0,0,1,23.13,9Z"/>',

  solid:
    '<path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z"/><path d="M7,10H29V24h3V7.57A1.54,1.54,0,0,0,30.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z"/>',

  solidAlerted:
    '<path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z"/><rect x="29" y="15.4" width="3" height="8.6"/><path d="M7,10H19L19,9.89,21.29,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z"/>',

  solidBadged:
    '<path d="M23.81,26c-.35.9-.94,1.5-1.61,1.5H13.74c-.68,0-1.26-.6-1.61-1.5H1v1.75A2.45,2.45,0,0,0,3.6,30H32.4A2.45,2.45,0,0,0,35,27.75V26Z"/><path d="M7,10H23.66A7.46,7.46,0,0,1,22.5,6H5.5A1.54,1.54,0,0,0,4,7.57V24H7Z"/><path d="M32,13.22a7.14,7.14,0,0,1-3,.2V24h3Z"/>',
};

export const computerIconName = 'computer';
export const computerIcon: IconShapeTuple = [computerIconName, renderIcon(icon)];
