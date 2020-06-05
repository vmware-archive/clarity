/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,2,0,12H4L4,8ZM4,28V24H32v4Z"/>',
  solid:
    '<rect x="7" y="3" width="22" height="30" rx="0.96" ry="0.96" transform="translate(36) rotate(90)" fill="none" stroke="#000" stroke-linejoin="round" stroke-width="2"/><path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6Zm0,18H4V20H32Z"/>',
};

export const creditCardIconName = 'credit-card';
export const creditCardIcon: IconShapeTuple = [creditCardIconName, renderIcon(icon)];
