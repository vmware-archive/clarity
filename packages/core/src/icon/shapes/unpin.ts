/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M3.24 5.53L11.71 14a10.94 10.94 0 00-8.3 3.11 1 1 0 000 1.41l6.33 6.33-7.45 7.44a1 1 0 101.3 1.52l.11-.11 7.44-7.44 6.33 6.33a1 1 0 001.42 0 11 11 0 003.1-8.3l8.34 8.34 1.41-1.41L4.65 4.12zm14.89 24.91L5.58 17.87a9 9 0 018.65-1.34l5.25 5.25a9 9 0 01-1.35 8.66zM33.71 14.89L21.11 2.3a1 1 0 00-1.41 1.41L32.29 16.3a1 1 0 001.42-1.41zM22.425 18.85l4.695-4.695 1.407 1.407-4.695 4.695zM20.44 7.48l-4.7 4.7 1.42 1.42 4.71-4.71z"/>',
  solid:
    '<path d="M3.24 5.53l8.59 8.59a10.91 10.91 0 00-8.42 3.1 1 1 0 000 1.41L9.73 25l-7.44 7.41a1 1 0 001.3 1.52l.11-.11 7.44-7.44 6.33 6.33a1 1 0 001.42 0A11 11 0 0022 24.28l8.34 8.34 1.41-1.41L4.65 4.12zM33.71 15L21.11 2.41a1 1 0 00-1.41 1.41l12.59 12.6a1 1 0 00.71.29 1 1 0 00.72-.3 1 1 0 00-.01-1.41zM15.807 12.236l4.638-4.638 8.083 8.082-4.639 4.639z"/>',
};

export const unpinIconName = 'unpin';
export const unpinIcon: IconShapeTuple = [unpinIconName, renderIcon(icon)];
