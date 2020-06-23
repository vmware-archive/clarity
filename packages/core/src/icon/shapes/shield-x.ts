/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM30,15.93c0,11-10,15.61-12,16.43-2-.82-12-5.44-12-16.43V9.14a47.54,47.54,0,0,0,6.18-2.25,48.23,48.23,0,0,0,5.82-3,48.23,48.23,0,0,0,5.82,3A47.54,47.54,0,0,0,30,9.14Z"/><path d="M22.81,10.79,18,15.61l-4.81-4.81a1,1,0,0,0-1.41,1.41L16.59,17l-4.81,4.81a1,1,0,1,0,1.41,1.41L18,18.43l4.81,4.81a1,1,0,0,0,1.41-1.41L19.41,17l4.81-4.81a1,1,0,0,0-1.41-1.41Z"/>',

  solid:
    '<path d="M31.25,7.4a43.79,43.79,0,0,1-6.62-2.35,45,45,0,0,1-6.08-3.21L18,1.5l-.54.35a45,45,0,0,1-6.08,3.21A43.79,43.79,0,0,1,4.75,7.4L4,7.59v8.34c0,13.39,13.53,18.4,13.66,18.45l.34.12.34-.12c.14,0,13.66-5.05,13.66-18.45V7.59ZM24.51,21.55a1.4,1.4,0,0,1-2,2L18,19l-4.53,4.53a1.43,1.43,0,0,1-2,0,1.4,1.4,0,0,1,0-2L16,17l-4.53-4.53a1.4,1.4,0,1,1,2-2L18,15l4.53-4.53a1.4,1.4,0,0,1,2,2L20,17Z"/>',
};

export const shieldXIconName = 'shield-x';
export const shieldXIcon: IconShapeTuple = [shieldXIconName, renderIcon(icon)];
