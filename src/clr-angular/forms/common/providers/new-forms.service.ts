/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { InjectionToken } from '@angular/core';

export const IS_NEW_FORMS_LAYOUT = new InjectionToken<boolean>('IS_NEW_FORMS_LAYOUT');
export const IS_NEW_FORMS_LAYOUT_TRUE_PROVIDER = {
  provide: IS_NEW_FORMS_LAYOUT,
  useValue: true,
};
