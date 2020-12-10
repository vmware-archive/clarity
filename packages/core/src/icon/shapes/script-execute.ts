/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.38,32a4.54,4.54,0,0,0,.76-2.5V6.5a2.5,2.5,0,0,1,5,0V11H25.22v7.12l2,1v-8h3.92V6.58a4.49,4.49,0,0,0-4.48-4.5h-16a4.49,4.49,0,0,0-4.5,4.48v23a2.5,2.5,0,0,1-2.5,2.5A2.44,2.44,0,0,1,2.88,32v2a3.84,3.84,0,0,0,.76.08h14A4.26,4.26,0,0,1,17,32ZM26.64,4.12a2.49,2.49,0,0,1,2.5,2.46V9.12h-14V6.58a4.54,4.54,0,0,0-.76-2.5Z"/><path d="M32.86,24.39,22.17,18.92a2.17,2.17,0,0,0-1-.24h0A2.17,2.17,0,0,0,19,20.87v11a2.19,2.19,0,0,0,1,1.86,2.12,2.12,0,0,0,1.18.32,2.29,2.29,0,0,0,1-.23l10.68-5.48a2.15,2.15,0,0,0,1.19-1.95A2.2,2.2,0,0,0,32.86,24.39ZM32,26.51,21.27,32a.19.19,0,0,1-.18,0,.17.17,0,0,1-.09-.16v-11a.17.17,0,0,1,.09-.16.14.14,0,0,1,.09,0l.09,0L32,26.17a.19.19,0,0,1,.1.17A.16.16,0,0,1,32,26.51Z"/>',
  solid:
    '<path d="M34,24.94,21.18,18.38A1.5,1.5,0,0,0,19,19.71V32.84a1.5,1.5,0,0,0,2.18,1.34L34,27.61A1.5,1.5,0,0,0,34,24.94Z"/><path d="M17,32H7.38a4.54,4.54,0,0,0,.76-2.5V6.5a2.5,2.5,0,0,1,5,0V11H25.22v7.12l2,1v-8h3.92V6.58a4.49,4.49,0,0,0-4.48-4.5h-16a4.49,4.49,0,0,0-4.5,4.48h0v23a2.5,2.5,0,0,1-2.5,2.5A2.44,2.44,0,0,1,2.88,32v2a3.84,3.84,0,0,0,.76.08H17.23A3.41,3.41,0,0,1,17,32.84ZM26.64,4.12a2.49,2.49,0,0,1,2.5,2.46V9.12h-14V6.58a4.54,4.54,0,0,0-.76-2.5Z"/>',
};

export const scriptExecuteIconName = 'script-execute';
export const scriptExecuteIcon: IconShapeTuple = [scriptExecuteIconName, renderIcon(icon)];
