/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterContentInit, ContentChildren, Directive, OnDestroy, QueryList } from '@angular/core';
import { Subscription } from 'rxjs';

import { DatagridRenderStep } from '../enums/render-step.enum';

import { DatagridCellRenderer } from './cell-renderer';
import { DatagridRenderOrganizer } from './render-organizer';
import { ColumnOrdersCoordinatorService } from '../providers/column-orders-coordinator.service';

@Directive({ selector: 'clr-dg-row, clr-dg-row-detail' })
export class DatagridRowRenderer implements AfterContentInit, OnDestroy {
  constructor(
    private organizer: DatagridRenderOrganizer,
    private columnOrdersCoordinatorService: ColumnOrdersCoordinatorService
  ) {
    this.subscriptions.push(
      organizer.filterRenderSteps(DatagridRenderStep.ALIGN_COLUMNS).subscribe(() => this.setWidths())
    );
  }

  private subscriptions: Subscription[] = [];
  ngOnDestroy() {
    this.subscriptions.forEach(sub => sub.unsubscribe());
  }

  @ContentChildren(DatagridCellRenderer) cells: QueryList<DatagridCellRenderer>;

  private setWidths() {
    if (this.organizer.widths.length !== this.cells.length) {
      return;
    }
    this.cells.forEach((cell, index) => {
      const width = this.organizer.widths[index];
      cell.setWidth(width.strict, width.px);
    });
  }

  public setCellOrders(): void {
    // We must make sure that # of models equals # of cells in the row, and vice versa.
    // Because we shouldn't forget that headers and its corresponding cells are usually added/removed at the same time.
    // Those changes are eventually reflected in the column models. So in case this method is called before
    // the models access those changes, we shouldn't try to link and set cells to its corresponding header's model.
    if (this.columnOrdersCoordinatorService.orderModels.length !== this.cells.length) {
      return;
    }

    this.cells.forEach((cell: DatagridCellRenderer, index: number) => {
      cell.setColumnModel(this.columnOrdersCoordinatorService.orderModels[index]);
    });
  }

  ngAfterContentInit() {
    this.setCellOrders(); // necessary in case of async loading rows or loading rows in another page
    this.cells.changes.subscribe(() => {
      // changes due to async expandable cell details or dynamic columns
      this.setCellOrders(); // this method runs completely only in the case of async expandable cell details
      this.setWidths();
    });
  }

  ngAfterViewInit() {
    this.setWidths();
  }
}
