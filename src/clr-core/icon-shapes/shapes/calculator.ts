/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM8,32V4H28V32Z"/><path d="M12,8H25.67V6H11a1,1,0,0,0-1,1v4.67h2Z"/><polygon points="12 16 10 16 10 18 14 18 14 14 12 14 12 16"/><polygon points="24 16 22 16 22 18 26 18 26 14 24 14 24 16"/><polygon points="18 16 16 16 16 18 20 18 20 14 18 14 18 16"/><polygon points="12 22 10 22 10 24 14 24 14 20 12 20 12 22"/><polygon points="24 22 22 22 22 24 26 24 26 20 24 20 24 22"/><polygon points="18 22 16 22 16 24 20 24 20 20 18 20 18 22"/><polygon points="12 28 10 28 10 30 14 30 14 26 12 26 12 28"/><polygon points="24 28 22 28 22 30 26 30 26 26 24 26 24 28"/><polygon points="18 28 16 28 16 30 20 30 20 26 18 26 18 28"/>',
  solid:
    '<path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM12,28H10V26h2Zm0-6H10V20h2Zm0-6H10V14h2Zm7,12H17V26h2Zm0-6H17V20h2Zm0-6H17V14h2Zm7,12H24V26h2Zm0-6H24V20h2Zm0-6H24V14h2Zm0-7H10V5H26Z"/>',
};

export const calculatorIconName = 'calculator';
export const calculatorIcon: IconShapeTuple = [calculatorIconName, renderIcon(icon)];
