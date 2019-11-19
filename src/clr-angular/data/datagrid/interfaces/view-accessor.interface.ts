/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { EmbeddedViewRef } from '@angular/core';

// This is the interface that will be implemented by any component that accesses its view (EmbeddedViewRef).
// Those components are currently ClrDatagridColumn, ClrDatagridCell, and ClrDatagridRow.
export interface ViewAccessor {
  _view: EmbeddedViewRef<void>;
  order?: number;
  userDefinedOrder?: number;
}
