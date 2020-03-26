/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,4H2A1,1,0,0,0,2,6H34a1,1,0,0,0,0-2Z"/><path d="M6,31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H6ZM8,10h6V30H8Z"/><path d="M20,23a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V8H20Zm2-13h6V22H22Z"/>',
};

export const alignTopIconName = 'align-top';
export const alignTopIcon: IconShapeTuple = [alignTopIconName, renderIcon(icon)];
