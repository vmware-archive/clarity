/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M23.7,10.41a1,1,0,0,1-.71-.29L15.56,2.69A1,1,0,0,1,17,1.28l7.44,7.43a1,1,0,0,1-.71,1.7Z"/><path d="M11.86,22.25a1,1,0,0,0-.29-.71L4.14,14.11a1,1,0,0,0-1.42,1.42L10.15,23a1,1,0,0,0,1.42,0A1,1,0,0,0,11.86,22.25Z"/><path d="M21.93,34H3a1,1,0,0,1-1-1.27l1.13-4a1,1,0,0,1,1-.73H20.8a1,1,0,0,1,1,.73l1.13,4a1,1,0,0,1-.17.87A1,1,0,0,1,21.93,34ZM4.31,32H20.6L20,30H4.87Z"/><path d="M33.11,27.44l-14-14,2.36-2.36L14.52,4.13,5.58,13.07,12.51,20l2.35-2.34,14,14a3,3,0,0,0,4.24,0A3,3,0,0,0,33.11,27.44ZM8.4,13.07,14.52,7l4.11,4.11-6.12,6.11Zm23.29,17.2a1,1,0,0,1-1.41,0l-14-14,1.41-1.41,14,14A1,1,0,0,1,31.69,30.27Z"/>',
  solid:
    '<path d="M23.7,10.79a1,1,0,0,1-.71-.3L15.56,3.06A1,1,0,0,1,17,1.65l7.44,7.43a1,1,0,0,1,0,1.41A1,1,0,0,1,23.7,10.79Z"/><path d="M10.69,23.79a1,1,0,0,1-.7-.29L2.55,16.07A1,1,0,1,1,4,14.65l7.43,7.43a1,1,0,0,1-.71,1.71Z"/><path d="M20.64,31l.5,1.77a.89.89,0,0,1-.85,1.12H3.67a.89.89,0,0,1-.85-1.12L3.33,31A1.51,1.51,0,0,1,4.8,29.92H19.16A1.53,1.53,0,0,1,20.64,31Z"/><path d="M32.19,28.08,18.43,14.46l3-3L14.52,4.5,5.58,13.44l6.93,6.94,3.21-3.2,13.74,13.6a1.89,1.89,0,0,0,1.36.56,1.91,1.91,0,0,0,1.37-3.26Z"/>',
};

export const gavelIconName = 'gavel';
export const gavelIcon: IconShapeTuple = [gavelIconName, renderIcon(icon)];
