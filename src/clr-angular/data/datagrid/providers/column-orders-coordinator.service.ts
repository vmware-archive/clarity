/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { Injectable } from '@angular/core';
import { ColumnOrderModelService } from './column-order-model.service';

let nbColumnGroup = 0;

/**
 * This service is responsible for:
 * 1. Sharing order model data across headers and cells
 * 2. Broadcasting order model update
 */

@Injectable()
export class ColumnOrdersCoordinatorService {
  // Here, the order of the items inside the array below should
  // match the order of the QueryList of headers.
  public orderModels: ColumnOrderModelService[] = [];

  // the common group id that will be shared across Datagrids all reorder draggable and droppables
  private _columnGroupId: string;

  get columnGroupId() {
    return this._columnGroupId;
  }

  constructor() {
    this._columnGroupId = 'dg-column-group-' + nbColumnGroup++;
  }

  // TODO: This service will be expanded in the next PR
}
