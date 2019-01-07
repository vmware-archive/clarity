/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';

export default function(): void {
  describe('ColumnOrdersCoordinatorService', function() {
    let service: ColumnOrdersCoordinatorService;

    beforeEach(function() {
      service = new ColumnOrdersCoordinatorService();
    });

    it('should have unique group id for columns', function() {
      expect(service.columnGroupId).not.toBeUndefined();
    });
  });
}
