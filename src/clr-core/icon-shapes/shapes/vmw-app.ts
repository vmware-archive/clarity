/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22"/><polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30"/><polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14"/><polygon points="20 4 20 8 22 8 22 6 30 6 30 14 28 14 28 16 32 16 32 4 20 4"/><rect x="11" y="11" width="6" height="6"/><rect x="19" y="11" width="6" height="6"/><rect x="11" y="19" width="6" height="6"/><rect x="19" y="19" width="6" height="6"/>',

  outlineAlerted:
    '<polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22"/><polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30"/><polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14"/><rect x="11" y="11" width="6" height="6"/><rect x="11" y="19" width="6" height="6"/><rect x="19" y="19" width="6" height="6"/><path d="M25,15.4H22.23A3.69,3.69,0,0,1,19,13.56l0-.1V17h6Z"/><polygon points="22.45 4 20 4 20 8 20.14 8 22.45 4"/><rect x="28" y="15.4" width="4" height="0.6"/>',

  outlineBadged:
    '<polygon points="28 22 30 22 30 30 22 30 22 28 20 28 20 32 32 32 32 20 28 20 28 22"/><polygon points="14 30 6 30 6 22 8 22 8 20 4 20 4 32 16 32 16 28 14 28 14 30"/><polygon points="8 14 6 14 6 6 14 6 14 8 16 8 16 4 4 4 4 16 8 16 8 14"/><rect x="11" y="11" width="6" height="6"/><rect x="11" y="19" width="6" height="6"/><rect x="19" y="19" width="6" height="6"/><path d="M22,6h.5a7.49,7.49,0,0,1,.28-2H20V8h2Z"/><path d="M30,13.5V14H28v2h4V13.22A7.49,7.49,0,0,1,30,13.5Z"/><path d="M25,11.58a7.53,7.53,0,0,1-.58-.58H19v6h6Z"/>',
};

export const vmwAppIconName = 'vmw-app';
export const vmwAppIcon: IconShapeTuple = [vmwAppIconName, renderIcon(icon)];
