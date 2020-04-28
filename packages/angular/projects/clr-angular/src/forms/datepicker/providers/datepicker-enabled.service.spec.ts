/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { describeIgnore } from '../../../../../tests/tests.helpers';
import { DATEPICKER_ENABLE_BREAKPOINT } from '../../../utils/breakpoints/breakpoints';

import { DatepickerEnabledService } from './datepicker-enabled.service';

export default function() {
  // IE doesn't handle userAgent spies
  // @TODO Investigate if we care about IE here
  describeIgnore(['ie'], 'Datepicker Enabled Service', () => {
    function initializeSpies(userAgent: string, innerWidth: number): DatepickerEnabledService {
      spyOnProperty(document.defaultView.navigator, 'userAgent', 'get').and.returnValue(userAgent);
      spyOnProperty(document.defaultView, 'innerWidth', 'get').and.returnValue(innerWidth);
      return new DatepickerEnabledService(document);
    }

    it("sets isEnabled to false if the user agent has 'Mobi' and inner width is less than DATEPICKER_ENABLE_BREAKPOINT", () => {
      const service: DatepickerEnabledService = initializeSpies('Mobi', DATEPICKER_ENABLE_BREAKPOINT - 10);
      expect(service.isEnabled).toBe(false);
    });

    it("sets isEnabled to false if the user agent has 'mobi' and inner width is less than DATEPICKER_ENABLE_BREAKPOINT", () => {
      const service1: DatepickerEnabledService = initializeSpies('mobi', DATEPICKER_ENABLE_BREAKPOINT - 10);
      expect(service1.isEnabled).toBe(false);
    });

    it("sets isEnabled to true if the user agent does not have 'Mobi' and inner width is less than DATEPICKER_ENABLE_BREAKPOINT", () => {
      const service: DatepickerEnabledService = initializeSpies('Test', DATEPICKER_ENABLE_BREAKPOINT - 10);
      expect(service.isEnabled).toBe(true);
    });

    it("sets isEnabled to true if the user agent has 'Mobi' and inner width is greater than DATEPICKER_ENABLE_BREAKPOINT", () => {
      const service: DatepickerEnabledService = initializeSpies('Mobi', DATEPICKER_ENABLE_BREAKPOINT + 10);
      expect(service.isEnabled).toBe(true);
    });

    it("sets isEnabled to true if the user agent does not have 'Mobi' and inner width is greater than DATEPICKER_ENABLE_BREAKPOINT", () => {
      const service: DatepickerEnabledService = initializeSpies('Test', DATEPICKER_ENABLE_BREAKPOINT + 10);
      expect(service.isEnabled).toBe(true);
    });
  });
}
