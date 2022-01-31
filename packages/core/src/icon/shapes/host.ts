/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M26.5,2H9.5A1.5,1.5,0,0,0,8,3.5V34H28V3.5A1.5,1.5,0,0,0,26.5,2ZM26,32H10V4H26Z"/><rect x="12" y="6.2" width="12" height="1.6"/><rect x="12" y="10.2" width="12" height="1.6"/><path d="M18,22.78a3,3,0,1,0,3,3A3,3,0,0,0,18,22.78Zm0,4.5a1.5,1.5,0,1,1,1.5-1.5A1.5,1.5,0,0,1,18,27.28Z"/>',

  outlineAlerted:
    '<path d="M18,28.78a3,3,0,1,0-3-3A3,3,0,0,0,18,28.78Zm0-4.5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,18,24.28Z"/><path d="M18.89,10.2H12v1.6h6.56A3.7,3.7,0,0,1,18.89,10.2Z"/><polygon points="12 6.2 12 7.8 20.25 7.8 21.18 6.2 12 6.2"/><path d="M26,32H10V4H22.45L23.6,2H9.5A1.5,1.5,0,0,0,8,3.5V34H28V15.4H26Z"/><path d="M34.78,11.05,29.06,1.14a1.28,1.28,0,0,0-2.21,0l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68A1.27,1.27,0,0,0,34.78,11.05Z"/>',

  outlineBadged:
    '<path d="M15,25.78a3,3,0,1,0,3-3A3,3,0,0,0,15,25.78Zm4.5,0a1.5,1.5,0,1,1-1.5-1.5A1.5,1.5,0,0,1,19.5,25.78Z"/><path d="M12,11.8H24V10.49c-.07-.1-.15-.19-.21-.29H12Z"/><path d="M12,6.2V7.8H22.73a7,7,0,0,1-.22-1.6Z"/><path d="M26,32H10V4H22.78a7.65,7.65,0,0,1,.88-2H9.5A1.5,1.5,0,0,0,8,3.5V34H28V13.22a7.65,7.65,0,0,1-2-.88Z"/><circle cx="30" cy="6" r="5"/>',

  solid:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M26.5,1.86H9.5A1.5,1.5,0,0,0,8,3.36v30.5H28V3.36A1.5,1.5,0,0,0,26.5,1.86ZM18,28.64a3,3,0,1,1,3-3A3,3,0,0,1,18,28.64Zm6-17H12v-1.6H24Zm0-4H12V6.06H24Z"/>',

  solidAlerted:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M19.05,13.56a3.64,3.64,0,0,1-.49-1.9H12v-1.6h7a.91.91,0,0,1,.09-.17l1.28-2.23H12V6.06h9.25l2.43-4.2H9.5A1.5,1.5,0,0,0,8,3.36v30.5H28V15.4H22.23A3.66,3.66,0,0,1,19.05,13.56ZM18,28.64a3,3,0,1,1,3-3A3,3,0,0,1,18,28.64Z"/><path d="M34.78,11.05,29.06,1.14a1.28,1.28,0,0,0-2.21,0l-5.72,9.91A1.27,1.27,0,0,0,22.23,13H33.68A1.27,1.27,0,0,0,34.78,11.05Z"/>',

  solidBadged:
    '<circle cx="18" cy="25.64" r="1.5"/><path d="M24,10.49v1.17H12v-1.6H23.7a7.42,7.42,0,0,1-1-2.4H12V6.06H22.5V6a7.45,7.45,0,0,1,1.25-4.14H9.5A1.5,1.5,0,0,0,8,3.36v30.5H28V13.22A7.5,7.5,0,0,1,24,10.49ZM18,28.64a3,3,0,1,1,3-3A3,3,0,0,1,18,28.64Z"/><circle cx="30" cy="6" r="5"/>',
};

export const hostIconName = 'host';
export const hostIcon: IconShapeTuple = [hostIconName, renderIcon(icon)];
