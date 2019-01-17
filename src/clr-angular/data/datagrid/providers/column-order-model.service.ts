/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';
import { DatagridHideableColumnModel } from '../datagrid-hideable-column.model';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';

/**
 * This is a model service that's responsible for:
 * 1. Sharing the flex order data between datagrid-column and reorderabble-droppable
 * 2. Updating the flex order data and tells ColumnOrderCoordinatorService when it should broadcast
 * 3. Returning models at the previous and next flex orders
 */

@Injectable()
export class ColumnOrderModelService {
  constructor(private columnOrderCoordinatorService: ColumnOrdersCoordinatorService, private domAdapter: DomAdapter) {}

  public flexOrder: number;

  public headerEl: any;

  public hideableColumnModel: DatagridHideableColumnModel;

  get columnGroupId() {
    return this.columnOrderCoordinatorService.columnGroupId;
  }

  get isAtFirst(): boolean {
    return this.flexOrder === 0;
  }

  get isAtEnd(): boolean {
    return this.flexOrder === this.columnOrderCoordinatorService.orderModels.length - 1;
  }

  get isHidden(): boolean {
    return this.hideableColumnModel && this.hideableColumnModel.hidden;
  }

  public dropReceived(dropData: any) {
    // updates column orders
    // broadcasts updated order changes
    console.log(dropData);
  }

  get nextVisibleColumnModel(): ColumnOrderModelService {
    // collect all columns that appears after this column
    // that means collect all models with greater flex order value
    const nextVisibleColumnModels = this.columnOrderCoordinatorService.orderModels.filter(
      model => model.flexOrder > this.flexOrder && !model.isHidden
    );

    // current column could be the one that visually appears at the end;
    if (nextVisibleColumnModels.length === 0) {
      return;
    }

    // to find the next immediate visible columns model
    // find the model with the smallest flexorder value from nextVisibleColumnModels
    return nextVisibleColumnModels.reduce((smallestFlexOrderModel, currentModel) => {
      if (smallestFlexOrderModel.flexOrder > currentModel.flexOrder) {
        return currentModel;
      }
      return smallestFlexOrderModel;
    });
  }

  get previousVisibleColumnModel(): ColumnOrderModelService {
    // collect all columns that appears before this column
    // that means collect all models with smaller flex order value
    const previousVisibleColumnModels = this.columnOrderCoordinatorService.orderModels.filter(
      model => model.flexOrder < this.flexOrder && !model.isHidden
    );

    // current column could be the one that visually appears at the first;
    if (previousVisibleColumnModels.length === 0) {
      return;
    }

    // to find the previous immediate visible columns model
    // find the model with the largest flexorder value from previousVisibleColumnModels
    return previousVisibleColumnModels.reduce((largestFlexOrderModel, currentModel) => {
      if (largestFlexOrderModel.flexOrder < currentModel.flexOrder) {
        return currentModel;
      }
      return largestFlexOrderModel;
    });
  }

  get headerWidth(): number {
    return this.headerEl ? this.domAdapter.clientRect(this.headerEl).width : 0;
  }

  get nextVisibleHeaderWidth(): number {
    return this.nextVisibleColumnModel ? this.nextVisibleColumnModel.headerWidth : 0;
  }

  get previousVisibleHeaderWidth(): number {
    return this.previousVisibleColumnModel ? this.previousVisibleColumnModel.headerWidth : 0;
  }

  // TODO: This service will be expanded in the next PR
}
