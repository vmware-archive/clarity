/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Type } from '@angular/core';
import { UNIQUE_ID_PROVIDER } from '../../id-generator/id-generator.service';
import { FocusableItem } from './focusable-item';

export function customFocusableItemProvider<T>(implementation: Type<T>) {
  return [
    UNIQUE_ID_PROVIDER,
    implementation,
    {
      provide: FocusableItem,
      useExisting: implementation,
    },
  ];
}
