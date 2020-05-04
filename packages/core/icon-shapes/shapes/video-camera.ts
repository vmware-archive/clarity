/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,10.34a2.11,2.11,0,0,0-1.16-1.9,2,2,0,0,0-2.13.15L26,11.6V8a2,2,0,0,0-2-2H6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H24a2,2,0,0,0,2-2V24.4l4.64,3a2.07,2.07,0,0,0,2.2.2A2.11,2.11,0,0,0,34,25.66ZM31.93,25.77c-.06,0-.11,0-.19-.06L24,20.77V28H6a2,2,0,0,1-2-2V10A2,2,0,0,1,6,8H24v7.23l7.8-5a.11.11,0,0,1,.13,0,.11.11,0,0,1,.07.11V25.66A.11.11,0,0,1,31.93,25.77Z"/>',
  solid:
    '<path d="M32.3,9.35,26,12.9V8a2,2,0,0,0-2-2H6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H24a2,2,0,0,0,2-2V23.08l6.3,3.55A1.1,1.1,0,0,0,34,25.77V10.2A1.1,1.1,0,0,0,32.3,9.35Z"/>',
};

export const videoCameraIconName = 'video-camera';
export const videoCameraIcon: IconShapeTuple = [videoCameraIconName, renderIcon(icon)];
