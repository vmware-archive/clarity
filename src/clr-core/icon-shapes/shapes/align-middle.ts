/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M34,17H30V11a1,1,0,0,0-1-1H21a1,1,0,0,0-1,1v6H16V5a1,1,0,0,0-1-1H7A1,1,0,0,0,6,5V17H2a1,1,0,0,0,0,2H6V31a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4v6a1,1,0,0,0,1,1h8a1,1,0,0,0,1-1V19h4a1,1,0,0,0,0-2ZM14,30H8V6h6Zm14-6H22V12h6Z"/>',
};

export const alignMiddleIconName = 'align-middle';
export const alignMiddleIcon: IconShapeTuple = [alignMiddleIconName, renderIcon(icon)];
