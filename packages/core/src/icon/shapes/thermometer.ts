/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M19,23.17V11.46H17V23.2a3,3,0,1,0,2,0Z"/><path d="M26,15a1,1,0,0,0,0-2H23.92V11H26a1,1,0,0,0,0-2H23.92V8a6,6,0,0,0-12,0V20.81a8,8,0,1,0,12-.2V19H26a1,1,0,0,0,0-2H23.92V15ZM24,26a6,6,0,1,1-10.36-4.12l.27-.29V8a4,4,0,0,1,8,0V21.44l.3.29A6,6,0,0,1,24,26Z"/>',
};

export const thermometerIconName = 'thermometer';
export const thermometerIcon: IconShapeTuple = [thermometerIconName, renderIcon(icon)];
