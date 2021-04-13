/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { InjectionToken } from '@angular/core';

let NB_INSTANCES = 0;

export const UNIQUE_ID = new InjectionToken<string>('UNIQUE_ID');

export function uniqueIdFactory() {
  return 'clr-id-' + NB_INSTANCES++;
}

export const UNIQUE_ID_PROVIDER = {
  provide: UNIQUE_ID,
  useFactory: uniqueIdFactory,
};
