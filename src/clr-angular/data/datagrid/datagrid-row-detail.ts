/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import {
  AfterContentInit,
  Component,
  ContentChildren,
  Input,
  OnDestroy,
  QueryList,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { ClrDatagridCell } from './datagrid-cell';
import { DatagridIfExpandService } from './datagrid-if-expanded.service';
import { SelectionType } from './enums/selection-type';
import { ColumnReorderService } from './providers/column-reorder.service';
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { ViewManagerUtils } from './utils/view-manager-utils';

/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 */
@Component({
  selector: 'clr-dg-row-detail',
  template: `  
      <ng-content></ng-content>
      <ng-container #detailCells></ng-container>
    `,
  host: {
    '[class.datagrid-row-flex]': 'true',
    '[class.datagrid-row-detail]': 'true',
    '[class.datagrid-container]': 'cells.length === 0',
  },
})
export class ClrDatagridRowDetail<T = any> implements AfterContentInit, OnDestroy {
  /* reference to the enum so that template can access it */
  public SELECTION_TYPE = SelectionType;

  constructor(
    public selection: Selection,
    public rowActionService: RowActionService,
    public expand: DatagridIfExpandService,
    public expandableRows: ExpandableRowsCount,
    private columnReorderService: ColumnReorderService
  ) {}

  @ContentChildren(ClrDatagridCell) cells: QueryList<ClrDatagridCell>;

  @ViewChild('detailCells', { static: true, read: ViewContainerRef })
  _detailCells: ViewContainerRef;

  @Input('clrDgReplace')
  set replace(value: boolean) {
    this.expand.setReplace(!!value);
  }
  private subscriptions: Subscription[] = [];
  public replacedRow = false;

  ngAfterContentInit() {
    this.subscriptions.push(this.reorderViewsOnOrdersChange(), this.setReplacedOnExpandReplace());
  }

  private setReplacedOnExpandReplace(): Subscription {
    return this.expand.replace.subscribe(replaceChange => {
      this.replacedRow = replaceChange;
    });
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  private reorderViewsOnOrdersChange(): Subscription {
    return this.columnReorderService.ordersChange.subscribe((byReordering: boolean) => {
      // we have to make sure there are views inserted in the view container
      // before calling reorderViews method from viewManager service
      if (byReordering && this._detailCells.length > 0) {
        ViewManagerUtils.reorderViews(this._detailCells, this.assignRawOrders());
        this.updateCellOrder();
        return;
      }

      if (this.columnReorderService.orders) {
        if (this._detailCells.length === 0) {
          // directly insert the views initially if the view container is empty.
          ViewManagerUtils.insertAllViews(this._detailCells, this.assignRawOrders(), true);
        } else {
          this.cells.forEach((cell, index) => {
            if (this._detailCells.indexOf(cell._view) === -1) {
              this._detailCells.insert(cell._view, this.columnReorderService.orderAt(index));
            }
          });
        }
        this.updateCellOrder();
      }
    });
  }

  private updateCellOrder(): void {
    this.cells.forEach(cell => (cell.order = this._detailCells.indexOf(cell._view)));
  }

  private assignRawOrders(): ClrDatagridCell[] {
    return this.cells.map((cell, index) => {
      if (this.columnReorderService.orderAt(index) > -1) {
        cell.order = this.columnReorderService.orderAt(index);
      } else {
        cell.order = index;
      }
      return cell;
    });
  }
}
