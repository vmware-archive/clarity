/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/><path d="M22.33,18a4.46,4.46,0,1,0-4.45,4.46A4.46,4.46,0,0,0,22.33,18ZM17.88,20.9A2.86,2.86,0,1,1,20.73,18,2.86,2.86,0,0,1,17.88,20.9Z"/><path d="M17.88,7.43H18V5.84h-.12A12.21,12.21,0,0,0,5.68,17.75h1.6A10.61,10.61,0,0,1,17.88,7.43Z"/><path d="M30.08,18H28.49v0A10.61,10.61,0,0,1,18.25,28.63v1.6A12.22,12.22,0,0,0,30.09,18S30.08,18,30.08,18Z"/><path d="M18,11V9.44h-.12a8.62,8.62,0,0,0-8.6,8.32h1.6a7,7,0,0,1,7-6.72Z"/><path d="M18.25,25v1.6A8.61,8.61,0,0,0,26.48,18v0h-1.6v0A7,7,0,0,1,18.25,25Z"/>',
  solid:
    '<path d="M18.17,1.92a16,16,0,1,0,16,16A16,16,0,0,0,18.17,1.92ZM26.23,18h1.54a9.61,9.61,0,0,1-9.6,9.53H18V26h.17A8.07,8.07,0,0,0,26.23,18ZM6.05,18H4.45v-.08A13.72,13.72,0,0,1,18,4.21v1.6A12.13,12.13,0,0,0,6.05,17.92Zm4.05,0H8.56v-.08A9.61,9.61,0,0,1,18,8.32V9.86a8.07,8.07,0,0,0-7.9,8.06Zm4.32-.08a3.75,3.75,0,1,1,3.75,3.75A3.75,3.75,0,0,1,14.42,17.92Zm3.75,13.71H18V30h.17A12.13,12.13,0,0,0,30.28,18h1.6A13.73,13.73,0,0,1,18.17,31.63Z"/>',
};

export const cdDvdIconName = 'cd-dvd';
export const cdDvdIcon: IconShapeTuple = [cdDvdIconName, renderIcon(icon)];
