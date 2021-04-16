/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M13,30H5a1,1,0,0,1-1-1V4A2,2,0,0,1,6,2h6a2,2,0,0,1,2,2V29A1,1,0,0,1,13,30ZM6,28h6V4H6Z"/><circle cx="9" cy="7.42" r="1.5"/><path d="M15,34H3a1,1,0,0,1,0-2H15a1,1,0,0,1,0,2Z"/><rect x="7.55" y="12.2" width="3" height="1.6"/><rect x="7.55" y="15.2" width="3" height="1.6"/><rect x="7.55" y="18.2" width="3" height="1.6"/><rect x="16" y="8" width="2" height="1.6"/><rect x="20" y="8" width="2" height="1.6"/><path d="M33,11.8H25a.8.8,0,0,1-.8-.8V5a.8.8,0,0,1,.8-.8h8a.8.8,0,0,1,.8.8v6A.8.8,0,0,1,33,11.8Zm-7.2-1.6h6.4V5.8H25.8Z"/><rect x="16" y="20" width="2" height="1.6"/><rect x="20" y="20" width="2" height="1.6"/><path d="M33,23.8H25a.8.8,0,0,1-.8-.8V17a.8.8,0,0,1,.8-.8h8a.8.8,0,0,1,.8.8v6A.8.8,0,0,1,33,23.8Zm-7.2-1.6h6.4V17.8H25.8Z"/>',

  solid:
    '<path d="M15,32H3a1,1,0,0,0,0,2H15a1,1,0,0,0,0-2Z"/><path d="M5,30h8a1,1,0,0,0,1-1V4a2,2,0,0,0-2-2H6A2,2,0,0,0,4,4V29A1,1,0,0,0,5,30ZM9,5.92a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,9,5.92ZM6,12.2h5.84v1.6H6Zm0,3h5.84v1.6H6Zm0,3h6v1.6H6Z"/><rect x="16" y="8" width="2" height="1.6"/><rect x="20" y="8" width="2" height="1.6"/><path d="M33,4.2H25a.8.8,0,0,0-.8.8v6a.8.8,0,0,0,.8.8h8a.8.8,0,0,0,.8-.8V5A.8.8,0,0,0,33,4.2Zm-.8,6H25.8V5.8h6.4Z"/><rect x="16" y="20" width="2" height="1.6"/><rect x="20" y="20" width="2" height="1.6"/><path d="M33,16.2H25a.8.8,0,0,0-.8.8v6a.8.8,0,0,0,.8.8h8a.8.8,0,0,0,.8-.8V17A.8.8,0,0,0,33,16.2Zm-.8,6H25.8V17.8h6.4Z"/>',
};

export const thinClientIconName = 'thin-client';
export const thinClientIcon: IconShapeTuple = [thinClientIconName, renderIcon(icon)];
