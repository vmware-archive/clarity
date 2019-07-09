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
import { ExpandableRowsCount } from './providers/global-expandable-rows';
import { RowActionService } from './providers/row-action-service';
import { Selection } from './providers/selection';
import { SelectionType } from './enums/selection-type';
import { DatagridIfExpandService } from './datagrid-if-expanded.service';
import { ColumnReorderService } from './providers/column-reorder.service';
import { ViewManagerService } from './providers/view-manager.service';

/**
 * Generic bland container serving various purposes for Datagrid.
 * For instance, it can help span a text over multiple rows in detail view.
 */
@Component({
  selector: 'clr-dg-row-detail',
  template: `
        <ng-container *ngIf="!replacedRow">
            <!-- space for multiselection state -->
            <div class="datagrid-cell datagrid-select datagrid-fixed-column"
                *ngIf="selection.selectionType === SELECTION_TYPE.Multi">
            </div>
            <!-- space for single selection state -->
            <div class="datagrid-cell datagrid-select datagrid-fixed-column"
                *ngIf="selection.selectionType === SELECTION_TYPE.Single">
            </div>
            <!-- space for single row action; only displayType if we have at least one actionable row in datagrid -->
            <div class="datagrid-cell datagrid-row-actions datagrid-fixed-column"
                *ngIf="rowActionService.hasActionableRow">
            </div>
            <!-- space for expandable caret action; only displayType if we have at least one expandable row in datagrid -->
            <div *ngIf="expandableRows.hasExpandableRow"
                        class="datagrid-expandable-caret datagrid-fixed-column datagrid-cell">
            </div>
        </ng-container>
        <ng-container #detailCells></ng-container>
        <ng-container *ngIf="cells.length === 0">
          <ng-content></ng-content>
        </ng-container>
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
    private columnReorderService: ColumnReorderService,
    private viewManager: ViewManagerService
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
    this.resetViews();
    this.subscriptions.push(this.resetViewsOnCellChanges(), this.setReplacedOnExpandReplace(), this.reorderOnRequest());
  }

  private setReplacedOnExpandReplace(): Subscription {
    return this.expand.replace.subscribe(replaceChange => {
      this.replacedRow = replaceChange;
    });
  }

  private resetViewsOnCellChanges(): Subscription {
    return this.cells.changes.subscribe(() => {
      this.resetViews();
    });
  }

  private reorderOnRequest(): Subscription {
    return this.columnReorderService.reorderRequested.subscribe(reorderRequest => {
      const sourceView = this._detailCells.get(reorderRequest.sourceOrder);
      this._detailCells.move(sourceView, reorderRequest.targetOrder);
    });
  }

  private resetViews() {
    this.viewManager.detachAllViews(this._detailCells);
    this.viewManager.insertAllViews(this._detailCells, this.assignRawOrders(), true);
  }

  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
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
