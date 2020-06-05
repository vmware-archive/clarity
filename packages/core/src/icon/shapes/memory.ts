/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="8" y="12" width="4" height="8"/><rect x="16" y="12" width="4" height="8"/><rect x="24" y="12" width="4" height="8"/><path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z"/><path d="M32,7H4A2,2,0,0,0,2,9v4H4V9H32v4h2V9A2,2,0,0,0,32,7Z"/><path d="M32,27H19v2H32a2,2,0,0,0,2-2V17H32Z"/>',

  outlineAlerted:
    '<rect x="8" y="12" width="4" height="8"/><path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z"/><path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z"/><path d="M19,13.56A3.66,3.66,0,0,1,18.57,12H16v8h4V14.64A3.67,3.67,0,0,1,19,13.56Z"/><rect x="24" y="15.4" width="4" height="4.6"/><path d="M4,9H19.56l1.15-2H4A2,2,0,0,0,2,9v4H4Z"/>',

  outlineBadged:
    '<rect x="8" y="12" width="4" height="8"/><rect x="16" y="12" width="4" height="8"/><path d="M15,27H4V17H2V27a2,2,0,0,0,2,2H16.61V25.55h2.26V24H15Z"/><path d="M32,17V27H19v2H32a2,2,0,0,0,2-2V17Z"/><path d="M28,13.22A7.46,7.46,0,0,1,25.51,12H24v8h4Z"/><path d="M4,9H23.13a7.45,7.45,0,0,1-.55-2H4A2,2,0,0,0,2,9v4H4Z"/>',

  solid:
    '<path d="M34,13V9a2,2,0,0,0-2-2H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17H32V13ZM12,20H8V12h4Zm8,0H16V12h4Zm8,0H24V12h4Z"/>',

  solidAlerted:
    '<path d="M32,17V15.07H28V20H24V15.07H22.23A3.68,3.68,0,0,1,20,14.31V20H16V12h2.61A3.68,3.68,0,0,1,19,9.55L20.52,7H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Z"/>',

  solidBadged:
    '<path d="M32,17V13.22a7.33,7.33,0,0,1-4,0V20H24V12h1.51a7.48,7.48,0,0,1-2.94-5H4A2,2,0,0,0,2,9v4H4v4H2V27a2,2,0,0,0,2,2H16.61V25.55H19V29H32a2,2,0,0,0,2-2V17ZM12,20H8V12h4Zm8,0H16V12h4Z"/>',
};

export const memoryIconName = 'memory';
export const memoryIcon: IconShapeTuple = [memoryIconName, renderIcon(icon)];
