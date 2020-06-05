/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<rect x="15" y="8" width="9" height="2"/><rect x="15" y="12" width="9" height="2"/><rect x="15" y="16" width="9" height="2"/><rect x="15" y="20" width="9" height="2"/><rect x="15" y="24" width="9" height="2"/><rect x="11" y="8" width="2" height="2"/><rect x="11" y="12" width="2" height="2"/><rect x="11" y="16" width="2" height="2"/><rect x="11" y="20" width="2" height="2"/><rect x="11" y="24" width="2" height="2"/><path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2Zm0,30H8V4H28Z"/>',

  outlineBadged:
    '<rect x="15" y="12" width="9" height="2"/><rect x="15" y="16" width="9" height="2"/><rect x="15" y="20" width="9" height="2"/><rect x="15" y="24" width="9" height="2"/><rect x="11" y="8" width="2" height="2"/><rect x="11" y="12" width="2" height="2"/><rect x="11" y="16" width="2" height="2"/><rect x="11" y="20" width="2" height="2"/><rect x="11" y="24" width="2" height="2"/><path d="M15,8v2h8.66a7.45,7.45,0,0,1-.89-2Z"/><path d="M28,13.22V32H8V4H22.78a7.45,7.45,0,0,1,.88-2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,28,13.22Z"/>',

  solid:
    '<path d="M28,2H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V4A2,2,0,0,0,28,2ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Zm0-4H15V8H25Z"/>',

  solidBadged:
    '<path d="M23.66,10H15V8h7.78a7.42,7.42,0,0,1,.89-6H8A2,2,0,0,0,6,4V32a2,2,0,0,0,2,2H28a2,2,0,0,0,2-2V13.5A7.49,7.49,0,0,1,23.66,10ZM13,26H11V24h2Zm0-4H11V20h2Zm0-4H11V16h2Zm0-4H11V12h2Zm0-4H11V8h2ZM25,26H15V24H25Zm0-4H15V20H25Zm0-4H15V16H25Zm0-4H15V12H25Z"/>',
};

export const listIconName = 'list';
export const listIcon: IconShapeTuple = [listIconName, renderIcon(icon)];
