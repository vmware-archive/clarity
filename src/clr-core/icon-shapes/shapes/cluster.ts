/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31.36,8H27.5v2H31V30H27.5v2H33V9.67A1.65,1.65,0,0,0,31.36,8Z"/><path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM24,30H12V6H24Z"/><rect x="13.5" y="9.21" width="9" height="1.6"/>',

  outlineAlerted:
    '<path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><path d="M19,9.89l.39-.68H13.5v1.6h5.17A3.65,3.65,0,0,1,19,9.89Z"/><path d="M24,30H12V6h9.29l1.15-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H24Z"/><polygon points="31 15.4 31 30 27.5 30 27.5 32 33 32 33 15.4 31 15.4"/>',

  outlineBadged:
    '<path d="M5,10H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67V32H8.5V30H5Z"/><ellipse cx="18.01" cy="25.99" rx="1.8" ry="1.79"/><rect x="13.5" y="9.21" width="9" height="1.6"/><path d="M24,10.49V30H12V6H22.5a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.53,7.53,0,0,1,24,10.49Z"/><path d="M31,13.43V30H27.5v2H33V12.87A7.45,7.45,0,0,1,31,13.43Z"/>',

  solid:
    '<path d="M31.36,8H27.5V32H33V9.67A1.65,1.65,0,0,0,31.36,8Z"/><path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z"/><path d="M24.32,4H11.68A1.68,1.68,0,0,0,10,5.68V32H26V5.68A1.68,1.68,0,0,0,24.32,4ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z"/>',

  solidAlerted:
    '<path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z"/><rect x="27.5" y="15.4" width="5.5" height="16.6"/><path d="M19,13.56a3.68,3.68,0,0,1-.31-3H13V9h6.56l2.89-5H11.68A1.68,1.68,0,0,0,10,5.68V32H26V15.4H22.23A3.69,3.69,0,0,1,19,13.56ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79Z"/>',

  solidBadged:
    '<path d="M3,9.67V32H8.5V8H4.64A1.65,1.65,0,0,0,3,9.67Z"/><path d="M22.5,6a7.49,7.49,0,0,1,.28-2H11.68A1.68,1.68,0,0,0,10,5.68V32H26V12.34A7.49,7.49,0,0,1,22.5,6ZM18,27.79A1.79,1.79,0,1,1,19.81,26,1.8,1.8,0,0,1,18,27.79ZM23,10.6H13V9H23Z"/><path d="M30,13.5a7.47,7.47,0,0,1-2.5-.44V32H33V12.87A7.47,7.47,0,0,1,30,13.5Z"/>',
};

export const clusterIconName = 'cluster';
export const clusterIcon: IconShapeTuple = [clusterIconName, renderIcon(icon)];
