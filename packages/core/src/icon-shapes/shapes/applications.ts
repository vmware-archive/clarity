/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8"/><polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8"/><polygon points="30 4 30 8 26 8 26 10 32 10 32 4 30 4"/><polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19"/><polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19"/><polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19"/><polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30"/><polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30"/><polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30"/>',

  outlineAlerted:
    '<polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8"/><polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19"/><polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19"/><polygon points="30 15 30 19 26 19 26 21 32 21 32 15 30 15"/><polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30"/><polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30"/><polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30"/><path d="M19,8H15v2h4L19,9.89,21,6.5V4H19Z"/>',

  outlineBadged:
    '<polygon points="8 8 4 8 4 10 10 10 10 4 8 4 8 8"/><polygon points="19 8 15 8 15 10 21 10 21 4 19 4 19 8"/><polygon points="8 19 4 19 4 21 10 21 10 15 8 15 8 19"/><polygon points="19 19 15 19 15 21 21 21 21 15 19 15 19 19"/><polygon points="30 19 26 19 26 21 32 21 32 15 30 15 30 19"/><polygon points="8 30 4 30 4 32 10 32 10 26 8 26 8 30"/><polygon points="19 30 15 30 15 32 21 32 21 26 19 26 19 30"/><polygon points="30 30 26 30 26 32 32 32 32 26 30 26 30 30"/>',

  solid:
    '<rect x="4" y="4" width="6" height="6"/><rect x="4" y="15" width="6" height="6"/><rect x="4" y="26" width="6" height="6"/><rect x="15" y="4" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/><rect x="15" y="26" width="6" height="6"/><rect x="26" y="4" width="6" height="6"/><rect x="26" y="15" width="6" height="6"/><rect x="26" y="26" width="6" height="6"/>',

  solidAlerted:
    '<rect x="4" y="4" width="6" height="6"/><rect x="4" y="15" width="6" height="6"/><rect x="4" y="26" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/><rect x="15" y="26" width="6" height="6"/><rect x="26" y="15" width="6" height="6"/><rect x="26" y="26" width="6" height="6"/><path d="M15,10h4L19,9.89,21,6.5V4H15Z"/>',

  solidBadged:
    '<rect x="4" y="4" width="6" height="6"/><rect x="4" y="15" width="6" height="6"/><rect x="4" y="26" width="6" height="6"/><rect x="15" y="4" width="6" height="6"/><rect x="15" y="15" width="6" height="6"/><rect x="15" y="26" width="6" height="6"/><rect x="26" y="15" width="6" height="6"/><rect x="26" y="26" width="6" height="6"/>',
};

export const applicationsIconName = 'applications';
export const applicationsIcon: IconShapeTuple = [applicationsIconName, renderIcon(icon)];
