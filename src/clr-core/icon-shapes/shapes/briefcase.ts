/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,28a0,0,0,0,1,0,0H4V21.32a7.1,7.1,0,0,1-2-1.43V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19.89a6.74,6.74,0,0,1-2,1.42Z"/><path d="M25,22.4a1,1,0,0,0,1-1V15.94H24V18H14v2H24v1.4A1,1,0,0,0,25,22.4Z"/><path d="M33,6H24V4.38A2.42,2.42,0,0,0,21.55,2h-7.1A2.42,2.42,0,0,0,12,4.38V6H3A1,1,0,0,0,2,7v8a5,5,0,0,0,5,5h3v1.4a1,1,0,0,0,2,0V15.94H10V18H7a3,3,0,0,1-3-3V8H32v7a3,3,0,0,1-3,3H28v2h1a5,5,0,0,0,5-5V7A1,1,0,0,0,33,6ZM22,6H14V4.43A.45.45,0,0,1,14.45,4h7.11a.43.43,0,0,1,.44.42Z"/>',
  solid:
    '<path d="M30,18A4.06,4.06,0,0,0,34,14V6H24V4.43A2.44,2.44,0,0,0,21.55,2h-7.1A2.44,2.44,0,0,0,12,4.43V6H2v8A4.06,4.06,0,0,0,6.05,18h4V15.92h2v5.7a1,1,0,1,1-2,0V20.06H6.06A6.06,6.06,0,0,1,2,18.49v9.45a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V18.49a6,6,0,0,1-4.06,1.57H28V18ZM14,4.43A.45.45,0,0,1,14.45,4h7.1a.45.45,0,0,1,.45.43V6H14ZM26,21.62a1,1,0,1,1-2,0V20.06H14V18H24V15.92h2Z"/>',
};

export const briefcaseIconName = 'briefcase';
export const briefcaseIcon: IconShapeTuple = [briefcaseIconName, renderIcon(icon)];
