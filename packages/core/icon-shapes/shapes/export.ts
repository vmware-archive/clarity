/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M6,13.61h7.61V6H24v8.38h2V6a2,2,0,0,0-2-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z"/><path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z"/>',

  outlineAlerted:
    '<path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z"/><path d="M6,13.61h7.61V6h7.68l1.15-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z"/>',

  outlineBadged:
    '<path d="M28.32,16.35a1,1,0,0,0-1.41,1.41L30.16,21H18a1,1,0,0,0,0,2H30.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L34,22Z"/><path d="M26,12.34a7.53,7.53,0,0,1-2-1.85v3.89h2Z"/><path d="M6,13.61h7.61V6H22.5a7.49,7.49,0,0,1,.28-2H10.87L4,10.87V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H6Zm0-1.92L11.69,6H12v6H6Z"/>',

  solid:
    '<path d="M17,22a1,1,0,0,1,1-1h8V6a2,2,0,0,0-2-2H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z"/><path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z"/>',

  solidAlerted:
    '<path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z"/><path d="M17,22a1,1,0,0,1,1-1h8V15.4H22.23A3.68,3.68,0,0,1,19,9.89L22.45,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z"/>',

  solidBadged:
    '<path d="M29.32,16.35a1,1,0,0,0-1.41,1.41L31.16,21H26v2h5.19l-3.28,3.28a1,1,0,1,0,1.41,1.41L35,22Z"/><path d="M17,22a1,1,0,0,1,1-1h8V12.34A7.46,7.46,0,0,1,22.78,4H10.87L4,10.86V30a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2V23H18A1,1,0,0,1,17,22ZM12,12H6v-.32L11.69,6H12Z"/>',
};

export const exportIconName = 'export';
export const exportIcon: IconShapeTuple = [exportIconName, renderIcon(icon)];
