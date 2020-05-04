/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M33,18H28.75l.5-2H33a1,1,0,0,0,0-2H29.74l2.17-8.76A1,1,0,0,0,30,4.76L27.68,14H21.31L19,4.76a1,1,0,0,0-1.94,0L14.79,14H8.42L6.13,4.76a1,1,0,0,0-1.94.48L6.36,14H3a1,1,0,0,0,0,2H6.85l.5,2H3a1,1,0,0,0,0,2H7.84l2.79,11.24a1,1,0,0,0,1.94,0L15.36,20h5.38l2.79,11.24a1,1,0,0,0,1.94,0L28.25,20H33a1,1,0,0,0,0-2Zm-5.82-2-.5,2H22.3l-.5-2ZM18,9.16,19.25,14h-2.4ZM8.91,16h5.38l-.5,2H9.41ZM11.6,26.84,9.91,20H13.3ZM15.85,18l.5-2h3.39l.5,2Zm8.64,8.84L22.8,20h3.39Z"/>',
  solid:
    '<polygon points="17.74 16 17.22 18 18.85 18 18.32 16 17.74 16"/><polygon points="11.94 18 14.63 18 15.16 16 11.41 16 11.94 18"/><polygon points="13.29 23.1 14.1 20 12.47 20 13.29 23.1"/><polygon points="21.44 18 24.13 18 24.66 16 20.91 16 21.44 18"/><polygon points="22.78 23.1 23.6 20 21.97 20 22.78 23.1"/><path d="M18,2A16,16,0,1,0,34,18,16,16,0,0,0,18,2ZM29,20H26.19L24,28.32a1.25,1.25,0,0,1-2.42,0L19.38,20H16.69l-2.19,8.32a1.25,1.25,0,0,1-2.42,0L9.88,20H7a1,1,0,0,1,0-2H9.35l-.53-2H7a1,1,0,0,1,0-2H8.3l-1-3.68a1.25,1.25,0,0,1,2.42-.64L10.88,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42,0L20.38,14h4.8l1.14-4.32a1.25,1.25,0,0,1,2.42.64l-1,3.68H29a1,1,0,0,1,0,2H27.24l-.53,2H29a1,1,0,0,1,0,2Z"/>',
};

export const wonIconName = 'won';
export const wonIcon: IconShapeTuple = [wonIconName, renderIcon(icon)];
