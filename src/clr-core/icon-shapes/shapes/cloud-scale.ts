/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6.32,11.11H7.84L8,10.24A7.19,7.19,0,0,1,15.07,4h.07a7.15,7.15,0,0,1,4.71,1.83,11.1,11.1,0,0,1,3.09.64A9.18,9.18,0,0,0,15.16,2h-.09A9.2,9.2,0,0,0,6.13,9.11,6.15,6.15,0,0,0,2.33,19.95,8.09,8.09,0,0,1,3,17.71a4.12,4.12,0,0,1-.81-2.44A4.16,4.16,0,0,1,6.32,11.11Z"/><path d="M10.4,16.91h1.52L12,16a7.19,7.19,0,0,1,7.12-6.25h.07a7.17,7.17,0,0,1,5.7,2.92,11.05,11.05,0,0,1,2.72.77,9.2,9.2,0,0,0-8.4-5.69h-.09a9.2,9.2,0,0,0-8.94,7.12,6.15,6.15,0,0,0-3.64,11,8.11,8.11,0,0,1,.79-2,4.14,4.14,0,0,1,3-7Z"/><path d="M32.42,24.47v-.62a9.18,9.18,0,0,0-18.13-2.16A6.16,6.16,0,0,0,14.48,34H31a4.88,4.88,0,0,0,1.46-9.53ZM31,32H14.48a4.16,4.16,0,1,1,0-8.32H16l.11-.87a7.19,7.19,0,0,1,7.12-6.25h.07a7.21,7.21,0,0,1,7.12,7.25v1c0,.07,0,.13,0,.2l-.07,1.11.94.11A2.88,2.88,0,0,1,31,32Z"/>',
};

export const cloudScaleIconName = 'cloud-scale';
export const cloudScaleIcon: IconShapeTuple = [cloudScaleIconName, renderIcon(icon)];
