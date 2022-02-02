/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { FormControl } from '@angular/forms';
import { NgControlService } from '../providers/ng-control.service';
import { IfControlStateService, CONTROL_STATE } from './if-control-state.service';

export default function (): void {
  describe('IfControlStateService', function () {
    let service, ngControlService, testControl;

    beforeEach(() => {
      testControl = new FormControl();
      ngControlService = new NgControlService();
      service = new IfControlStateService(ngControlService);
    });

    it('subscribes to the statusChanges when the control is emitted', () => {
      spyOn(testControl.statusChanges, 'subscribe').and.callThrough();
      ngControlService.setControl(testControl);
      expect(testControl.statusChanges.subscribe).toHaveBeenCalled();
    });

    it('should not throw error when triggerStatusChange is called and control is not set yet', () => {
      expect(() => service.triggerStatusChange()).not.toThrowError();
    });

    it('provides observable for statusChanges, return valid when touched and no rules added', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      ngControlService.setControl(testControl);
      // Change the state of the input to trigger statusChange
      testControl.markAsTouched();
      testControl.updateValueAndValidity();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.VALID);
      sub.unsubscribe();
    });

    it('should allow a manual trigger of status observable, return NONE', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      ngControlService.setControl(testControl);
      // Manually trigger status check
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.NONE);
      sub.unsubscribe();
    });

    it('should return state TOUCHED', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      const fakeControl = {
        statusChanges: {
          subscribe: () => {
            return function unsubscribe() {
              // Do nothing
            };
          },
        },
        /* Disabled is not implemented yet so we could use it to test uncovered case */
        status: 'DISABLED',
        touched: true,
      };
      ngControlService.setControl(fakeControl);
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.NONE);
      sub.unsubscribe();
    });

    it('should return state NONE', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      const fakeControl = {
        statusChanges: {
          subscribe: () => {
            return function unsubscribe() {
              // Do nothing
            };
          },
        },
        status: 'INVALID',
        touched: false,
      };
      ngControlService.setControl(fakeControl);
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.NONE);
      sub.unsubscribe();
    });

    it('should return state INVALID', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      const fakeControl = {
        statusChanges: {
          subscribe: () => {
            return function unsubscribe() {
              // Do nothing
            };
          },
        },
        status: 'INVALID',
        touched: true,
      };
      ngControlService.setControl(fakeControl);
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.INVALID);
      sub.unsubscribe();
    });

    it('should return state VALID', () => {
      const cb = jasmine.createSpy('cb');
      const sub = service.statusChanges.subscribe((control: CONTROL_STATE) => cb(control));
      const fakeControl = {
        statusChanges: {
          subscribe: () => {
            return function unsubscribe() {
              // Do nothing
            };
          },
        },
        status: 'VALID',
        touched: true,
      };
      ngControlService.setControl(fakeControl);
      service.triggerStatusChange();
      expect(cb).toHaveBeenCalledWith(CONTROL_STATE.VALID);
      sub.unsubscribe();
    });
  });
}
