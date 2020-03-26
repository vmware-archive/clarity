/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<circle cx="12" cy="24" r="1.5"/><circle cx="18" cy="24" r="1.5"/><circle cx="18" cy="18" r="1.5"/><circle cx="24" cy="12" r="1.5"/><circle cx="24" cy="24" r="1.5"/><circle cx="24" cy="18" r="1.5"/>',
};

export const dragHandleCornerIconName = 'drag-handle-corner';
export const dragHandleCornerIcon: IconShapeTuple = [dragHandleCornerIconName, renderIcon(icon)];
