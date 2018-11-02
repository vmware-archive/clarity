/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { FormControl } from '@angular/forms';

import { NgControlService } from '../providers/ng-control.service';

import { IfErrorService } from './if-error.service';

export default function(): void {
  describe('IfErrorService', function() {
    let service, ngControlService, testControl;

    beforeEach(() => {
      testControl = new FormControl(true);
      ngControlService = new NgControlService();
      service = new IfErrorService(ngControlService);
    });

    it('subscribes to the statusChanges when the control is emitted', () => {
      spyOn(testControl.statusChanges, 'subscribe').and.callThrough();
      ngControlService.setControl(testControl);
      expect(testControl.statusChanges.subscribe).toHaveBeenCalled();
    });

    it('provides observable for statusChanges, passing the invalid state', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe(control => cb(control));
      ngControlService.setControl(testControl);
      // Change the state of the input to trigger statusChange
      testControl.markAsTouched();
      testControl.updateValueAndValidity();
      expect(cb).toHaveBeenCalled();
      expect(cb).toHaveBeenCalledWith(false);
      sub.unsubscribe();
    });

    it('should allow a manual trigger of status observable', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe(control => cb(control));
      ngControlService.setControl(testControl);
      // Manually trigger status check
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalled();
      expect(cb).toHaveBeenCalledWith(false);
      sub.unsubscribe();
    });

    it('should return invalid state', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe(control => cb(control));
      const fakeControl = {
        statusChanges: {
          subscribe: () => {
            return function unsubscribe() {};
          },
        },
        dirty: true,
        invalid: true,
      };
      ngControlService.setControl(fakeControl);
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(true);
      sub.unsubscribe();
    });
  });
}
