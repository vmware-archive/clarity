/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { AlertIconAndTypesService } from './icon-and-types.service';
import { ClrCommonStrings } from '../../../utils/i18n/common-strings.interface';
import { ClrCommonStringsService } from '../../../utils/i18n/common-strings.service';

export default function(): void {
  describe('Alert Icon and Types Service', function() {
    let testMe: AlertIconAndTypesService;
    let commonStrings: ClrCommonStrings;

    function testShape(alertType: string): string {
      return testMe.iconInfoFromType(alertType).shape;
    }

    function testCssClass(alertType: string): string {
      return testMe.iconInfoFromType(alertType).cssClass;
    }

    function testTitle(alertType: string): string {
      return testMe.iconInfoFromType(alertType).title;
    }

    beforeEach(() => {
      commonStrings = new ClrCommonStringsService();
      testMe = new AlertIconAndTypesService(commonStrings);
    });

    afterEach(() => {
      testMe = null;
    });

    describe('alertType()', function() {
      it("alertType is 'info' by default", function() {
        expect(testMe.alertType).toBe('info');
      });

      it('can change alertType to another valid type', function() {
        expect(testMe.alertType).toBe('info');
        testMe.alertType = 'danger';
        expect(testMe.alertType).toBe('danger');
      });

      it('will not change alertType to an invalid type', function() {
        expect(testMe.alertType).toBe('info');
        testMe.alertType = 'ohai';
        expect(testMe.alertType).toBe('info');
        expect(testMe.alertType).not.toBe('ohai');
      });
    });

    describe('alertIconShape()', function() {
      it('returns shape based on alertType if not set', function() {
        expect(testMe.alertType).toBe('info');
        expect(testMe.alertIconShape).toBe('info-circle');
      });

      it('can change alertIconShape', function() {
        expect(testMe.alertIconShape).toBe('info-circle');
        testMe.alertIconShape = 'house';
        expect(testMe.alertIconShape).toBe('house');
      });

      it('will set to empty string and return based on alertType if set to junk', function() {
        expect(testMe.alertIconShape).toBe('info-circle');
        testMe.alertIconShape = null;
        expect(testMe.alertIconShape).toBe('info-circle');
      });
    });

    describe('alertIconTitle()', function() {
      it('returns title based on alertType', function() {
        testMe.alertType = 'warning';
        expect(testMe.alertType).toBe('warning');
        expect(testMe.alertIconTitle).toBe(commonStrings.warning);
      });
    });

    describe('iconInfoFromType()', function() {
      it('returns default shape as fallthrough', function() {
        expect(testShape(null)).toBe('info-circle');
        expect(testShape('ohai')).toBe('info-circle');
      });

      it('returns .alert-info class as fallthrough', function() {
        expect(testCssClass(null)).toBe('alert-info');
        expect(testCssClass('ohai')).toBe('alert-info');
      });

      it('returns info title as fallthrough', function() {
        expect(testTitle(null)).toBe(commonStrings.info);
        expect(testTitle('ohai')).toBe(commonStrings.info);
      });

      it('returns warning icon', function() {
        expect(testShape('warning')).toBe('exclamation-triangle');
      });

      it('returns .alert-warning', function() {
        expect(testCssClass('warning')).toBe('alert-warning');
      });

      it('returns warning title', function() {
        expect(testTitle('warning')).toBe(commonStrings.warning);
      });

      it('returns danger icon', function() {
        expect(testShape('danger')).toBe('exclamation-circle');
      });

      it('returns .alert-danger', function() {
        expect(testCssClass('danger')).toBe('alert-danger');
      });

      it('returns danger title', function() {
        expect(testTitle('danger')).toBe(commonStrings.danger);
      });

      it('returns success icon', function() {
        expect(testShape('success')).toBe('check-circle');
      });

      it('returns .alert-success', function() {
        expect(testCssClass('success')).toBe('alert-success');
      });

      it('returns success title', function() {
        expect(testTitle('success')).toBe(commonStrings.success);
      });

      it('returns info icon', function() {
        expect(testShape('info')).toBe('info-circle');
      });

      it('returns .alert-info', function() {
        expect(testCssClass('info')).toBe('alert-info');
      });

      it('returns info title', function() {
        expect(testTitle('info')).toBe(commonStrings.info);
      });
    });
  });
}
