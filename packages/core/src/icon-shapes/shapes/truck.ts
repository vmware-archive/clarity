/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V19.7a6.45,6.45,0,0,1,1.56-.2c.15,0,.29,0,.44,0V14h4a2,2,0,0,1,2,2v1H28v2h4v5H29.6a4.54,4.54,0,0,0-8.34,0H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.49,4.49,0,0,0,8.92,0H33a1,1,0,0,0,1-1V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.43,28Z"/>',
  solid:
    '<path d="M30,12H26V7a1,1,0,0,0-1-1H3A1,1,0,0,0,2,7V25a1,1,0,0,0,1,1H4V8H24V21.49A4.45,4.45,0,0,0,21.25,24H14.43a4.5,4.5,0,0,0-4.17-2.76A4.38,4.38,0,1,0,14.72,26H21a4.48,4.48,0,0,0,8.91,0H34V16A4,4,0,0,0,30,12ZM10.26,28a2.38,2.38,0,1,1,0-4.75,2.38,2.38,0,1,1,0,4.75Zm15.17,0a2.38,2.38,0,1,1,2.5-2.37A2.44,2.44,0,0,1,25.42,28ZM32,17H26V14h4a2,2,0,0,1,2,2Z"/>',
};

export const truckIconName = 'truck';
export const truckIcon: IconShapeTuple = [truckIconName, renderIcon(icon)];
