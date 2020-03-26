/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM4,18a14,14,0,0,1,27.95-1H17.49L8.3,28.07A14,14,0,0,1,4,18ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z"/>',

  outlineAlerted:
    '<path d="M33.68,15.4H31.73a14,14,0,0,1,.22,1.6H17.49L8.3,28.07A14,14,0,0,1,22.09,4.62l1-1.76A16,16,0,1,0,34,18a16,16,0,0,0-.23-2.61ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z"/>',

  outlineBadged:
    '<path d="M31.2,13.4a13.91,13.91,0,0,1,.75,3.6H17.49L8.3,28.07A14,14,0,0,1,22.61,4.8a7.43,7.43,0,0,1,.58-1.92,16.06,16.06,0,1,0,9.93,9.93A7.43,7.43,0,0,1,31.2,13.4ZM18,32a13.91,13.91,0,0,1-8.16-2.65L18.43,19H31.95A14,14,0,0,1,18,32Z"/>',

  solid: '<path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z"/><path d="M33.95,17A16,16,0,1,0,7,29.6L17.49,17Z"/>',

  solidAlerted:
    '<path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z"/><path d="M33.95,17a16,16,0,0,0-.18-1.61H22.23A3.68,3.68,0,0,1,19,9.89l4.06-7A16,16,0,0,0,7,29.6L17.49,17Z"/>',

  solidBadged:
    '<path d="M8.57,30.9A16,16,0,0,0,33.95,19H18.43Z"/><path d="M33.95,17a15.91,15.91,0,0,0-.84-4.18,7.49,7.49,0,0,1-9.92-9.94A16,16,0,0,0,7,29.6L17.49,17Z"/>',
};

export const resourcePoolIconName = 'resource-pool';
export const resourcePoolIcon: IconShapeTuple = [resourcePoolIconName, renderIcon(icon)];
