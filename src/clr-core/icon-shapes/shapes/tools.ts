/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20,14H16a1,1,0,0,0-1,1v6a1,1,0,0,0,1,1h4a1,1,0,0,0,1-1V15A1,1,0,0,0,20,14Zm-.4,6.6H16.4V15.4h3.2Z"/><path d="M33.71,12.38,29.62,8.29A1,1,0,0,0,28.92,8h-5V6.05A2,2,0,0,0,22,4H13.84A1.92,1.92,0,0,0,12,6.05V8H7.08a1,1,0,0,0-.71.29L2.29,12.38a1,1,0,0,0-.29.71V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V13.08A1,1,0,0,0,33.71,12.38ZM14,6h8V8H14ZM32,17H22v1.93H32V28H4V18.93H14V17H4V13.5L7.5,10h21L32,13.5Z"/>',
  solid:
    '<rect x="16.4" y="15.4" width="3.2" height="5.2"/><path d="M21,21a1,1,0,0,1-1,1H16a1,1,0,0,1-1-1V19H2v9a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V19H21Z"/><path d="M33.71,12.38,29.62,8.29A1,1,0,0,0,28.92,8h-5V6.05A2,2,0,0,0,22,4H13.84A1.92,1.92,0,0,0,12,6.05V8H7.08a1,1,0,0,0-.71.29L2.29,12.38a1,1,0,0,0-.29.71V17H15V15a1,1,0,0,1,1-1h4a1,1,0,0,1,1,1v2H34V13.08A1,1,0,0,0,33.71,12.38ZM22,8H14V6h8Z"/>',
};

export const toolsIconName = 'tools';
export const toolsIcon: IconShapeTuple = [toolsIconName, renderIcon(icon)];
