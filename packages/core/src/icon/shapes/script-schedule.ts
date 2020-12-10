/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M7.38,32a4.54,4.54,0,0,0,.76-2.5V6.5a2.5,2.5,0,0,1,5,0V11H25.22v3.07a11.37,11.37,0,0,1,2,.3v-3.3h3.92V6.58a4.49,4.49,0,0,0-4.48-4.5h-16a4.49,4.49,0,0,0-4.5,4.48h0v23a2.5,2.5,0,0,1-2.5,2.5h0A2.57,2.57,0,0,1,2.88,32v2a3.84,3.84,0,0,0,.76.08H19a10.92,10.92,0,0,1-2.34-2ZM26.64,4.12a2.49,2.49,0,0,1,2.5,2.46V9.12h-14V6.58a4.54,4.54,0,0,0-.76-2.5Z"/></g><g id="Layer_5" data-name="Layer 5"><path d="M24.88,33.88a9,9,0,1,1,9-9h0A9,9,0,0,1,24.88,33.88Zm0-16a7,7,0,1,0,7,7,7,7,0,0,0-7-7Z"/><polygon points="29.12 25.92 24 25.92 24 20 26 20 26 24 29.12 24 29.12 25.92"/>',
  solid:
    '<path d="M7.38,32a4.54,4.54,0,0,0,.76-2.5V6.5a2.5,2.5,0,0,1,5,0V11H25.22v3.07a11.37,11.37,0,0,1,2,.3v-3.3h3.92V6.58a4.49,4.49,0,0,0-4.48-4.5h-16a4.49,4.49,0,0,0-4.5,4.48h0v23a2.5,2.5,0,0,1-2.5,2.5A2.57,2.57,0,0,1,2.88,32v2a3.84,3.84,0,0,0,.76.08H19a10.92,10.92,0,0,1-2.34-2ZM26.64,4.12a2.49,2.49,0,0,1,2.5,2.46V9.12h-14V6.58a4.54,4.54,0,0,0-.76-2.5Z"/><path d="M24.88,15.88a9,9,0,1,0,9,9h0A9,9,0,0,0,24.88,15.88ZM29.46,27H24V20h2v5h3.46Z"/>',
};

export const scriptScheduleIconName = 'script-schedule';
export const scriptScheduleIcon: IconShapeTuple = [scriptScheduleIconName, renderIcon(icon)];
