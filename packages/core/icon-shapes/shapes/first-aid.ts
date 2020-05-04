/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M32,6H23.91V4.5A2.5,2.5,0,0,0,21.41,2h-7a2.5,2.5,0,0,0-2.5,2.5V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM13.91,4.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V6h-8ZM4,28V8H32V28Z"/><path d="M20.15,25.2H16.74a1.3,1.3,0,0,1-1.3-1.3V21.2h-2.7a1.3,1.3,0,0,1-1.3-1.3V16.5a1.3,1.3,0,0,1,1.3-1.3h2.7V12.5a1.3,1.3,0,0,1,1.3-1.3h3.41a1.3,1.3,0,0,1,1.29,1.3v2.7h2.71a1.3,1.3,0,0,1,1.29,1.3v3.4a1.3,1.3,0,0,1-1.29,1.3H21.44v2.7A1.3,1.3,0,0,1,20.15,25.2ZM17,23.6h2.81v-4h4V16.8h-4v-4H17v4H13v2.8h4Zm7.11-6.8Z"/>',
  solid:
    '<path d="M32,6H23.91V4.5A2.5,2.5,0,0,0,21.41,2h-7a2.5,2.5,0,0,0-2.5,2.5V6H4A2,2,0,0,0,2,8V28a2,2,0,0,0,2,2H32a2,2,0,0,0,2-2V8A2,2,0,0,0,32,6ZM13.91,4.5a.5.5,0,0,1,.5-.5h7a.5.5,0,0,1,.5.5V6h-8ZM24.64,19.9a.5.5,0,0,1-.5.5h-3.5v3.5a.5.5,0,0,1-.5.5h-3.4a.5.5,0,0,1-.5-.5V20.4h-3.5a.5.5,0,0,1-.5-.5V16.5a.5.5,0,0,1,.5-.5h3.5V12.5a.5.5,0,0,1,.5-.5h3.4a.5.5,0,0,1,.5.5V16h3.5a.5.5,0,0,1,.5.5Z"/>',
};

export const firstAidIconName = 'first-aid';
export const firstAidIcon: IconShapeTuple = [firstAidIconName, renderIcon(icon)];
