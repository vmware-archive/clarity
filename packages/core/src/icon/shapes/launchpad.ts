/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { IconShapeTuple } from '../interfaces/icon.interfaces.js';

const icon = {
  outline:
    '<path d="M28,34H8a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M18,9.53a2.75,2.75,0,1,0,2.75,2.75A2.75,2.75,0,0,0,18,9.53Zm0,3.89a1.15,1.15,0,0,1,0-2.29,1.15,1.15,0,1,1,0,2.29Z"/><path d="M28.75,22.45a15.46,15.46,0,0,0-2.85-5.52l-.28-.35c0-.34,0-.68-.05-1C24.89,4.36,18.79.6,18.54.44a1,1,0,0,0-1,0c-.26.16-6.35,3.92-7,15.1,0,.32,0,.65-.05,1l-.33.41A15.6,15.6,0,0,0,6.72,28.09a1,1,0,0,0,1,.91h4.43a16.31,16.31,0,0,0,1,2.5,1,1,0,0,0,.87.51H22a1,1,0,0,0,.87-.51,16,16,0,0,0,1-2.5h4.39a1,1,0,0,0,1-.91A15.55,15.55,0,0,0,28.75,22.45ZM21.37,30H14.68a25.46,25.46,0,0,1-1.59-5.23l-2,.4c.14.65.28,1.25.43,1.82H8.66a13.18,13.18,0,0,1,1.8-7c0,.55.07,1.1.13,1.66l2-.21a33.88,33.88,0,0,1-.11-5.77C13,7.35,16.65,3.64,18,2.53c1.38,1.12,5.05,4.82,5.56,13.15A32.86,32.86,0,0,1,21.37,30Zm3.12-3a37.19,37.19,0,0,0,1.09-6.94A13.17,13.17,0,0,1,27.34,27Z"/>',
  solid:
    '<path d="M18,15.54A3.29,3.29,0,0,1,18,9v1.6a1.69,1.69,0,1,0,0,3.38Z"/><path d="M28,34H8a1,1,0,0,0,0,2H28a1,1,0,0,0,0-2Z"/><path d="M17.94,10.56h0v3.38h0a1.69,1.69,0,0,0,0-3.38Z"/><path d="M28.75,22.45a15.46,15.46,0,0,0-2.85-5.52l-.38-.47c0-.3,0-.61,0-.91C24.79,4.36,18.7.6,18.44.44a1,1,0,0,0-1,0c-.26.16-6.35,3.92-7,15.1,0,.36,0,.73-.05,1.1l-.23.29A15.6,15.6,0,0,0,6.72,28.09a1,1,0,0,0,1,.91h4.34a15.5,15.5,0,0,0,1,2.5A1,1,0,0,0,14,32h7.92a1,1,0,0,0,.87-.51,15.11,15.11,0,0,0,1-2.5h4.49a1,1,0,0,0,1-.91A15.55,15.55,0,0,0,28.75,22.45ZM17.94,15.54h0V30H14.58A25,25,0,0,1,13,24.78l-2,.4c.13.65.27,1.25.42,1.82H8.66a13.23,13.23,0,0,1,1.71-6.86c0,.5.08,1,.13,1.51l2-.21a31.94,31.94,0,0,1-.11-5.77c.51-8.32,4.17-12,5.55-13.14h0V9h0a3.29,3.29,0,0,1,0,6.58ZM24.39,27a36.15,36.15,0,0,0,1.11-7.1A13.34,13.34,0,0,1,27.34,27Z"/>',
};

export const launchpadIconName = 'launchpad';
export const launchpadIcon: IconShapeTuple = [launchpadIconName, renderIcon(icon)];
