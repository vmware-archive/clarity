/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13.5,21C11,21,9,23,9,25.5s2,4.5,4.5,4.5c2.5,0,4.5-2,4.5-4.5C18,23,16,21,13.5,21z M13.5,28c-1.4,0-2.5-1.1-2.5-2.5s1.1-2.5,2.5-2.5s2.5,1.1,2.5,2.5S14.9,28,13.5,28z"/><path d="M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13c0.6,0,1-0.4,1-1S33.6,24,33,24z"/><path d="M16,12H7v6h9V12z M14,16H9v-2h5V16z"/>',
  solid:
    '<path d="M13.5,30C11,30,9,28,9,25.5s2-4.5,4.5-4.5s4.5,2,4.5,4.5C18,28,16,30,13.5,30z"/><path d="M33,24h-2v-7.5c0-0.5-0.1-1-0.4-1.5l-4.2-7.5c-0.5-1-1.5-1.5-2.6-1.5H5C3.3,6,2,7.3,2,9v14c0,1.7,1.3,3,3,3h2v-2H5c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h18.8c0.4,0,0.7,0.2,0.9,0.5l4.2,7.5c0.1,0.1,0.1,0.3,0.1,0.5V24h-4V12h-7v8h2v-6h3v10h-3v2h13c0.6,0,1-0.4,1-1S33.6,24,33,24z"/><path d="M16,18H7v-6h9V18z"/>',
};

export const caravanIconName = 'caravan';
export const caravanIcon: IconShapeTuple = [caravanIconName, renderIcon(icon)];
