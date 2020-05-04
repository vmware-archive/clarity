/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2Zm0,30A14,14,0,1,1,32,18,14,14,0,0,1,18,32Z"/><path d="M27.15,15H8.85A1.85,1.85,0,0,0,7,16.85v2.29A1.85,1.85,0,0,0,8.85,21H27.15A1.85,1.85,0,0,0,29,19.15V16.85A1.85,1.85,0,0,0,27.15,15Zm.25,4.15a.25.25,0,0,1-.25.25H8.85a.25.25,0,0,1-.25-.25V16.85a.25.25,0,0,1,.25-.25H27.15a.25.25,0,0,1,.25.25Z"/>',

  solid:
    '<path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM29.15,20H6.85A.85.85,0,0,1,6,19.15V16.85A.85.85,0,0,1,6.85,16H29.15a.85.85,0,0,1,.85.85v2.29A.85.85,0,0,1,29.15,20Z"/>',
};

export const noAccessIconName = 'no-access';
export const noAccessIcon: IconShapeTuple = [noAccessIconName, renderIcon(icon)];
