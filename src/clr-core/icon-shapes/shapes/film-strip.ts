/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4Zm0,26H6V6H30Z"/><path d="M14.6,23.07a1.29,1.29,0,0,0,1.24.09l8.73-4a1.3,1.3,0,0,0,0-2.37h0l-8.73-4A1.3,1.3,0,0,0,14,14v8A1.29,1.29,0,0,0,14.6,23.07Zm1-8.6L23.31,18,15.6,21.51Z"/><rect x="8" y="7" width="2" height="3"/><rect x="14" y="7" width="2" height="3"/><rect x="20" y="7" width="2" height="3"/><rect x="26" y="7" width="2" height="3"/><rect x="8" y="26" width="2" height="3"/><rect x="14" y="26" width="2" height="3"/><rect x="20" y="26" width="2" height="3"/><rect x="26" y="26" width="2" height="3"/>',
  solid:
    '<path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM20,7h2v3H20ZM14,7h2v3H14ZM10,29H8V26h2Zm0-19H8V7h2Zm6,19H14V26h2Zm6,0H20V26h2Zm3.16-10.16L15.39,23.2A1,1,0,0,1,14,22.28V13.57a1,1,0,0,1,1.41-.91L25.16,17A1,1,0,0,1,25.16,18.84ZM28,29H26V26h2Zm0-19H26V7h2Z"/>',
};

export const filmStripIconName = 'film-strip';
export const filmStripIcon: IconShapeTuple = [filmStripIconName, renderIcon(icon)];
