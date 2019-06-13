/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { EmbeddedViewRef, Injectable, ViewContainerRef } from '@angular/core';

// This is the interface that will be implemented by any component that accesses its view (EmbeddedViewRef).
// Those components are currently ClrDatagridColumn, ClrDatagridCell, and ClrDatagridRow.
export interface ViewAccessor {
  _view: EmbeddedViewRef<void>;
  order?: number;
}

// ViewManagerService is a service class that contains utility methods for managing views.
@Injectable()
export class ViewManagerService {
  detachAllViews(containerRef: ViewContainerRef): void {
    for (let i = containerRef.length; i > 0; i--) {
      containerRef.detach();
    }
  }

  insertAllViews(containerRef: ViewContainerRef, viewAccessors: ViewAccessor[], ordered = false): void {
    if (ordered) {
      this.setInUniqOrders(viewAccessors).forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    } else {
      viewAccessors.forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    }
  }

  private setInUniqOrders(viewAccessors: ViewAccessor[]): ViewAccessor[] {
    return viewAccessors
      .sort((viewAccessor1, viewAccessor2) => viewAccessor1.order - viewAccessor2.order)
      .map((viewAccessor, index) => {
        viewAccessor.order = index;
        return viewAccessor;
      });
  }
}
