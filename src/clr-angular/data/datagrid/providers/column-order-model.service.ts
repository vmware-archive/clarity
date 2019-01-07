/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';
import { DatagridHideableColumnModel } from '../datagrid-hideable-column.model';

/**
 * This is a model service that's responsible for:
 * 1. Accessing and providing common id for its reorder draggable and droppables
 * 2. Sharing the flex order data between datagrid-column and reorderabble-droppable
 * 3. Updating the flex order data and tells ColumnOrderCoordinatorService when it should broadcast
 */

@Injectable()
export class ColumnOrderModelService {
  constructor(private columnOrderCoordinatorService: ColumnOrdersCoordinatorService) {}

  public flexOrder: number;

  public headerEl: any;

  public hideableColumnModel: DatagridHideableColumnModel;

  public get columnGroupId() {
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

  dropReceived(dropData: any) {
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

  // TODO: This service will be expanded in the next PR
}
