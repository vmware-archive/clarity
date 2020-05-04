/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z"/><path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z"/><path d="M15,18H6V14h9V12H5.5A1.5,1.5,0,0,0,4,13.5V20H15.78A3,3,0,0,1,15,18Z"/><path d="M30.5,12H21v2h9v4H21a3,3,0,0,1-.78,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z"/><path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z"/>',
  solid:
    '<path d="M18,21a3,3,0,0,1-2.22-1H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20.21A3,3,0,0,1,18,21Zm4,3a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z"/><path d="M15,12H5.5A1.5,1.5,0,0,0,4,13.5V18H15Z"/><path d="M30.5,12H21v6H32V13.5A1.5,1.5,0,0,0,30.5,12Z"/><path d="M13,9.55,17,5.6V18a1,1,0,1,0,2,0V5.6l4,3.95a1,1,0,1,0,1.41-1.42L18,1.78,11.61,8.13A1,1,0,0,0,13,9.55Z"/>',
};

export const unarchiveIconName = 'unarchive';
export const unarchiveIcon: IconShapeTuple = [unarchiveIconName, renderIcon(icon)];
