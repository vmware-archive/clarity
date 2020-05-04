/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<polygon points="5.46 7.41 5.46 11.56 6.65 11.56 6.65 6.05 5.7 6.05 4.05 7.16 4.52 8 5.46 7.41"/><path d="M5.57,14.82a.76.76,0,0,1,.83.73c0,.38-.21.74-.87,1.27l-2,1.57v1H7.67V18.28H5.33l1-.77c1-.7,1.28-1.27,1.28-2a1.83,1.83,0,0,0-2-1.76,2.63,2.63,0,0,0-2.14,1.08l.76.73A1.75,1.75,0,0,1,5.57,14.82Z"/><path d="M6.56,24.64a1.32,1.32,0,0,0,1-1.27c0-.87-.78-1.51-2-1.51a2.61,2.61,0,0,0-2.1,1l.69.72a1.78,1.78,0,0,1,1.3-.64c.54,0,.92.26.92.66s-.36.62-1,.62H4.79v1h.64c.74,0,1.07.21,1.07.63s-.35.68-1,.68a2,2,0,0,1-1.46-.65l-.7.78a2.85,2.85,0,0,0,2.21.93c1.29,0,2.13-.69,2.13-1.64A1.33,1.33,0,0,0,6.56,24.64Z"/><path d="M32.42,9a1,1,0,0,0-1-1H10v2H31.42A1,1,0,0,0,32.42,9Z"/><path d="M31.42,16H10v2H31.42a1,1,0,0,0,0-2Z"/><path d="M31.42,24H10v2H31.42a1,1,0,0,0,0-2Z"/>',
};

export const numberListIconName = 'number-list';
export const numberListIcon: IconShapeTuple = [numberListIconName, renderIcon(icon)];
