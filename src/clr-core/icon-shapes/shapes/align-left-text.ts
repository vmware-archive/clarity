/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M20.25,26H6v2.2H20.25a1.1,1.1,0,0,0,0-2.2Z"/><path d="M28,20H6v2.2H28A1.1,1.1,0,0,0,28,20Z"/><path d="M22.6,15.1A1.1,1.1,0,0,0,21.5,14H6v2.2H21.5A1.1,1.1,0,0,0,22.6,15.1Z"/><path d="M29.25,8H6v2.2H29.25a1.1,1.1,0,1,0,0-2.2Z"/>',
};

export const alignLeftTextIconName = 'align-left-text';
export const alignLeftTextIcon: IconShapeTuple = [alignLeftTextIconName, renderIcon(icon)];
