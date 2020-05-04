/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M5.6,4A1.6,1.6,0,0,0,4,5.6V12h8V4ZM10,10H6V6h4Z"/><path d="M4,30.4A1.6,1.6,0,0,0,5.6,32H12V24H4ZM6,26h4v4H6Z"/><path d="M24,32h6.4A1.6,1.6,0,0,0,32,30.4V24H24Zm2-6h4v4H26Z"/><path d="M30.4,4H24v8h8V5.6A1.6,1.6,0,0,0,30.4,4ZM30,10H26V6h4Z"/><polygon points="20 10 20 8 16 8 16 12 18 12 18 10 20 10"/><rect x="12" y="12" width="2" height="2"/><rect x="14" y="14" width="4" height="2"/><polygon points="20 6 20 8 22 8 22 4 14 4 14 8 16 8 16 6 20 6"/><rect x="4" y="14" width="2" height="4"/><polygon points="12 16 12 18 10 18 10 14 8 14 8 18 6 18 6 20 4 20 4 22 8 22 8 20 10 20 10 22 12 22 12 20 14 20 14 16 12 16"/><polygon points="20 16 22 16 22 18 24 18 24 16 26 16 26 14 22 14 22 10 20 10 20 12 18 12 18 14 20 14 20 16"/><polygon points="18 30 14 30 14 32 22 32 22 30 20 30 20 28 18 28 18 30"/><polygon points="22 20 22 18 20 18 20 16 18 16 18 18 16 18 16 20 18 20 18 22 20 22 20 20 22 20"/><rect x="30" y="20" width="2" height="2"/><rect x="22" y="20" width="6" height="2"/><polygon points="30 14 28 14 28 16 26 16 26 18 28 18 28 20 30 20 30 18 32 18 32 16 30 16 30 14"/><rect x="20" y="22" width="2" height="6"/><polygon points="14 28 16 28 16 26 18 26 18 24 16 24 16 20 14 20 14 28"/>',
};

export const qrCodeIconName = 'qr-code';
export const qrCodeIcon: IconShapeTuple = [qrCodeIconName, renderIcon(icon)];
