/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer';
import { IconShapeTuple } from '../interfaces/icon.interfaces';

const icon = {
  outline:
    '<path d="M17.46,26.22a1.4,1.4,0,0,0,1-.42l5.59-5.56a1.43,1.43,0,0,0,.42-1,1.46,1.46,0,0,0-.42-1l-5.59-5.56a1.43,1.43,0,0,0-2.44,1V24.79a1.41,1.41,0,0,0,.88,1.32A1.54,1.54,0,0,0,17.46,26.22Zm.16-12.16,5.19,5.16-5.19,5.17Z"/><path d="M18.06,5h-6.7l2.92-2.64A1,1,0,0,0,12.94.88L7.32,6,12.94,11a1,1,0,0,0,.67.26,1,1,0,0,0,.74-.33,1,1,0,0,0-.07-1.42L11.46,7h6.6A11.78,11.78,0,1,1,7.71,24.41,1,1,0,0,0,6,25.36,13.78,13.78,0,1,0,18.06,5Z"/>',
};

export const replayAllIconName = 'replay-all';
export const replayAllIcon: IconShapeTuple = [replayAllIconName, renderIcon(icon)];
