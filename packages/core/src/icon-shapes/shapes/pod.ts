/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26,32H10a6,6,0,0,1-6-6V10a6,6,0,0,1,6-6H26a6,6,0,0,1,6,6V26A6,6,0,0,1,26,32ZM10,6a4,4,0,0,0-4,4V26a4,4,0,0,0,4,4H26a4,4,0,0,0,4-4V10a4,4,0,0,0-4-4Z"/><path d="M26.56,15H15.44A1.43,1.43,0,0,0,14,16.44v8.12A1.43,1.43,0,0,0,15.44,26H26.56A1.43,1.43,0,0,0,28,24.56V16.44A1.43,1.43,0,0,0,26.56,15ZM26,24H16V17H26Z"/><path d="M12.4,19H10V12H20v1.4h2v-2A1.43,1.43,0,0,0,20.56,10H9.44A1.43,1.43,0,0,0,8,11.44v8.12A1.43,1.43,0,0,0,9.44,21h3Z"/>',
};

export const podIconName = 'pod';
export const podIcon: IconShapeTuple = [podIconName, renderIcon(icon)];
