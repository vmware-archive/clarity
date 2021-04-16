/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M10,18c0-1.3-0.8-2.4-2-2.8v-3.4c1.2-0.4,2-1.5,2-2.8c0-1.7-1.3-3-3-3S4,7.3,4,9c0,1.3,0.8,2.4,2,2.8v3.4c-1.2,0.4-2,1.5-2,2.8s0.8,2.4,2,2.8v3.4c-1.2,0.4-2,1.5-2,2.8c0,1.7,1.3,3,3,3s3-1.3,3-3c0-1.3-0.8-2.4-2-2.8v-3.4C9.2,20.4,10,19.3,10,18z"/><path d="M31,10H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,10,31,10z"/><path d="M31,19H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,19,31,19z"/><path d="M31,28H15c-0.6,0-1-0.4-1-1s0.4-1,1-1h16c0.6,0,1,0.4,1,1S31.6,28,31,28z"/>',
};

export const timelineIconName = 'timeline';
export const timelineIcon: IconShapeTuple = [timelineIconName, renderIcon(icon)];
