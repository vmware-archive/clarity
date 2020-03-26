/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M29,32H7V22H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V22H29Z"/><path d="M14,24a1,1,0,0,0,1,1h6a1,1,0,0,0,0-2H15A1,1,0,0,0,14,24Z"/><path d="M14,18H6V14h4a3,3,0,0,1-.68-1.87s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V20H16Z"/><path d="M30.5,12H26.66s0,.09,0,.13A3,3,0,0,1,26,14h4v4H22l-2,2H32V13.5A1.5,1.5,0,0,0,30.5,12Z"/><path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>',
  solid:
    '<path d="M19.41,20.6,18,22l-1.41-1.4L16,20H5V32a2,2,0,0,0,2,2H29a2,2,0,0,0,2-2V20H20ZM22,24a1,1,0,0,1-1,1H15a1,1,0,0,1,0-2h6A1,1,0,0,1,22,24Z"/><path d="M30.5,12H26.66s0,.09,0,.13a3,3,0,0,1-.88,2.12L22,18H32V13.5A1.5,1.5,0,0,0,30.5,12Z"/><path d="M10.2,14.25a3,3,0,0,1-.88-2.12s0-.09,0-.13H5.5A1.5,1.5,0,0,0,4,13.5V18H14Z"/><path d="M18,19.18l6.38-6.35A1,1,0,1,0,23,11.41l-4,3.95V3a1,1,0,1,0-2,0v12.4l-4-3.95a1,1,0,0,0-1.41,1.42Z"/>',
};

export const archiveIconName = 'archive';
export const archiveIcon: IconShapeTuple = [archiveIconName, renderIcon(icon)];
