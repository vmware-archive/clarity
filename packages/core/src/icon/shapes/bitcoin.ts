/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M24.11,16.88A5.49,5.49,0,0,0,21,7V4a1,1,0,0,0-2,0V7H16V4a1,1,0,0,0-2,0V7H11a1,1,0,0,0-1,1V28a1,1,0,0,0,1,1h3v3a1,1,0,0,0,2,0V29h3v3a1,1,0,0,0,2,0V29h.08A6.07,6.07,0,0,0,27,22.81v-.62A6.25,6.25,0,0,0,24.11,16.88ZM12,9h8.69a3.59,3.59,0,0,1,3.43,2.36A3.51,3.51,0,0,1,20.79,16H12ZM25,22.81A4.08,4.08,0,0,1,21.06,27H12V18h9.06A4.08,4.08,0,0,1,25,22.19Z"/>',
  solid:
    '<path d="M21.18,18.47H14.5v6h6.68a2.7,2.7,0,0,0,2.63-2.77v-.48A2.71,2.71,0,0,0,21.18,18.47Z"/><path d="M23,13.75a2.24,2.24,0,0,0-2.23-2.25H14.5V16h6.3A2.22,2.22,0,0,0,23,13.75Z"/><path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm8.31,19.73A5.22,5.22,0,0,1,21.18,27H21v1.9a1,1,0,0,1-2,0V27H17v1.9a1,1,0,0,1-2,0V27H13.25A1.25,1.25,0,0,1,12,25.75V17.23h0v-7A1.25,1.25,0,0,1,13.25,9H15V7.07a1,1,0,0,1,2,0V9h2V7.07a1,1,0,0,1,2,0V9a4.72,4.72,0,0,1,3.2,8,5.31,5.31,0,0,1,2.11,4.24Z"/>',
};

export const bitcoinIconName = 'bitcoin';
export const bitcoinIcon: IconShapeTuple = [bitcoinIconName, renderIcon(icon)];
