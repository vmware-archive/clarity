/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, ViewContainerRef } from '@angular/core';
import { ViewAccessor } from '../interfaces/view-accessor.interface';

// ViewManagerUtils is a utility class that contains methods for managing views.
export class ViewManagerUtils {
  public static detachAllViews(containerRef: ViewContainerRef): void {
    for (let i = containerRef.length; i > 0; i--) {
      containerRef.detach();
    }
  }

  public static reorderViews(containerRef: ViewContainerRef, viewAccessors: ViewAccessor[]) {
    this.prioritizeByOrder(viewAccessors).forEach(viewAccessor => {
      if (containerRef.indexOf(viewAccessor._view) !== viewAccessor.order) {
        containerRef.move(viewAccessor._view, viewAccessor.order);
      }
    });
  }

  public static insertAllViews(
    containerRef: ViewContainerRef,
    viewAccessors: ViewAccessor[],
    prioritized = false
  ): void {
    if (prioritized) {
      this.prioritizeByOrder(viewAccessors).forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    } else {
      viewAccessors.forEach(viewAccessor => containerRef.insert(viewAccessor._view));
    }
  }

  private static prioritizeByOrder(viewAccessors: ViewAccessor[]): ViewAccessor[] {
    // As an example, this method would turn the following array:
    // [ {view: _view, order: 1}, {view: _view, order: 2}, {view: _view, order: 0} ] into
    // [ {view: _view, order: 0}, {view: _view, order: 1}, {view: _view, order: 2} ].
    return viewAccessors
      .sort((viewAccessor1: ViewAccessor, viewAccessor2: ViewAccessor) => {
        // The most straightforward case where both columns have different order values
        // so we can directly sort them
        if (viewAccessor1.order > viewAccessor2.order) {
          return 1;
        } else if (viewAccessor1.order < viewAccessor2.order) {
          return -1;
        }

        // The following lines are for handling columns that have the same conflicting order values.
        // The same conflicting order values emerge when new columns gets added to existing columns.
        if (viewAccessor1.userDefinedOrder === viewAccessor2.userDefinedOrder) {
          // If two columns have the same conflicting user defined order,
          // order them by their QueryList position.
          if (viewAccessor1.order === viewAccessors.indexOf(viewAccessor1)) {
            return -1;
          } else if (viewAccessor2.order === viewAccessors.indexOf(viewAccessor2)) {
            return 1;
          }
        } else {
          // A newly added column WITH a user defined order
          // should be prioritized and inserted at that order.
          if (viewAccessor2.order === viewAccessor1.userDefinedOrder) {
            return -1;
          } else if (viewAccessor1.order === viewAccessor2.userDefinedOrder) {
            return 1;
          }
        }

        // A newly added column WITHOUT a user defined order should be prioritized
        // and inserted at its position in QueryList.toArray().
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
