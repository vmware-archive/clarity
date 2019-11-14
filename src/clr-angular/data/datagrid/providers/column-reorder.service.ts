/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable, ViewContainerRef, ViewRef } from '@angular/core';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { ColumnsService } from './columns.service';
import { DatagridColumnChanges } from '../enums/column-changes.enum';
import { ClrDragEvent } from '../../../utils/drag-and-drop/drag-event';
import { first } from 'rxjs/operators';

let nbColumnsGroup = 0;

export interface ReorderRequest {
  sourceOrder: number;
  targetOrder: number;
}

export type ReorderAnimRequest = ReorderRequest & ClrDragEvent<ViewRef>;

@Injectable()
export class ColumnReorderService {
  // the common group id that will be shared across
  // Datagrids all reorder draggable and droppables
  private _columnsGroupId: string;

  constructor(private columnsService: ColumnsService) {
    this._columnsGroupId = 'dg-column-group-' + nbColumnsGroup++;
  }

  orders: number[];

  private _ordersChange: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  private _reorderRequested: Subject<ReorderRequest> = new Subject<ReorderRequest>();
  private _reorderAnimRequested: Subject<ReorderAnimRequest> = new Subject<ReorderAnimRequest>();

  containerRef: ViewContainerRef;

  get columnsGroupId(): string {
    return this._columnsGroupId;
  }

  get ordersChange(): Observable<boolean> {
    return this._ordersChange.asObservable();
  }

  get reorderRequested(): Observable<ReorderRequest> {
    return this._reorderRequested.asObservable();
  }

  get reorderAnimRequested(): Observable<ReorderAnimRequest> {
    return this._reorderAnimRequested.asObservable();
  }

  // The following method is called by column ClrDatagridColumn when one column is dropped on another.
  reorderViews(sourceView: ViewRef, targetView: ViewRef, dropEvent: ClrDragEvent<ViewRef>): void {
    const sourceOrder = this.containerRef.indexOf(sourceView);
    const targetOrder = this.containerRef.indexOf(targetView);
    this.requestReorder(sourceOrder, targetOrder);
    this._reorderAnimRequested.next({ sourceOrder, targetOrder, ...dropEvent });
  }

  requestReorder(sourceOrder: number, targetOrder: number) {
    this._reorderRequested.next({ sourceOrder, targetOrder });
  }

  // The following method will be called by ClrDatagrid after it finishes applying order changes
  updateOrders(orders: number[], byReordering = false): void {
    if (orders && orders.length > 0 && this.hasDiffWith(orders)) {
      // update with new orders
      this.orders = orders;
      // update their states on their new orders as well
      this.updateColumnStatesWithNewOrders();

      // emit order changes/updates so other components such as cells could respond to it.
      // we need to pass boolean value to indicate whether other changes were caused by reordering.
      this._ordersChange.next(byReordering);
    }
  }

  orderAt(index: number): number {
    if (this.orders && typeof this.orders[index] === 'number') {
      return this.orders[index];
    }
    return -1;
  }

  private updateColumnStatesWithNewOrders() {
    this.orders.forEach((order, index) => {
      this.columnsService.emitStateChangeAt(index, { changes: [DatagridColumnChanges.ORDER], order: order });
    });

    // The first and last visible columns might
    // have been changed after orders were changed
    this.haveFirstAndLastVisibleColumnsChanged();
  }

  private haveFirstAndLastVisibleColumnsChanged() {
    this.columnsService.requestFirstVisibleChangeCheck();
    this.columnsService.requestLastVisibleChangeCheck();
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
