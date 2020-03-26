/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM25,30H11V22H25Zm5,0H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-2H12V6H26.51L30,9.59Z"/>',

  outlineAlerted:
    '<path d="M30,15.4V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2h7.35a3.54,3.54,0,0,1-.77-2H12V6h9.29l1.15-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM25,30H11V22H25Z"/>',

  outlineBadged:
    '<path d="M30,13.5h0V30H27V22a2,2,0,0,0-2-2H11a2,2,0,0,0-2,2v8H6V6h4v6a2,2,0,0,0,2,2H24a2,2,0,0,0,2-1.68l-.43-.3H12V6H22.5a7.49,7.49,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM25,30H11V22H25Z"/>',

  solid:
    '<path d="M27.36,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V8.78ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5ZM24,14H12a2,2,0,0,1-2-2V6h2v6H26A2,2,0,0,1,24,14Z"/>',

  solidAlerted:
    '<path d="M22.23,15.4A3.69,3.69,0,0,1,19.35,14H12a2,2,0,0,1-2-2V6h2v6h6.58A3.67,3.67,0,0,1,19,9.89L22.45,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V15.4ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z"/>',

  solidBadged:
    '<path d="M30,13.5a7.46,7.46,0,0,1-4-1.18A2,2,0,0,1,24,14H12a2,2,0,0,1-2-2V6h2v6H25.54a7.45,7.45,0,0,1-2.76-8H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V13.22A7.49,7.49,0,0,1,30,13.5ZM26,30H10V21.5A1.5,1.5,0,0,1,11.5,20h13A1.5,1.5,0,0,1,26,21.5Z"/>',
};

export const floppyIconName = 'floppy';
export const floppyIcon: IconShapeTuple = [floppyIconName, renderIcon(icon)];
