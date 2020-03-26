/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,6.4C34,5.6,33.3,5,32.5,5H10.3l2,2H32v0.6l-9.6,9.6l1.4,1.4L33.4,9C33.8,8.6,34,8.1,34,7.6V6.5C34,6.5,34,6.4,34,6.4z"/><path d="M2.7,3l2,2h-1C2.9,4.9,2.1,5.5,2,6.3v1.1c0,0.5,0.2,1,0.6,1.4L14,20.2v10.3l1.9,0.8V19.4L4,7.5V7h2.7L20,20.3v12.9l2,0.8c0,0,0,0,0-0.1V22.3l10.1,10.1l1.4-1.4L4.1,1.6L2.7,3z"/>',
  solid:
    '<path d="M23.9,18.6L10.3,5.1h22.2C33.3,5,34,5.6,34,6.4c0,0,0,0,0,0.1v1.1c0,0.5-0.2,1-0.6,1.4L23.9,18.6z"/><path d="M33.5,31L4.1,1.6L2.6,3l2.1,2.1H3.5C2.7,5,2,5.6,2,6.4c0,0,0,0,0,0.1v1.1c0,0.5,0.2,1,0.6,1.4L14,20.5v10.1l8,3.4V22.4l10.1,10.1L33.5,31z"/>',
};

export const filterOffIconName = 'filter-off';
export const filterOffIcon: IconShapeTuple = [filterOffIconName, renderIcon(icon)];
