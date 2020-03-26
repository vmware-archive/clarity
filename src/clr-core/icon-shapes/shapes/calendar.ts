/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32.25,6H29V8h3V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6Z"/><rect x="8" y="14" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/><rect x="20" y="14" width="2" height="2"/><rect x="26" y="14" width="2" height="2"/><rect x="8" y="19" width="2" height="2"/><rect x="14" y="19" width="2" height="2"/><rect x="20" y="19" width="2" height="2"/><rect x="26" y="19" width="2" height="2"/><rect x="8" y="24" width="2" height="2"/><rect" x="14" y="24" width="2" height="2"/><rect x="20" y="24" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><path d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/><rect x="13" y="6" width="10" height="2"/>',
  outlineAlerted:
    '<path d="M33.68,15.4H32V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38Z"/><rect x="8" y="14" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/><rect x="8" y="19" width="2" height="2"/><rect x="14" y="19" width="2" height="2"/><rect x="20" y="19" width="2" height="2"/><rect x="26" y="19" width="2" height="2"/><rect x="8" y="24" width="2" height="2"/><rect x="14" y="24" width="2" height="2"/><rect x="20" y="24" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><polygon points="21.29 6 13 6 13 8 20.14 8 21.29 6"/>',
  outlineBadged:
    '<path d="M32,13.22V30H4V8H7V6H3.75A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,32,13.22Z"/><rect x="8" y="14" width="2" height="2"/><rect x="14" y="14" width="2" height="2"/><rect x="20" y="14" width="2" height="2"/><rect x="26" y="14" width="2" height="2"/><rect x="8" y="19" width="2" height="2"/><rect x="14" y="19" width="2" height="2"/><rect x="20" y="19" width="2" height="2"/><rect x="26" y="19" width="2" height="2"/><rect x="8" y="24" width="2" height="2"/><rect x="14" y="24" width="2" height="2"/><rect x="20" y="24" width="2" height="2"/><rect x="26" y="24" width="2" height="2"/><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><path d="M22.5,6H13V8h9.78A7.49,7.49,0,0,1,22.5,6Z"/>',
  solid:
    '<path d="M32.25,6h-4V9a2.2,2.2,0,1,1-4.4,0V6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V7.81A1.78,1.78,0,0,0,32.25,6ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><path d="M26,10a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V9A1,1,0,0,0,26,10Z"/>',
  solidAlerted:
    '<path d="M33.68,15.4H22.23A3.68,3.68,0,0,1,19,9.89L21.29,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V15.38ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm6,5H26V24h2Zm0-5H26V19h2Z"/><path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/>',
  solidBadged:
    '<path d="M10,10a1,1,0,0,0,1-1V3A1,1,0,0,0,9,3V9A1,1,0,0,0,10,10Z"/><path d="M30,13.5A7.5,7.5,0,0,1,22.5,6H12.2V9A2.2,2.2,0,0,1,7.8,9V6h-4A1.78,1.78,0,0,0,2,7.81V30.19A1.78,1.78,0,0,0,3.75,32h28.5A1.78,1.78,0,0,0,34,30.19V12.34A7.45,7.45,0,0,1,30,13.5ZM10,26H8V24h2Zm0-5H8V19h2Zm0-5H8V14h2Zm6,10H14V24h2Zm0-5H14V19h2Zm0-5H14V14h2Zm6,10H20V24h2Zm0-5H20V19h2Zm0-5H20V14h2Zm6,10H26V24h2Zm0-5H26V19h2Zm0-5H26V14h2Z"/>',
};

export const calendarIconName = 'calendar';
export const calendarIcon: IconShapeTuple = [calendarIconName, renderIcon(icon)];
