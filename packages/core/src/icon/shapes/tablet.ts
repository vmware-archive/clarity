/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="17" y="29" width="2" height="2"/><path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2Zm0,2V26.38H6V4ZM6,32V28H30v4Z"/>',
  solid:
    '<path d="M30,2H6A2,2,0,0,0,4,4V32a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V4A2,2,0,0,0,30,2ZM19,32H17V30h2ZM6,28V4H30V28Z"/>',
};

export const tabletIconName = 'tablet';
export const tabletIcon: IconShapeTuple = [tabletIconName, renderIcon(icon)];
