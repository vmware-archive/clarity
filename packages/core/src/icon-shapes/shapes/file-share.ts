/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9Zm0,20H6V13h7.31a2,2,0,0,0,2-2H6V7h6.49l2.61,3.59a1,1,0,0,0,.81.41H30Z"/><path d="M21.91,22.48a2.06,2.06,0,0,0-1.44.62l-5.72-2.66V20l5.66-2.65a2.08,2.08,0,1,0,.06-2.94,2.12,2.12,0,0,0-.64,1.48v.23l-5.64,2.66a2.08,2.08,0,1,0-.08,2.95l.08-.08,5.67,2.66v.3a2.09,2.09,0,1,0,2.08-2.1Z"/>',
  solid:
    '<path d="M30,9H16.42L14.11,5.82A2,2,0,0,0,12.49,5H6A2,2,0,0,0,4,7V29a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V11A2,2,0,0,0,30,9ZM6,7h6.49l2.72,4H6ZM21.94,26.64a2.09,2.09,0,0,1-2.11-2.06l0-.3-5.67-2.66-.08.08a2.08,2.08,0,1,1,.08-2.95l5.64-2.66v-.23a2.08,2.08,0,1,1,.58,1.46L14.75,20v.47l5.72,2.66a2.07,2.07,0,1,1,1.47,3.54Z"/>',
};

export const fileShareIconName = 'file-share';
export const fileShareIcon: IconShapeTuple = [fileShareIconName, renderIcon(icon)];
