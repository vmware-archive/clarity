/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ViewManagerService } from './view-manager.service';

export default function() {
  describe('View Manager Service', () => {
    let viewManagerService: ViewManagerService;

    beforeEach(() => {
      viewManagerService = new ViewManagerService();
    });

    it('Initializes the View Manager with the DayPicker', () => {
      expect(viewManagerService.isDayView).toBe(true);
      expect(viewManagerService.isMonthView).toBe(false);
      expect(viewManagerService.isYearView).toBe(false);
    });

    it('provides a method to change to month view', () => {
      viewManagerService.changeToMonthView();

      expect(viewManagerService.isDayView).toBe(false);
      expect(viewManagerService.isMonthView).toBe(true);
      expect(viewManagerService.isYearView).toBe(false);
    });

    it('provides a method to change to year view', () => {
      viewManagerService.changeToYearView();

      expect(viewManagerService.isDayView).toBe(false);
      expect(viewManagerService.isMonthView).toBe(false);
      expect(viewManagerService.isYearView).toBe(true);
    });

    it('provides a method to change to day view', () => {
      viewManagerService.changeToMonthView();

      expect(viewManagerService.isDayView).toBe(false);
      expect(viewManagerService.isMonthView).toBe(true);
      expect(viewManagerService.isYearView).toBe(false);

      viewManagerService.changeToDayView();

      expect(viewManagerService.isDayView).toBe(true);
      expect(viewManagerService.isMonthView).toBe(false);
      expect(viewManagerService.isYearView).toBe(false);
    });
  });
}
