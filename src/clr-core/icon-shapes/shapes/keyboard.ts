/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8Zm0,18H4V10H32Z"/><rect x="7" y="13" width="2" height="2"/><rect x="11" y="13" width="2" height="2"/><rect x="15" y="13" width="2" height="2"/><rect x="19" y="13" width="2" height="2"/><rect x="23" y="13" width="2" height="2"/><rect x="27" y="13" width="2" height="2"/><rect x="7" y="17" width="2" height="2"/><rect x="11" y="17" width="2" height="2"/><rect  x="15" y="17" width="2" height="2"/><rect  x="19" y="17" width="2" height="2"/><rect  x="23" y="17" width="2" height="2"/><rect  x="27" y="17" width="2" height="2"/><rect  x="27" y="22" width="1.94" height="2"/><rect  x="7" y="22" width="2" height="2"/><rect  x="11.13" y="22" width="13.75" height="2"/>',
  solid:
    '<path d="M32,8H4a2,2,0,0,0-2,2V26a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V10A2,2,0,0,0,32,8ZM19,13h2v2H19Zm0,4h2v2H19Zm-4-4h2v2H15Zm0,4h2v2H15Zm-4-4h2v2H11ZM9,24H7V22H9Zm0-5H7V17H9Zm0-4H7V13H9Zm2,2h2v2H11Zm13.88,7H11.13V22H24.88ZM25,19H23V17h2Zm0-4H23V13h2Zm3.94,9H27V22h1.94ZM29,19H27V17h2Zm0-4H27V13h2Z"/>',
};

export const keyboardIconName = 'keyboard';
export const keyboardIcon: IconShapeTuple = [keyboardIconName, renderIcon(icon)];
