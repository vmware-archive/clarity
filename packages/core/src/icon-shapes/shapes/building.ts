/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,8H23v2h8V31H23v2H33V10A2,2,0,0,0,31,8Z"/><path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z"/><rect x="8" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/><rect x="16" y="8" width="2" height="2"/><rect x="8" y="13" width="2" height="2"/><rect x="12" y="13" width="2" height="2"/><rect x="16" y="13" width="2" height="2"/><rect x="8" y="18" width="2" height="2"/><rect x="12" y="18" width="2" height="2""/><rect x="16" y="18" width="2" height="2""/><rect x="8" y="23" width="2" height="2""/><rect x="12" y="23" width="2" height="2""/><rect x="16" y="23" width="2" height="2""/><rect x="23" y="13" width="2" height="2""/><rect x="27" y="13" width="2" height="2""/><rect x="23" y="18" width="2" height="2""/><rect x="27" y="18" width="2" height="2""/><rect x="23" y="23" width="2" height="2""/><rect x="27" y="23" width="2" height="2""/>',

  outlineAlerted:
    '<rect x="8" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/><rect x="16" y="8" width="2" height="2"/><rect x="8" y="13" width="2" height="2"/><rect x="12" y="13" width="2" height="2"/><rect x="16" y="13" width="2" height="2"/><rect x="8" y="18" width="2" height="2"/><rect x="12" y="18" width="2" height="2"/><rect x="16" y="18" width="2" height="2"/><rect x="8" y="23" width="2" height="2"/><rect x="12" y="23" width="2" height="2"/><rect x="16" y="23" width="2" height="2"/><rect x="23" y="18" width="2" height="2"/><rect x="27" y="18" width="2" height="2"/><rect x="23" y="23" width="2" height="2"/><rect x="27" y="23" width="2" height="2"/><path d="M20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12V8.24l2-3.41A2.12,2.12,0,0,0,19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V15.38a3.68,3.68,0,0,1-2-.74Z"/><polygon points="31 15.4 31 31 23 31 23 33 33 33 33 15.4 31 15.4"/>',

  outlineBadged:
    '<path d="M19.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H22V5.12A2.12,2.12,0,0,0,19.88,3ZM20,31H17V28H9v3H6V5.12A.12.12,0,0,1,6.12,5H19.88a.12.12,0,0,1,.12.12Z"/><rect x="8" y="8" width="2" height="2"/><rect x="12" y="8" width="2" height="2"/><rect x="16" y="8" width="2" height="2"/><rect x="8" y="13" width="2" height="2"/><rect x="12" y="13" width="2" height="2"/><rect x="16" y="13" width="2" height="2"/><rect x="8" y="18" width="2" height="2"/><rect x="12" y="18" width="2" height="2"/><rect x="16" y="18" width="2" height="2"/><rect x="8" y="23" width="2" height="2"/><rect x="12" y="23" width="2" height="2"/><rect x="16" y="23" width="2" height="2"/><rect x="23" y="13" width="2" height="2"/><rect x="27" y="13" width="2" height="2"/><rect x="23" y="18" width="2" height="2"/><rect x="27" y="18" width="2" height="2"/><rect x="23" y="23" width="2" height="2"/><rect x="27" y="23" width="2" height="2"/><path d="M31,13.43V31H23v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z"/>',

  solid:
    '<path d="M31,8H22V33H33V10A2,2,0,0,0,31,8ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Zm0-5H28V13h2Z"/><path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z"/>',

  solidAlerted:
    '<path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V14.64a3.67,3.67,0,0,1-1-4.76l1-1.65V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z"/><path d="M22.23,15.4l-.23,0V33H33V15.4ZM26,25H24V23h2Zm0-5H24V18h2Zm4,5H28V23h2Zm0-5H28V18h2Z"/>',

  solidBadged:
    '<path d="M17.88,3H6.12A2.12,2.12,0,0,0,4,5.12V33H9V30h6v3h5V5.12A2.12,2.12,0,0,0,17.88,3ZM9,25H7V23H9Zm0-5H7V18H9Zm0-5H7V13H9Zm0-5H7V8H9Zm4,15H11V23h2Zm0-5H11V18h2Zm0-5H11V13h2Zm0-5H11V8h2Zm4,15H15V23h2Zm0-5H15V18h2Zm0-5H15V13h2Zm0-5H15V8h2Z"/><path d="M30,13.5V15H28V13.22A7.5,7.5,0,0,1,22.78,8H22V33H33V12.87A7.47,7.47,0,0,1,30,13.5ZM26,25H24V23h2Zm0-5H24V18h2Zm0-5H24V13h2Zm4,10H28V23h2Zm0-5H28V18h2Z"/>',
};

export const buildingIconName = 'building';
export const buildingIcon: IconShapeTuple = [buildingIconName, renderIcon(icon)];
