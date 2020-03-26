/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="5" y="7" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="13" y="7" width="2" height="2"/><path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4ZM4,6H32v4.2H4ZM4,30V11.8H32V30Z"/>',
  solid:
    '<path d="M32,4H4A2,2,0,0,0,2,6V30a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V6A2,2,0,0,0,32,4Zm0,6.2H4V6H32Z"/><rect x="5" y="7" width="2" height="2"/><rect x="9" y="7" width="2" height="2"/><rect x="13" y="7" width="2" height="2"/>',
};

export const applicationIconName = 'application';
export const applicationIcon: IconShapeTuple = [applicationIconName, renderIcon(icon)];
