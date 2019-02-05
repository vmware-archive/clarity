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

  get headerWidth(): number {
    return this.headerEl.getBoundingClientRect().width;
  }

  get nextVisibleHeaderWidth(): number {
    return this.nextVisibleColumnModel ? this.nextVisibleColumnModel.headerWidth : 0;
  }

  get previousVisibleHeaderWidth(): number {
    return this.previousVisibleColumnModel ? this.previousVisibleColumnModel.headerWidth : 0;
  }

  public dropReceived(event) {}
}

export function createMockHeaderEl(width: number, height: number): Node {
  const headerEl = document.createElement('div');
  document.body.appendChild(headerEl);
  headerEl.style.width = width + 'px';
  headerEl.style.height = height + 'px';
  return headerEl;
}

export function destroyMockHeaderEl(el: Node): void {
  if (document.body.contains(el)) {
    document.body.removeChild(el);
  }
}

export function populateMockProps(
  mockService: MockColumnOrderModelService,
  id: string,
  flexOrder: number,
  width: number
) {
  mockService.columnGroupId = id;
  mockService.flexOrder = flexOrder;
  mockService.headerEl = createMockHeaderEl(width, 40);
}

export const MOCK_COLUMN_ORDER_MODEL_PROVIDER = {
  provide: ColumnOrderModelService,
  useClass: MockColumnOrderModelService,
};
