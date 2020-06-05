/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<polygon points="9 17.41 9 27 18.59 27 16.59 25 11 25 11 19.41 9 17.41"/><path d="M34.87,32.29,32,29.38V32H4V27.85H6v-1.6H4V19.6H6V18H4V11.6H6V10H4V4.41L19.94,20.26V17.44L3.71,1.29A1,1,0,0,0,2,2V33a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71Z"/><path d="M24,30h4a2,2,0,0,0,2-2V8.7L27.7,4.47a2,2,0,0,0-1.76-1h0a2,2,0,0,0-1.76,1.08L22,8.72V28A2,2,0,0,0,24,30ZM24,9.2l1.94-3.77L28,9.21V24H24Zm0,16.43h4v2.44H24Z"/>',
  solid:
    '<path d="M34.87,32.21,30,27.37V8.75L27.7,4.52a2,2,0,0,0-3.54,0L22,8.76V19.41L3.71,1.21A1,1,0,0,0,2,1.92V10H4.17v1.6H2V18H4.17v1.6H2v6.65H4.17v1.6H2v5.07a1,1,0,0,0,1,1H34.16a1,1,0,0,0,.71-1.71ZM10,26V16.94L19.07,26Zm18,2.11H24V25.68h4Zm0-4H24V9.25l1.94-3.77L28,9.26Z"/>',
};

export const rulerPencilIconName = 'ruler-pencil';
export const rulerPencilIcon: IconShapeTuple = [rulerPencilIconName, renderIcon(icon)];
