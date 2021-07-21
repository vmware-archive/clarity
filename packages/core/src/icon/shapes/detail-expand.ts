/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<g><path d="M14.71 19.71l.68-.71-.68-.71-4.51-4.67A1 1 0 108.76 15l2.89 3H2a1 1 0 000 2h9.65l-2.89 3a1 1 0 000 1.42 1.05 1.05 0 00.7.28 1 1 0 00.72-.31l4.51-4.67z"/><path d="M33 32H9v-4a1 1 0 012 0v2h20V6H11v4a1 1 0 01-2 0V4h24z"/></g>',
};

export const detailExpandIconName = 'detail-expand';
export const detailExpandIcon: IconShapeTuple = [detailExpandIconName, renderIcon(icon)];
