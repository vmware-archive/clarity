/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M31,20H19V16h6a1,1,0,0,0,1-1V7a1,1,0,0,0-1-1H19V2a1,1,0,0,0-2,0V6H11a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1h6v4H5a1,1,0,0,0-1,1v8a1,1,0,0,0,1,1H17v4a1,1,0,0,0,2,0V30H31a1,1,0,0,0,1-1V21A1,1,0,0,0,31,20ZM12,14V8H24v6ZM30,28H6V22H30Z"/>',
};

export const alignCenterIconName = 'align-center';
export const alignCenterIcon: IconShapeTuple = [alignCenterIconName, renderIcon(icon)];
