/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,30H4a2,2,0,0,1-2-2V8A2,2,0,0,1,4,6H32a2,2,0,0,1,2,2V28A2,2,0,0,1,32,30ZM4,8V28H32V8Z"/><path d="M9,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,9,25.3Z"/><path d="M14.92,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,14.92,25.3Z"/><path d="M21,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,21,25.3Z"/><path d="M27,25.3a.8.8,0,0,1-.8-.8v-13a.8.8,0,0,1,1.6,0v13A.8.8,0,0,1,27,25.3Z"/>',
  solid:
    '<path d="M32,6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM9.63,24.23a.79.79,0,0,1-.81.77A.79.79,0,0,1,8,24.23V11.77A.79.79,0,0,1,8.82,11a.79.79,0,0,1,.81.77Zm6,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Zm6.21,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Zm6.12,0a.79.79,0,0,1-.82.77.79.79,0,0,1-.81-.77V11.77a.79.79,0,0,1,.81-.77.79.79,0,0,1,.82.77Z"/>',
};

export const containerIconName = 'container';
export const containerIcon: IconShapeTuple = [containerIconName, renderIcon(icon)];
