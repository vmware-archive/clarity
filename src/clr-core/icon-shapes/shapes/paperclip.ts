/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M8.42,32.6A6.3,6.3,0,0,1,4,30.79l-.13-.13A6.2,6.2,0,0,1,2,26.22,6.77,6.77,0,0,1,4,21.4L19.5,6.07a8.67,8.67,0,0,1,12.15-.35A8,8,0,0,1,34,11.44a9,9,0,0,1-2.7,6.36L17.37,31.6A1,1,0,1,1,16,30.18L29.89,16.38A7,7,0,0,0,32,11.44a6,6,0,0,0-1.76-4.3,6.67,6.67,0,0,0-9.34.35L5.45,22.82A4.78,4.78,0,0,0,4,26.22a4.21,4.21,0,0,0,1.24,3l.13.13a4.64,4.64,0,0,0,6.5-.21L25.22,15.94A2.7,2.7,0,0,0,26,14a2.35,2.35,0,0,0-.69-1.68,2.61,2.61,0,0,0-3.66.13l-9.2,9.12a1,1,0,1,1-1.41-1.42L20.28,11a4.62,4.62,0,0,1,6.48-.13A4.33,4.33,0,0,1,28,14a4.68,4.68,0,0,1-1.41,3.34L13.28,30.58A6.91,6.91,0,0,1,8.42,32.6Z"/>',
};

export const paperclipIconName = 'paperclip';
export const paperclipIcon: IconShapeTuple = [paperclipIconName, renderIcon(icon)];
