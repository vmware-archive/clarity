/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,21.08,30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08ZM4,29V21.44L7.06,9H28.93L32,21.44V29Z"/><rect x="6" y="20" width="24" height="2"/><rect x="26" y="24" width="4" height="2"/>',

  outlineAlerted:
    '<rect x="6" y="20" width="24" height="2"/><rect x="26" y="24" width="4" height="2"/><path d="M34,21.08l-1.4-5.68H30.51l1.49,6V29H4V21.44L7.06,9h12.5l1.15-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>',

  outlineBadged:
    '<rect x="6" y="20" width="24" height="2"/><rect x="26" y="24" width="4" height="2"/><path d="M34,21.08,32,13.21a7.49,7.49,0,0,1-2,.29l2,7.94V29H4V21.44L7.06,9H23.13a7.45,7.45,0,0,1-.55-2H7.06A2,2,0,0,0,5.13,8.47L2,21.08a1,1,0,0,0,0,.24V29a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V21.31A1,1,0,0,0,34,21.08Z"/>',

  solid:
    '<path d="M30.86,8.43A2,2,0,0,0,28.94,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/><path d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/>',

  solidAlerted:
    '<path d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/><path d="M32.58,15.4H22.23A3.68,3.68,0,0,1,19,9.89L20.71,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>',

  solidBadged:
    '<path d="M2,22v7a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V22Zm28,5H26V25h4Z"/><path d="M32,13.21A7.47,7.47,0,0,1,22.57,7H7.06A2,2,0,0,0,5.13,8.47L2.29,20H33.71Z"/>',
};

export const hardDiskIconName = 'hard-disk';
export const hardDiskIcon: IconShapeTuple = [hardDiskIconName, renderIcon(icon)];
