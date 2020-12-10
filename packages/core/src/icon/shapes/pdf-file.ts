/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M22.89,2H8.83A1.88,1.88,0,0,0,7,3.91V15H9V4H21v8h8V32H9V27H7v5.09A1.88,1.88,0,0,0,8.83,34H29.17A1.88,1.88,0,0,0,31,32.09V9.92ZM23,10V4.1L29,10Z"/><path d="M9.45,19.7A2.73,2.73,0,0,0,6.7,17H3v8H4.67V22.4H6.51a2.72,2.72,0,0,0,2.93-2.51A1.21,1.21,0,0,0,9.45,19.7ZM6.33,20.83H4.67V18.57H6.33c.83,0,1.39.44,1.39,1.13S7.16,20.83,6.33,20.83Z"/><path d="M17.82,21c0-2.34-1.86-4-4.48-4H10.55v8h2.79C16,25,17.82,23.33,17.82,21Zm-4.26,2.45H12.22V18.56h1.34a2.44,2.44,0,0,1,0,4.88h0Z"/><polygon points="25.11 18.55 25.11 17 19.1 17 19.1 25 20.78 25 20.78 21.83 24.7 21.83 24.7 20.28 20.78 20.28 20.78 18.55 25.11 18.55"/>',
  solid:
    '<path d="M14.56,19.56H13.22v4.88h1.34a2.44,2.44,0,0,0,0-4.88Z"/><path d="M7.33,19.57H5.67v2.26H7.33c.83,0,1.39-.44,1.39-1.13S8.16,19.57,7.33,19.57Z"/><path d="M21.89,2H7.83A1.88,1.88,0,0,0,6,3.91V14H8V4H20v8h8v4H3a1,1,0,0,0-1,1V27a1,1,0,0,0,1,1H28v4H8V30H6v2.09A1.88,1.88,0,0,0,7.83,34H28.17A1.88,1.88,0,0,0,30,32.09V9.92ZM7.51,23.4H5.67V26H4V18H7.51A2.71,2.71,0,0,1,8,23.4,3.68,3.68,0,0,1,7.51,23.4ZM14.34,26H11.55V18h2.79c2.62,0,4.48,1.65,4.48,4S17,26,14.34,26Zm11.77-6.45H21.78v1.73H25.7v1.55H21.78V26H20.1V18h6ZM22,10V4.1L28,10Z"/>',
};

export const pdfFileIconName = 'pdf-file';
export const pdfFileIcon: IconShapeTuple = [pdfFileIconName, renderIcon(icon)];
