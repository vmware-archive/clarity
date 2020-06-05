/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM6,30V6H30V30Z"/><rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2"/><rect x="20" y="22" width="2" height="2"/><rect x="24" y="22" width="2" height="2"/><path d="M27.22,10H20v4a.8.8,0,1,0,1.59,0V11.6h5.63a.8.8,0,1,0,0-1.6Z"/><rect x="8.81" y="10" width="8.14" height="2"/><rect x="8.81" y="14" width="8.14" height="2"/><rect x="8.81" y="18" width="8.14" height="2"/><rect x="8.81" y="22" width="8.14" height="2"/><rect x="8.81" y="26" width="8.14" height="2"/>',

  outlineAlerted:
    '<rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2"/><rect x="20" y="22" width="2" height="2"/><rect x="24" y="22" width="2" height="2"/><rect x="8.81" y="10" width="8.14" height="2"/><rect x="8.81" y="14" width="8.14" height="2"/><rect x="8.81" y="18" width="8.14" height="2"/><rect x="8.81" y="22" width="8.14" height="2"/><rect x="8.81" y="26" width="8.14" height="2"/><path d="M30,15.4V30H6V6H21.27l1.18-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V15.4Z"/>',

  outlineBadged:
    '<rect x="20" y="18" width="2" height="2"/><rect x="24" y="18" width="2" height="2"/><rect x="20" y="22" width="2" height="2"/><rect x="24" y="22" width="2" height="2"/><rect x="8.81" y="10" width="8.14" height="2"/><rect x="8.81" y="14" width="8.14" height="2"/><rect x="8.81" y="18" width="8.14" height="2"/><rect x="8.81" y="22" width="8.14" height="2"/><rect x="8.81" y="26" width="8.14" height="2"/><path d="M20,14a.8.8,0,1,0,1.59,0V11.6H25A7.74,7.74,0,0,1,23.66,10H20Z"/><path d="M30,13.5h0V30H6V6H22.5V6a7.37,7.37,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V13.22A7.37,7.37,0,0,1,30,13.5Z"/>',

  solid:
    '<path d="M30,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V6A2,2,0,0,0,30,4ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Zm0-6H20V10h6Z"/>',

  solidAlerted:
    '<path d="M22.23,15.4a3.68,3.68,0,0,1-3.18-5.51L22.45,4H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V15.4ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Z"/>',

  solidBadged:
    '<path d="M30,13.5a7.49,7.49,0,0,1-4-1.16V14H20V10h3.66A7.49,7.49,0,0,1,22.5,6a7.37,7.37,0,0,1,.28-2H6A2,2,0,0,0,4,6V30a2,2,0,0,0,2,2H7.88v1.57a1,1,0,0,0,2,0V32h16v1.57a1,1,0,0,0,2,0V32H30a2,2,0,0,0,2-2V13.22A7.37,7.37,0,0,1,30,13.5ZM17,28H8.81V26H17Zm0-4H8.81V22H17Zm0-4H8.81V18H17Zm0-4H8.81V14H17Zm0-4H8.81V10H17ZM22,24H20V22h2Zm0-4H20V18h2Zm4,4H24V22h2Zm0-4H24V18h2Z"/>',
};

export const mediaChangerIconName = 'media-changer';
export const mediaChangerIcon: IconShapeTuple = [mediaChangerIconName, renderIcon(icon)];
