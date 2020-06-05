/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,17h-2c0,1.8-0.5,3.5-1.4,5l1.5,1.5C29.3,21.5,29.9,19.3,30,17z"/><path d="M18,4c2.8,0,5,2.2,5,5v8c0,0.4-0.1,0.8-0.2,1.2l1.6,1.6c0.4-0.9,0.6-1.8,0.6-2.8V9c0-3.9-3.2-7-7.1-6.9c-2.9,0-5.6,1.9-6.5,4.7L13,8.3C13.5,5.9,15.6,4.2,18,4z"/><path d="M25.2,26.6l6.9,6.9l1.4-1.4L4,2.6L2.6,4l8.4,8.4V17c0,3.9,3.1,7,7,7c1.3,0,2.5-0.3,3.6-1l2.2,2.2C22.1,26.4,20.1,27,18,27c-5.4,0.2-9.8-4.1-10-9.4c0-0.2,0-0.4,0-0.6H6c0.1,6.2,4.8,11.4,11,12v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3v-3C21.2,28.8,23.4,28,25.2,26.6z M13.8,19.7C13.3,18.9,13,18,13,17v-2.6l7.1,7.1C17.9,22.5,15.2,21.8,13.8,19.7z"/>',
  solid:
    '<path d="M30,17h-2c0,1.8-0.5,3.5-1.4,5l1.5,1.5C29.3,21.5,29.9,19.3,30,17z"/><path d="M25,17V9c0-3.9-3.2-7-7.1-6.9c-2.9,0-5.6,1.9-6.5,4.7l13,13C24.8,18.9,25,17.9,25,17z"/><path d="M25.2,26.6l6.9,6.9l1.4-1.4L4,2.6L2.6,4l8.4,8.4V17c0,3.9,3.1,7,7,7c1.3,0,2.5-0.3,3.6-1l2.2,2.2C22.1,26.4,20.1,27,18,27c-5.4,0.2-9.8-4.1-10-9.4c0-0.2,0-0.4,0-0.6H6c0.1,6.2,4.8,11.4,11,12v3h-3c-0.6,0-1,0.4-1,1s0.4,1,1,1h8c0.6,0,1-0.4,1-1s-0.4-1-1-1h-3v-3C21.2,28.8,23.4,28,25.2,26.6z"/>',
};

export const microphoneMuteIconName = 'microphone-mute';
export const microphoneMuteIcon: IconShapeTuple = [microphoneMuteIconName, renderIcon(icon)];
