/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32V9.2H4ZM4,29V10.8H32V29Z"/><rect x="17" y="23" width="6" height="2"/><polygon points="7 15.68 13.79 18.8 7 21.91 7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68"/>',

  outlineAlerted:
    '<rect x="17" y="23" width="6" height="2"/><polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11"/><path d="M33.68,15.4H32V29H4V10.8H18.68A3.66,3.66,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38Z"/>',

  outlineBadged:
    '<rect x="17" y="23" width="6" height="2"/><polygon points="7 24.11 16.6 19.7 16.6 17.89 7 13.48 7 15.68 13.79 18.8 7 21.91 7 24.11"/><path d="M32,13.22V29H4V10.8H24.24a7.51,7.51,0,0,1-1-1.6H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.45,7.45,0,0,1,32,13.22Z"/>',

  solid:
    '<path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM6.8,15.81V13.17l10,4.59v2.08l-10,4.59V21.78l6.51-3ZM23.4,25.4H17V23h6.4ZM4,9.2V7H32V9.2Z"/>',

  solidAlerted:
    '<path d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89l.4-.69H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z"/>',

  solidBadged:
    '<path d="M30,13.5a7.49,7.49,0,0,1-6.78-4.3H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM16.8,19.83l-10,4.59V21.78l6.51-3-6.51-3V13.17l10,4.59Zm6.6,5.57H17V23h6.4Z"/>',
};

export const terminalIconName = 'terminal';
export const terminalIcon: IconShapeTuple = [terminalIconName, renderIcon(icon)];
