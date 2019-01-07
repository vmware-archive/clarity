/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnOrderModelService } from './column-order-model.service';

export class MockColumnOrderModelService {
  public flexOrder: number;
  public columnGroupId: string;
  public headerEl: any;
  public nextVisibleColumnModel: any;
  public previousVisibleColumnModel: any;
  public isAtFirst: boolean = false;
  public isAtEnd: boolean = false;
  public dropReceived(event) {}
}

export function populateMockProps(
  mockService: MockColumnOrderModelService,
  id: string,
  flexOrder: number,
  width: number
) {
  mockService.columnGroupId = id;
  mockService.flexOrder = flexOrder;
  mockService.headerEl = document.createElement('div');
  document.body.appendChild(mockService.headerEl);
  mockService.headerEl.style.position = 'absolute';
  mockService.headerEl.style.width = width + 'px';
  mockService.headerEl.style.height = '40px';
}

export const MOCK_COLUMN_ORDER_MODEL_PROVIDER = {
  provide: ColumnOrderModelService,
  useClass: MockColumnOrderModelService,
};
