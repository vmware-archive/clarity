/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrDatepickerViewManager } from './datepicker-view-manager';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';

export default function() {
  describe('Datepicker View Manager Component', () => {
    let context: TestContext<ClrDatepickerViewManager, TestComponent>;
    let viewManagerService: ViewManagerService;

    beforeEach(function() {
      context = this.create(ClrDatepickerViewManager, TestComponent, [
        ViewManagerService,
        DatepickerFocusService,
        IfOpenService,
        DateNavigationService,
        LocaleHelperService,
        DateIOService,
        DateFormControlService,
      ]);
      viewManagerService = context.getClarityProvider(ViewManagerService);
    });

    it('shows the daypicker when dayView is set to true', () => {
      expect(context.clarityDirective.isDayView).toBe(true);
      expect(context.clarityElement.children.length).toBe(1);
      expect(context.clarityElement.children[0].tagName).toBe('CLR-DAYPICKER');
    });

    it('shows the monthpicker when monthView is set to true', () => {
      viewManagerService.changeToMonthView();
      context.detectChanges();

      expect(context.clarityDirective.isMonthView).toBe(true);
      expect(context.clarityElement.children.length).toBe(1);
      expect(context.clarityElement.children[0].tagName).toBe('CLR-MONTHPICKER');
    });

    it('shows the yearpicker when monthView is set to true', () => {
      viewManagerService.changeToYearView();
      context.detectChanges();

      expect(context.clarityDirective.isYearView).toBe(true);
      expect(context.clarityElement.children.length).toBe(1);
      expect(context.clarityElement.children[0].tagName).toBe('CLR-YEARPICKER');
    });

    it('has the .datepicker class added to the host', () => {
      expect(context.clarityElement.classList.contains('datepicker')).toBe(true);
    });
  });
}

@Component({
  template: `
        <clr-datepicker-view-manager></clr-datepicker-view-manager>
    `,
})
class TestComponent {
  constructor(private dateNavigationService: DateNavigationService) {
    this.dateNavigationService.initializeCalendar();
  }
}
