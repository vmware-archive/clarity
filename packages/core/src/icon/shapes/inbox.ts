/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z"/><path d="M29.5,5H22V7h7V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V6.5A1.5,1.5,0,0,0,29.5,5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z"/>',

  outlineBadged:
    '<path d="M12.23,13.09a1,1,0,0,0,0,1.41L18,20.3l5.79-5.79a1,1,0,0,0-1.41-1.41L19,16.47V2A1,1,0,0,0,18,1a1,1,0,0,0-1,1v14.5l-3.38-3.38A1,1,0,0,0,12.23,13.09Z"/><path d="M30,13.5a7.52,7.52,0,0,1-1-.07V21H23.61l-.1.89a5.42,5.42,0,0,1-10.77,0l-.1-.89H7V7h7V5H6.5A1.5,1.5,0,0,0,5,6.5v25A1.5,1.5,0,0,0,6.5,33h23A1.5,1.5,0,0,0,31,31.5V13.43A7.52,7.52,0,0,1,30,13.5ZM29,31H7V23h3.91a7.42,7.42,0,0,0,14.44,0H29Z"/>',
};

export const inboxIconName = 'inbox';
export const inboxIcon: IconShapeTuple = [inboxIconName, renderIcon(icon)];
