/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.61,6.41,9.19,12H4a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H9.14l7.41,7.47A2,2,0,0,0,18,32a2,2,0,0,0,.76-.15A2,2,0,0,0,20,30V22.77l5.89,5.89c-.25.15-.49.29-.75.42a1,1,0,0,0,.9,1.79,14.4,14.4,0,0,0,1.31-.75l2.28,2.28L31,31,5,5ZM18,30l-7.73-7.77A1,1,0,0,0,9.56,22H4V14H9.64a1,1,0,0,0,.71-.3l.26-.26L18,20.81Z"/><path d="M24.89,6.69A12.42,12.42,0,0,1,29,26.1l1.42,1.42A14.42,14.42,0,0,0,25.76,4.88a1,1,0,1,0-.87,1.8Z"/><path d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.24,3.71L26,23.13A8.15,8.15,0,0,0,27.8,18a8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/><path d="M18,6v9.15l2,2V6a2,2,0,0,0-3.42-1.41L12,9.17l1.41,1.41Z"/>',
  solid:
    '<path d="M24.87,6.69A12.42,12.42,0,0,1,28.75,26.3l1.42,1.42A14.43,14.43,0,0,0,25.74,4.88a1,1,0,0,0-.87,1.8Z"/><path d="M27.3,27.67h0l-3.84-3.84-.57-.57h0L4.63,5,3.21,6.41,8.8,12H3a1,1,0,0,0-1,1V23a1,1,0,0,0,1,1H8.83l9.51,8.3A1,1,0,0,0,20,31.55V23.2l5.59,5.59c-.17.1-.34.2-.51.29a1,1,0,0,0,.9,1.79c.37-.19.72-.4,1.08-.62l2.14,2.14L30.61,31l-3.25-3.25Z"/><path d="M22.69,12.62A6.27,6.27,0,0,1,25.8,18a6.17,6.17,0,0,1-1.42,3.92l1.42,1.42a8.16,8.16,0,0,0,2-5.34,8.28,8.28,0,0,0-4.1-7.11,1,1,0,1,0-1,1.73Z"/><path d="M20,4.62a1,1,0,0,0-1.66-.75l-6.42,5.6L20,17.54Z"/>',
};

export const volumeMuteIconName = 'volume-mute';
export const volumeMuteIcon: IconShapeTuple = [volumeMuteIconName, renderIcon(icon)];
