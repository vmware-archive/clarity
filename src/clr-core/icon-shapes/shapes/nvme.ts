/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27,22V14a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8a2,2,0,0,0,2,2H25A2,2,0,0,0,27,22ZM11,14H25v8H11Z"/><rect x="19" y="6" width="4" height="2"/><rect x="25.01" y="6" width="1.97" height="2"/><path d="M5.8,8H16.87V6h-11L7.78,4.08a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0L2,7,6.37,11.4a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41Z"/><path d="M29.61,24.68a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L30.1,28H19v2H30.2l-2,2a1,1,0,0,0,0,1.41,1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29L34,29.05Z"/><rect x="13" y="28" width="4" height="2"/><rect x="9" y="28" width="1.97" height="2"/>',
};

export const nvmeIconName = 'nvme';
export const nvmeIcon: IconShapeTuple = [nvmeIconName, renderIcon(icon)];
