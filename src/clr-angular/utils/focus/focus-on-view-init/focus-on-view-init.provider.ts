/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { InjectionToken } from '@angular/core';

export const FOCUS_ON_VIEW_INIT = new InjectionToken<boolean>('FOCUS_ON_VIEW_INIT');

// This provider holds the default value for clrFocusOnViewInit directive's isEnabled property.
// So users can interject this provider and set their own value for this provider.
export const FOCUS_ON_VIEW_INIT_PROVIDER = {
  provide: FOCUS_ON_VIEW_INIT,
  useValue: true,
};
