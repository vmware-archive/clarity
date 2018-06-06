/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { FormControl } from '@angular/forms';

import { NgControlService } from './ng-control.service';

export default function(): void {
  describe('NgControlService', function() {
    let service, testControl;

    beforeEach(() => {
      testControl = new FormControl(true);
      service = new NgControlService();
    });

    it('provides observable for control changes, passing the control', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.controlChanges.subscribe(control => cb(control));
      expect(cb).not.toHaveBeenCalled();
      service.setControl(testControl);
      expect(cb).toHaveBeenCalledWith(testControl);
      sub.unsubscribe();
    });
  });
}
