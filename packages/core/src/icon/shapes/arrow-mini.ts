/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29.18,13.26,17.92,3,6.63,13.28a2,2,0,0,0-.55,2.33,2,2,0,0,0,3.19.68L16,10.13V30.29a2,2,0,0,0,1.35,2A2,2,0,0,0,20,30.38V10.28l6.57,6a2,2,0,0,0,1.35.52,2,2,0,0,0,1.72-1A2.08,2.08,0,0,0,29.18,13.26Z"/>',
};

export const arrowMiniIconName = 'arrow-mini';
export const arrowMiniIcon: IconShapeTuple = [arrowMiniIconName, renderIcon(icon)];
