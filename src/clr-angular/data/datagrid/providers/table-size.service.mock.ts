/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { TableSizeService } from './table-size.service';
import { Injectable } from '@angular/core';

// With this mock service, we could test individual child components of Datagrid that are dependent on TableSizeService.
@Injectable()
export class MockTableSizeService {
  // Currently only this property needed.
  // We could add more properties if necessary in the future
  public getColumnDragHeight(): string {
    return '500px';
  }
}

export const MOCK_TABLE_SIZE_PROVIDER = {
  provide: TableSizeService,
  useClass: MockTableSizeService,
};
