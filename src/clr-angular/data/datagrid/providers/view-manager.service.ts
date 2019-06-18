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
  userDefinedOrder?: number;
}

// ViewManagerService is a service class that contains utility methods for managing views.
@Injectable()
export class ViewManagerService {
  detachAllViews(containerRef: ViewContainerRef): void {
    for (let i = containerRef.length; i > 0; i--) {
      containerRef.detach();
    }
  }

  insertAllViews(containerRef: ViewContainerRef, viewAccessors: ViewAccessor[], prioritized = false): void {
    if (prioritized) {
      this.prioritizeByOrder(viewAccessors).forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    } else {
      viewAccessors.forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    }
  }

  private prioritizeByOrder(viewAccessors: ViewAccessor[]): ViewAccessor[] {
    // As an example, this method would turn the following array:
    // [ {view: _view, order: 1}, {view: _view, order: 2}, {view: _view, order: 0} ] into
    // [ {view: _view, order: 0}, {view: _view, order: 1}, {view: _view, order: 2} ].
    // The lower the order value a View Accessor Component has, the higher the priority it will have.
    // The higher the priority it has, the earlier it will be placed in the array.
    return viewAccessors
      .sort((viewAccessor1: ViewAccessor, viewAccessor2: ViewAccessor) => {
        if (viewAccessor1.order > viewAccessor2.order) {
          return 1;
        } else if (viewAccessor1.order < viewAccessor2.order) {
          return -1;
        }

        if (viewAccessor1.order === viewAccessor1.userDefinedOrder) {
          return -1;
        } else if (viewAccessor2.order === viewAccessor2.userDefinedOrder) {
          return 1;
        }

        if (viewAccessor1.order === viewAccessors.indexOf(viewAccessor1)) {
          return -1;
        } else if (viewAccessor2.order === viewAccessors.indexOf(viewAccessor2)) {
          return 1;
        }

        return 0;
      })
      .map((viewAccessor: ViewAccessor, index: number) => {
        viewAccessor.order = index;
        return viewAccessor;
      });
  }
}
