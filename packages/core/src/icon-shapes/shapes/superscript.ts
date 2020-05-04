/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M14.43,18l6.79,8.6a1.17,1.17,0,0,1-.92,1.9h0a1.17,1.17,0,0,1-.92-.44l-6.44-8.13L6.47,28a1.17,1.17,0,0,1-.92.44h0a1.17,1.17,0,0,1-.92-1.9L11.43,18l-6.8-8.6a1.17,1.17,0,0,1,.92-1.9h0A1.2,1.2,0,0,1,6.51,8l6.43,8.13L19.38,8a1.17,1.17,0,0,1,.92-.44h0a1.17,1.17,0,0,1,.92,1.9Z"/><path d="M22.85,14.47l4.51-3.85a9.37,9.37,0,0,0,1.88-2,3.43,3.43,0,0,0,.59-1.86,2.27,2.27,0,0,0-.36-1.27,2.38,2.38,0,0,0-.95-.83,2.77,2.77,0,0,0-1.26-.29,3.39,3.39,0,0,0-1.83.5,5.83,5.83,0,0,0-1.49,1.42l-1-.81a5.12,5.12,0,0,1,4.36-2.37,4.36,4.36,0,0,1,2,.45,3.47,3.47,0,0,1,2,3.18A4.44,4.44,0,0,1,30.58,9a11.14,11.14,0,0,1-2.24,2.46L25.1,14.31h6.28v1.33H22.85Z"/>',
};

export const superscriptIconName = 'superscript';
export const superscriptIcon: IconShapeTuple = [superscriptIconName, renderIcon(icon)];
