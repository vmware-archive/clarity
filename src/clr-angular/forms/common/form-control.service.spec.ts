/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { FormControlService } from './form-control.service';

export default function(): void {
  describe('FormControlService', function() {
    it('generates a unique id by default', function() {
      const first = new FormControlService();
      const second = new FormControlService();
      expect(first.id).toBeTruthy("The service doesn't generate an id");
      expect(second.id).toBeTruthy("The service doesn't generate an id");
      expect(first.id === second.id).toBe(false, "The id generated isn't unique");
    });

    it('exposes an Observable for id changes', function() {
      const service = new FormControlService();
      service.id = 'hello';
      let emittedId: string;
      service.idChange.subscribe(id => (emittedId = id));
      expect(emittedId).toBe('hello');
      service.id = 'world';
      expect(emittedId).toBe('world');
    });
  });
}
