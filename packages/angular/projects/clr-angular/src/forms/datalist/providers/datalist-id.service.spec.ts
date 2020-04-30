/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { DatalistIdService } from './datalist-id.service';

export default function (): void {
  describe('DatalistIdService', function () {
    it('generates a unique id by default', function () {
      const first = new DatalistIdService();
      const second = new DatalistIdService();
      expect(first.id).toBeTruthy("The service doesn't generate an id");
      expect(second.id).toBeTruthy("The service doesn't generate an id");
      expect(first.id === second.id).toBe(false, "The id generated isn't unique");
    });

    it('exposes an Observable for id changes', function () {
      const service = new DatalistIdService();
      service.id = 'hello';
      let emittedId: string;
      service.idChange.subscribe(id => (emittedId = id));
      expect(emittedId).toBe('hello');
      service.id = 'world';
      expect(emittedId).toBe('world');
    });
  });
}
