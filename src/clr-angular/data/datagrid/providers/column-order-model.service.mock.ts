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

export function mockHeaderEl(width: number, height: number) {
  const headerEl = document.createElement('div');
  document.body.appendChild(headerEl);
  headerEl.style.position = 'absolute';
  headerEl.style.width = width + 'px';
  headerEl.style.height = height + 'px';
  return headerEl;
}

export function populateMockProps(
  mockService: MockColumnOrderModelService,
  id: string,
  flexOrder: number,
  width: number
) {
  mockService.columnGroupId = id;
  mockService.flexOrder = flexOrder;
  mockService.headerEl = mockHeaderEl(width, 40);
}

export const MOCK_COLUMN_ORDER_MODEL_PROVIDER = {
  provide: ColumnOrderModelService,
  useClass: MockColumnOrderModelService,
};
