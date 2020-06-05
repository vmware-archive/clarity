/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.73,35.44a4.72,4.72,0,0,1-1-.11,33.91,33.91,0,0,1-16.62-8.75,32.71,32.71,0,0,1-9-16.25A4.58,4.58,0,0,1,2.46,6.05l4-3.85A2,2,0,0,1,8,1.66a2,2,0,0,1,1.45.87l5,7.39a1.6,1.6,0,0,1-.11,1.9l-2.51,3a18.94,18.94,0,0,0,4.17,5.89h0a19.26,19.26,0,0,0,6.07,4.09l3.11-2.47a1.64,1.64,0,0,1,1.86-.12l7.55,4.88A2,2,0,0,1,35,30.2l-3.9,3.86A4.74,4.74,0,0,1,27.73,35.44ZM7.84,3.64l-4,3.85a2.54,2.54,0,0,0-.75,2.4,30.7,30.7,0,0,0,8.41,15.26,31.9,31.9,0,0,0,15.64,8.23,2.75,2.75,0,0,0,2.5-.74l3.9-3.86-7.29-4.71-3.34,2.66a1,1,0,0,1-.92.17,20.06,20.06,0,0,1-7.36-4.75h0a19.49,19.49,0,0,1-4.87-7.2A1,1,0,0,1,10,14l2.7-3.23Z"/>',
  solid:
    '<path d="M15.22,20.64a20.37,20.37,0,0,0,7.4,4.79l3.77-3a.67.67,0,0,1,.76,0l7,4.51a2,2,0,0,1,.33,3.18l-3.28,3.24a4,4,0,0,1-3.63,1.07,35.09,35.09,0,0,1-17.15-9A33.79,33.79,0,0,1,1.15,8.6a3.78,3.78,0,0,1,1.1-3.55l3.4-3.28a2,2,0,0,1,3.12.32L13.43,9a.63.63,0,0,1,0,.75l-3.07,3.69A19.75,19.75,0,0,0,15.22,20.64Z"/>',
};

export const phoneHandsetIconName = 'phone-handset';
export const phoneHandsetIcon: IconShapeTuple = [phoneHandsetIconName, renderIcon(icon)];
