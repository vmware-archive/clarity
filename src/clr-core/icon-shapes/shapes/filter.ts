/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33,4H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2l2,.76V19a1,1,0,0,0-.29-.71L4,6.59V6H32v.61L20.33,18.29A1,1,0,0,0,20,19l0,13.21L22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5A1,1,0,0,0,33,4Z"/>',

  solid:
    '<path d="M22,33V19.5L33.47,8A1.81,1.81,0,0,0,34,6.7V5a1,1,0,0,0-1-1H3A1,1,0,0,0,2,5V6.67a1.79,1.79,0,0,0,.53,1.27L14,19.58v10.2Z"/><path d="M33.48,4h-31A.52.52,0,0,0,2,4.52V6.24a1.33,1.33,0,0,0,.39.95l12,12v10l7.25,3.61V19.17l12-12A1.35,1.35,0,0,0,34,6.26V4.52A.52.52,0,0,0,33.48,4Z"/>',
};

export const filterIconName = 'filter';
export const filterIcon: IconShapeTuple = [filterIconName, renderIcon(icon)];
