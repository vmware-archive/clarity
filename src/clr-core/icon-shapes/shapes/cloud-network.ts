/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30.71,15.18v-1A11.28,11.28,0,0,0,19.56,2.83h-.11a11.28,11.28,0,0,0-11,8.93,7.47,7.47,0,0,0,0,14.94H29.13a5.86,5.86,0,0,0,1.58-11.52ZM29.13,24.7H8.46a5.47,5.47,0,1,1,0-10.94h1.69l.11-.87a9.27,9.27,0,0,1,18.45,1.3v1.28c0,.09,0,.18,0,.27l-.07,1.15.94.11a3.86,3.86,0,0,1-.43,7.71Z"/><path d="M29.58,31.18H18.85v-2.4h-2v2.4H6.08a1,1,0,0,0,0,2h23.5a1,1,0,0,0,0-2Z"/>',
};

export const cloudNetworkIconName = 'cloud-network';
export const cloudNetworkIcon: IconShapeTuple = [cloudNetworkIconName, renderIcon(icon)];
