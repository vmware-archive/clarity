/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, ViewContainerRef, ViewRef } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ColumnsService } from './columns.service';
import { DatagridColumnChanges } from '../enums/column-changes.enum';

let nbColumnsGroup = 0;

@Injectable()
export class ColumnReorderService {
  // the common group id that will be shared across
  // Datagrids all reorder draggable and droppables
  private _columnsGroupId: string;

  constructor(private columnsService: ColumnsService) {
    this._columnsGroupId = 'dg-column-group-' + nbColumnsGroup++;
  }

  private reorderQueue: number[] = [];

  private _reorderRequested: Subject<number[]> = new Subject<number[]>();

  private _reorderCompleted: Subject<void> = new Subject<void>();

  private processReorderRequest(draggedFrom: number, draggedTo: number): void {
    // Also, the method queues all order change spec. Why do we queue each order's change spec?
    // Because we cannot order one by one as we would lose the original order and mess up the reordering process.
    // Before changing any column's order, we should first determine how each column's order should change first
    // and then finally emit reorder specs array at once. The ClrDatagrid component subscribes to reorder specs event
    // and applies the reorder specs to its columns.

    this.reorderQueue = [];
    if (draggedTo > draggedFrom) {
      // Dragged to the right so each in-between columns should decrement their flex orders
      for (let i = draggedFrom + 1; i <= draggedTo; i++) {
        this.reorderQueue[i] = i - 1;
      }
    } else if (draggedTo < draggedFrom) {
      // Dragged to the left so each in-between columns should decrement their flex orders
      for (let i = draggedFrom - 1; i >= draggedTo; i--) {
        this.reorderQueue[i] = i + 1;
      }
    }
    this.reorderQueue[draggedFrom] = draggedTo;
    // After queueing all required specs, emit what kind of reorder is requested
    if (this.reorderQueue.length > 0) {
      this._reorderRequested.next(this.reorderQueue);
    }
  }

  private hasDiffWith(newOrders: number[]): boolean {
    if (!this.orders) {
      return true;
    }
    if (!newOrders) {
      return false;
    }
    if (this.orders.length !== newOrders.length) {
      return true;
    }
    return newOrders.filter((newOrder, index) => newOrder !== this.orders[index]).length > 0;
  }

  // ClrDatagrid updates this array of order values after re-ordering happens.
  // Then, rows will change their cell position according to its order values in this array.
  // So when re-ordering happens, we broadcast through "reorderCompleted" subject to notify rows.
  orders: number[];

  containerRef: ViewContainerRef;

  get columnsGroupId() {
    return this._columnsGroupId;
  }

  get reorderRequested(): Observable<number[]> {
    return this._reorderRequested.asObservable();
  }

  get reorderCompleted(): Observable<void> {
    return this._reorderCompleted.asObservable();
  }

  // The following method is called by column ClrDatagridColumn when one column is dropped on another.
  public reorderViews(draggedView: ViewRef, targetView: ViewRef): void {
    const draggedFrom = this.containerRef.indexOf(draggedView);
    const draggedTo = this.containerRef.indexOf(targetView);
    this.processReorderRequest(draggedFrom, draggedTo);
  }

  // The following method will be called by ClrDatagrid, after it finishes applying order changes, to broadcast to
  // all cells how column orders are updated and then cells will start applying changed orders.
  public updateOrders(orders: number[], onReordering = false): void {
    if (orders && orders.length > 0 && this.hasDiffWith(orders)) {
      // update with new orders
      this.orders = orders;

      // update the columns states with their new orders
      this.orders.forEach((order, index) => {
        this.columnsService.emitStateChangeAt(index, { changes: [DatagridColumnChanges.ORDER], order: order });
      });

      // notify whatever that needs to respond to reorder changes
      if (onReordering) {
        this._reorderCompleted.next();
      }

      this.columnsService.requestFirstVisibleChangeCheck();
      this.columnsService.requestLastVisibleChangeCheck();
    }
  }

  public orderAt(index: number): number {
    if (this.orders && typeof this.orders[index] === 'number') {
      return this.orders[index];
    }
    return -1;
  }
}
