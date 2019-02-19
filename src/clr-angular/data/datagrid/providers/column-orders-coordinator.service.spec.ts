/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ColumnOrdersCoordinatorService } from './column-orders-coordinator.service';
import { ColumnOrderModelService } from './column-order-model.service';
import { DomAdapter } from '../../../utils/dom-adapter/dom-adapter';

export default function(): void {
  describe('ColumnOrdersCoordinatorService', function() {
    let service: ColumnOrdersCoordinatorService;

    let columnOrderModelService: ColumnOrderModelService;
    let columnOrderModelServicePrev: ColumnOrderModelService;
    let columnOrderModelServiceNext: ColumnOrderModelService;

    beforeEach(function() {
      service = new ColumnOrdersCoordinatorService();

      columnOrderModelService = new ColumnOrderModelService(service, new DomAdapter());
      columnOrderModelServicePrev = new ColumnOrderModelService(service, new DomAdapter());
      columnOrderModelServiceNext = new ColumnOrderModelService(service, new DomAdapter());

      // Here visually their columns would appear in the following order:
      // columnOrderModelServicePrev, columnOrderModelService, columnOrderModelServiceNext;
      columnOrderModelService.flexOrder = 1;
      columnOrderModelServicePrev.flexOrder = 0;
      columnOrderModelServiceNext.flexOrder = 2;

      service.orderModels.push(columnOrderModelService);
      service.orderModels.push(columnOrderModelServicePrev);
      service.orderModels.push(columnOrderModelServiceNext);
    });

    it('should have unique group id for columns', function() {
      expect(service.columnGroupId).not.toBeUndefined();
    });

    it('finds a correct model by its flex order number', function() {
      expect(service.findModelOfFlexOrder(0)).toBe(columnOrderModelServicePrev);
      expect(service.findModelOfFlexOrder(1)).toBe(columnOrderModelService);
      expect(service.findModelOfFlexOrder(2)).toBe(columnOrderModelServiceNext);
    });

    it('rearranges flex orders correctly if previous model is dropped on current model', function() {
      service.reorder(0, 1);

      expect(columnOrderModelServicePrev.flexOrder).toBe(1);
      expect(columnOrderModelService.flexOrder).toBe(0);
      expect(columnOrderModelServiceNext.flexOrder).toBe(2);
    });

    it('rearranges flex orders correctly if current model is dropped on previous model', function() {
      service.reorder(1, 0);

      expect(columnOrderModelServicePrev.flexOrder).toBe(1);
      expect(columnOrderModelService.flexOrder).toBe(0);
      expect(columnOrderModelServiceNext.flexOrder).toBe(2);
    });

    it('rearranges flex orders correctly if next model is dropped on current model', function() {
      service.reorder(2, 1);

      expect(columnOrderModelServicePrev.flexOrder).toBe(0);
      expect(columnOrderModelService.flexOrder).toBe(2);
      expect(columnOrderModelServiceNext.flexOrder).toBe(1);
    });

    it('rearranges flex orders correctly if current model is dropped on next model', function() {
      service.reorder(1, 2);

      expect(columnOrderModelServicePrev.flexOrder).toBe(0);
      expect(columnOrderModelService.flexOrder).toBe(2);
      expect(columnOrderModelServiceNext.flexOrder).toBe(1);
    });

    it('rearranges flex orders correctly if next model is dropped on previous model', function() {
      service.reorder(2, 0);

      expect(columnOrderModelServicePrev.flexOrder).toBe(1);
      expect(columnOrderModelService.flexOrder).toBe(2);
      expect(columnOrderModelServiceNext.flexOrder).toBe(0);
    });

    it('rearranges flex orders correctly if previous model is dropped on next model', function() {
      service.reorder(0, 2);

      expect(columnOrderModelServicePrev.flexOrder).toBe(2);
      expect(columnOrderModelService.flexOrder).toBe(0);
      expect(columnOrderModelServiceNext.flexOrder).toBe(1);
    });

    it('should broadcast from orderChange if reorder method is called', function() {
      let isEmitted = false;
      service.modelsChange.subscribe(() => {
        isEmitted = true;
      });
      service.reorder(0, 2);
      expect(isEmitted).toBeTruthy();
    });
  });
}
