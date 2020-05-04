/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,3A14.27,14.27,0,0,0,4,17.5V31H9.2A2.74,2.74,0,0,0,12,28.33V21.67A2.74,2.74,0,0,0,9.2,19H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V19H26.8A2.74,2.74,0,0,0,24,21.67v6.67A2.74,2.74,0,0,0,26.8,31H32V17.5A14.27,14.27,0,0,0,18,3ZM9.2,21a.75.75,0,0,1,.8.67v6.67a.75.75,0,0,1-.8.67H6V21ZM26,28.33V21.67a.75.75,0,0,1,.8-.67H30v8H26.8A.75.75,0,0,1,26,28.33Z"/>',
  solid:
    '<path d="M18,3A14.27,14.27,0,0,0,4,17.5V31H8.2A1.74,1.74,0,0,0,10,29.33V22.67A1.74,1.74,0,0,0,8.2,21H6V17.5A12.27,12.27,0,0,1,18,5,12.27,12.27,0,0,1,30,17.5V21H27.8A1.74,1.74,0,0,0,26,22.67v6.67A1.74,1.74,0,0,0,27.8,31H32V17.5A14.27,14.27,0,0,0,18,3Z"/>',
};

export const headphonesIconName = 'headphones';
export const headphonesIcon: IconShapeTuple = [headphonesIconName, renderIcon(icon)];
