/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { IfOpenService } from '../../utils/conditional/if-open.service';

import { ClrDaypicker } from './daypicker';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';

export default function() {
  describe('Daypicker Component', () => {
    let context: TestContext<ClrDaypicker, TestComponent>;
    let viewManagerService: ViewManagerService;
    let localeHelperService: LocaleHelperService;
    let dateNavigationService: DateNavigationService;

    beforeEach(function() {
      dateNavigationService = new DateNavigationService();
      // Initializing selected day just to make sure that previous and next month tests become easier
      dateNavigationService.selectedDay = new DayModel(2015, 1, 1);
      dateNavigationService.initializeCalendar();

      context = this.create(ClrDaypicker, TestComponent, [
        { provide: DateNavigationService, useValue: dateNavigationService },
        DateIOService,
        IfOpenService,
        ViewManagerService,
        LocaleHelperService,
        DatepickerFocusService,
        DateFormControlService,
      ]);
      viewManagerService = context.getClarityProvider(ViewManagerService);
      localeHelperService = context.getClarityProvider(LocaleHelperService);
    });

    describe('View Basics', () => {
      it('calls to open the month picker when the monthpicker trigger is clicked', () => {
        spyOn(context.clarityDirective, 'changeToMonthView');
        const button: HTMLButtonElement = context.clarityElement.querySelector('.monthpicker-trigger');

        expect(button).not.toBeNull();

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.changeToMonthView).toHaveBeenCalled();
      });

      it('calls to open the year picker when the yearpicker trigger is clicked', () => {
        spyOn(context.clarityDirective, 'changeToYearView');
        const button: HTMLButtonElement = context.clarityElement.querySelector('.yearpicker-trigger');

        expect(button).not.toBeNull();

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.changeToYearView).toHaveBeenCalled();
      });

      it('calls to navigate to the previous month', () => {
        spyOn(context.clarityDirective, 'previousMonth');
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[0];

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.previousMonth).toHaveBeenCalled();
      });

      it('calls to navigate to the current month', () => {
        spyOn(context.clarityDirective, 'currentMonth');
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[1];

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.currentMonth).toHaveBeenCalled();
      });

      it('calls to navigate to the next month', () => {
        spyOn(context.clarityDirective, 'nextMonth');
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const button: HTMLButtonElement = <HTMLButtonElement>switchers.children[2];

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.nextMonth).toHaveBeenCalled();
      });
    });

    describe('Typescript API', () => {
      it('moves to the month view', () => {
        expect(viewManagerService.isDayView).toBe(true);

        context.clarityDirective.changeToMonthView();
        context.detectChanges();

        expect(viewManagerService.isDayView).toBe(false);
        expect(viewManagerService.isMonthView).toBe(true);
      });

      it('moves to the year view', () => {
        expect(viewManagerService.isDayView).toBe(true);

        context.clarityDirective.changeToYearView();
        context.detectChanges();

        expect(viewManagerService.isDayView).toBe(false);
        expect(viewManagerService.isYearView).toBe(true);
      });

      it('moves to the previous month', () => {
        const initialMonth: string = localeHelperService.localeMonthsAbbreviated[1];
        expect(context.clarityDirective.calendarMonth).toBe(initialMonth);
        expect(context.clarityDirective.calendarYear).toBe(2015);

        context.clarityDirective.previousMonth();

        expect(context.clarityDirective.calendarMonth).toBe('Jan');
        expect(context.clarityDirective.calendarYear).toBe(2015);
      });

      it('moves to the next month', () => {
        const initialMonth: string = localeHelperService.localeMonthsAbbreviated[1];
        expect(context.clarityDirective.calendarMonth).toBe(initialMonth);
        expect(context.clarityDirective.calendarYear).toBe(2015);

        context.clarityDirective.nextMonth();

        expect(context.clarityDirective.calendarMonth).toBe('Mar');
        expect(context.clarityDirective.calendarYear).toBe(2015);
      });

      it('moves to the current month', () => {
        const initialMonth: string = localeHelperService.localeMonthsAbbreviated[1];
        expect(context.clarityDirective.calendarMonth).toBe(initialMonth);
        expect(context.clarityDirective.calendarYear).toBe(2015);

        context.clarityDirective.currentMonth();

        const date: Date = new Date();
        const currentMonth: string = localeHelperService.localeMonthsAbbreviated[date.getMonth()];

        expect(context.clarityDirective.calendarMonth).toBe(currentMonth);
        expect(context.clarityDirective.calendarYear).toBe(date.getFullYear());
      });
    });
  });
}

@Component({
  template: `
        <clr-daypicker></clr-daypicker>
    `,
})
class TestComponent {}
