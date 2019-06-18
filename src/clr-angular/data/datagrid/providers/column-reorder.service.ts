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

export interface ReorderRequest {
  sourceOrder: number;
  targetOrder: number;
}

@Injectable()
export class ColumnReorderService {
  // the common group id that will be shared across
  // Datagrids all reorder draggable and droppables
  private _columnsGroupId: string;

  constructor(private columnsService: ColumnsService) {
    this._columnsGroupId = 'dg-column-group-' + nbColumnsGroup++;
  }

  private _reorderRequested: Subject<ReorderRequest> = new Subject<ReorderRequest>();

  orders: number[];

  containerRef: ViewContainerRef;

  get columnsGroupId() {
    return this._columnsGroupId;
  }

  get reorderRequested(): Observable<ReorderRequest> {
    return this._reorderRequested.asObservable();
  }

  // The following method is called by column ClrDatagridColumn when one column is dropped on another.
  reorderViews(sourceView: ViewRef, targetView: ViewRef): void {
    const sourceOrder = this.containerRef.indexOf(sourceView);
    const targetOrder = this.containerRef.indexOf(targetView);
    this.requestReorder(sourceOrder, targetOrder);
  }

  requestReorder(sourceOrder: number, targetOrder: number) {
    this._reorderRequested.next({ sourceOrder, targetOrder });
  }

  // The following method will be called by ClrDatagrid after it finishes applying order changes
  updateOrders(orders: number[]): void {
    if (orders && orders.length > 0 && this.hasDiffWith(orders)) {
      // update with new orders
      this.orders = orders;

      // update the columns states with their new orders
      this.orders.forEach((order, index) => {
        this.columnsService.emitStateChangeAt(index, { changes: [DatagridColumnChanges.ORDER], order: order });
      });

      this.columnsService.requestFirstVisibleChangeCheck();
      this.columnsService.requestLastVisibleChangeCheck();
    }
  }

  orderAt(index: number): number {
    if (this.orders && typeof this.orders[index] === 'number') {
      return this.orders[index];
    }
    return -1;
  }

  private hasDiffWith(newOrders: number[]): boolean {
    // Initially this.orders is undefined
    // so there will be definitely diff as long as newOrders has items
    if (!this.orders && newOrders && newOrders.length > 0) {
      return true;
    }
    if (!newOrders) {
      return false;
    }
    if (this.orders.length !== newOrders.length) {
      return true;
    }
    return newOrders.some((newOrder, index) => newOrder !== this.orders[index]);
  }
}
