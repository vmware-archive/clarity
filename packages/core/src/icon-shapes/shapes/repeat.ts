/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6,14.15A3.17,3.17,0,0,1,9.17,11H28.4l-4.28,4.54a1,1,0,1,0,1.46,1.37L32.09,10,25.58,3.09a1,1,0,1,0-1.46,1.37L28.4,9H9.17A5.17,5.17,0,0,0,4,14.15v6.1l2-2.12Z"/><path d="M30,21.85A3.17,3.17,0,0,1,26.83,25H7.6l4.28-4.54a1,1,0,1,0-1.46-1.37L3.91,26l6.51,6.91a1,1,0,1,0,1.46-1.37L7.6,27H26.83A5.17,5.17,0,0,0,32,21.85v-6.1l-2,2.12Z"/>',
};

export const repeatIconName = 'repeat';
export const repeatIcon: IconShapeTuple = [repeatIconName, renderIcon(icon)];
