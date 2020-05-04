/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="6" y="9" width="2" height="2"/><rect x="10" y="9" width="14" height="2"/><rect x="6" y="17" width="2" height="2"/><rect x="10" y="17" width="14" height="2"/><path d="M32,5H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V7A2,2,0,0,0,32,5ZM4,7H32v6H4Zm0,8H32v6H4ZM4,29V23H32v6Z"/><rect x="6" y="25" width="2" height="2"/><rect x="10" y="25" width="14" height="2"/>',

  outlineAlerted:
    '<rect x="10" y="17" width="14" height="2"/><rect x="6" y="25" width="2" height="2"/><rect x="10" y="25" width="14" height="2"/><path d="M18.64,11A3.65,3.65,0,0,1,19,9.89L19.56,9H10v2Z"/><path d="M33.68,15.4H32V21H4V15H20.58A3.67,3.67,0,0,1,19,13.56a3.63,3.63,0,0,1-.26-.56H4V7H20.71l1.15-2H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V15.38ZM4,29V23H32v6Z"/>',

  outlineBadged:
    '<rect x="6" y="9" width="2" height="2"/><rect x="6" y="17" width="2" height="2"/><rect x="10" y="17" width="14" height="2"/><rect x="6" y="25" width="2" height="2"/><rect x="10" y="25" width="14" height="2"/><path d="M10,11H24v-.51A7.48,7.48,0,0,1,23.13,9H10Z"/><path d="M30,13.5a7.47,7.47,0,0,1-2.68-.5H4V7H22.57a7.52,7.52,0,0,1-.07-1,7.52,7.52,0,0,1,.07-1H4A2,2,0,0,0,2,7V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V12.34A7.46,7.46,0,0,1,30,13.5ZM4,15H32v6H4ZM4,29V23H32v6Z"/>',

  solid:
    '<path d="M2,22H34V14H2Zm8-5H24v2H10ZM6,17H8v2H6Z"/><path d="M32,4H4A2,2,0,0,0,2,6v6H34V6A2,2,0,0,0,32,4ZM8,9H6V7H8ZM24,9H10V7H24Z"/><path d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/>',

  solidAlerted:
    '<path d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/><path d="M19,9.89,19.56,9H10V7H20.71l1.73-3H4A2,2,0,0,0,2,6v6H18.57A3.67,3.67,0,0,1,19,9.89ZM8,9H6V7H8Z"/><path d="M33.68,15.4H22.23A3.69,3.69,0,0,1,19.35,14H2v8H34V15.38ZM8,19H6V17H8Zm16,0H10V17H24Z"/>',

  solidBadged:
    '<path d="M2,14v8H34V14Zm6,5H6V17H8Zm16,0H10V17H24Z"/><path d="M2,30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V24H2Zm8-3H24v2H10ZM6,27H8v2H6Z"/><path d="M23.13,9H10V7H22.57a7.52,7.52,0,0,1-.07-1,7.49,7.49,0,0,1,.28-2H4A2,2,0,0,0,2,6v6H25.51A7.52,7.52,0,0,1,23.13,9ZM8,9H6V7H8Z"/>',
};

export const rackServerIconName = 'rack-server';
export const rackServerIcon: IconShapeTuple = [rackServerIconName, renderIcon(icon)];
