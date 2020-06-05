/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M18,24.3a2.48,2.48,0,1,0,2.48,2.47A2.48,2.48,0,0,0,18,24.3Zm0,3.6a1.13,1.13,0,1,1,1.13-1.12A1.13,1.13,0,0,1,18,27.9Z"/><rect x="13.5" y="20.7" width="9" height="1.44"/><path d="M25.65,3.6H10.35A1.35,1.35,0,0,0,9,4.95V32.4H27V4.95A1.35,1.35,0,0,0,25.65,3.6Zm-.45,27H10.8V5.4H25.2Z"/><rect x="12.6" y="7.2" width="10.8" height="1.44"/><rect x="12.6" y="10.8" width="10.8" height="1.44"/>',

  outlineAlerted:
    '<path d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/><rect x="13" y="21" width="10" height="1.6"/><polygon points="21.3,6 12,6 12,7.6 20.4,7.6"/><path d="M12,11.6h6.6c0-0.6,0.2-1.1,0.4-1.6h-7V11.6z"/><path d="M26,15.4V32H10V4h12.5l1.1-2H9.5C8.7,2,8,2.7,8,3.5V34h20V15.4H26z"/>',

  outlineBadged:
    '<path d="M15.2,27.8c0,1.5,1.2,2.8,2.8,2.8s2.8-1.2,2.8-2.8S19.5,25,18,25S15.2,26.2,15.2,27.8z M19.2,27.8c0,0.7-0.6,1.2-1.2,1.2s-1.2-0.6-1.2-1.2s0.6-1.2,1.2-1.2S19.2,27.1,19.2,27.8z"/><rect x="13" y="21" width="10" height="1.6"/><path d="M24,10.5c-0.1-0.2-0.2-0.3-0.3-0.5H12v1.6h12V10.5z"/><path d="M12,6v1.6h10.7c-0.1-0.5-0.2-1.1-0.2-1.6H12z"/><path d="M26,12.3V32H10V4h12.8c0.2-0.7,0.5-1.4,0.9-2H9.5C8.7,2,8,2.7,8,3.5V34h20V13.2C27.3,13,26.6,12.7,26,12.3z"/>',

  solid:
    '<path d="M26.5,2h-17C8.7,2,8,2.7,8,3.5V34h20V3.5C28,2.7,27.3,2,26.5,2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z M24,11.6H12V10h12V11.6z M24,7.6H12V6h12V7.6z"/><circle cx="18" cy="27.8" r="1.2"/>',

  solidAlerted:
    '<path d="M22.2,15.3c-2,0-3.7-1.6-3.7-3.7H12V10h6.9c0-0.1,0.1-0.2,0.1-0.2l1.2-2.2H12V6h9.2l2.3-4h-14C8.7,2,8,2.7,8,3.5V34h20V15.3H22.2z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5z M23,22.6H13V21h10V22.6z"/><circle cx="18" cy="27.8" r="1.2"/>',

  solidBadged:
    '<path d="M24,10.3v1.2H12V10h11.8c-0.5-0.7-0.8-1.5-1-2.4H12V6h10.5c0,0,0-0.1,0-0.1c0-1.4,0.4-2.7,1.1-3.9H9.5C8.7,2,8,2.7,8,3.5V34h20V13.1C26.4,12.6,25,11.7,24,10.3z M18,30.5c-1.5,0-2.8-1.2-2.8-2.8S16.5,25,18,25s2.8,1.2,2.8,2.8S19.5,30.5,18,30.5zM23,22.6H13V21h10V22.6z"/><circle cx="18" cy="27.8" r="1.2"/>',
};

export const hostIconName = 'host';
export const hostIcon: IconShapeTuple = [hostIconName, renderIcon(icon)];
