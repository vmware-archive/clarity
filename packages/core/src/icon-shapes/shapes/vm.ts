/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M11,5H25V8h2V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v6.85h2Z"/><path d="M30,10H17v2h8v6h2V12h3V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z"/>',

  outlineAlerted:
    '<path d="M11,5H21.87L23,3H11A2,2,0,0,0,9,5v6.85h2Z"/><rect x="25.01" y="15.4" width="1.99" height="2.6"/><path d="M30,15.4V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V15.4ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z"/><path d="M17,10v2h1.57A3.67,3.67,0,0,1,19,10Z"/>',

  outlineBadged:
    '<path d="M11,5H22.57a7.45,7.45,0,0,1,.55-2H11A2,2,0,0,0,9,5v6.85h2Z"/><path d="M30,13.5h0V26H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V28h8a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM6,31V17H20v9H16V20H14v6a2,2,0,0,0,2,2h4v3Z"/><path d="M17,12h8v6h2V12.87A7.52,7.52,0,0,1,23.66,10H17Z"/>',

  solid:
    '<path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H27V5a2,2,0,0,0-2-2H11A2,2,0,0,0,9,5v8.4h4.59Z"/><path d="M30,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V12A2,2,0,0,0,30,10Z"/>',

  solidAlerted:
    '<path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6h2.72L23,3H11A2,2,0,0,0,9,5v8.4h4.59Z"/><path d="M17.19,10a2,2,0,0,0-2,2v1.4H19A3.68,3.68,0,0,1,19,10Z"/><path d="M23.21,15.4A3.55,3.55,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4Z"/>',

  solidBadged:
    '<path d="M13.59,12a3.6,3.6,0,0,1,3.6-3.6H22.9A7.45,7.45,0,0,1,23.13,3H11A2,2,0,0,0,9,5v8.4h4.59Z"/><path d="M30,13.5A7.49,7.49,0,0,1,23.66,10H17.19a2,2,0,0,0-2,2v1.4H20A3.6,3.6,0,0,1,23.6,17v8H22V17a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2V31a2,2,0,0,0,2,2H20a2,2,0,0,0,2-2V29.6H17.19a3.6,3.6,0,0,1-3.6-3.6V20h1.6v6a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5Z"/>',
};

export const vmIconName = 'vm';
export const vmIcon: IconShapeTuple = [vmIconName, renderIcon(icon)];
