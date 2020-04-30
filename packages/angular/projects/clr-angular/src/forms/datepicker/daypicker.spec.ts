/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { By } from '@angular/platform-browser';

import { ClrDaypicker } from './daypicker';
import { DayModel } from './model/day.model';
import { DateFormControlService } from './providers/date-form-control.service';
import { DateIOService } from './providers/date-io.service';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { TestBed } from '@angular/core/testing';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';
import { MockAriaLiveService } from '../../utils/a11y/aria-live.service.mock';
import { ClrDatepickerModule } from './datepicker.module';

export default function () {
  describe('Daypicker Component ClrAriaLiveService', function () {
    let localeHelperService: LocaleHelperService;
    let dateNavigationService: DateNavigationService;

    it('updates the aria-live view element when the month and year are changed', () => {
      dateNavigationService = new DateNavigationService();
      // Initializing selected day just to make sure that previous and next month tests become easier
      dateNavigationService.selectedDay = new DayModel(2015, 1, 1);
      dateNavigationService.initializeCalendar();

      TestBed.configureTestingModule({
        imports: [ClrDatepickerModule],
        declarations: [TestComponent],
        providers: [
          { provide: DateNavigationService, useValue: dateNavigationService },
          DateIOService,
          ClrPopoverToggleService,
          ViewManagerService,
          LocaleHelperService,
          DatepickerFocusService,
          DateFormControlService,
          ClrCommonStringsService,
        ],
      }).overrideComponent(ClrDaypicker, {
        set: {
          providers: [{ provide: ClrAriaLiveService, useClass: MockAriaLiveService }],
        },
      });

      const fixture = TestBed.createComponent(TestComponent);
      const ariaLiveService = fixture.debugElement.query(By.directive(ClrDaypicker)).injector.get(ClrAriaLiveService);
      const announceSpyOn = spyOn(ariaLiveService, 'announce');

      localeHelperService = fixture.debugElement.query(By.directive(ClrDaypicker)).injector.get(LocaleHelperService);
      let testMonth = localeHelperService.localeMonthsAbbreviated[dateNavigationService.displayedCalendar.month];
      let testYear = dateNavigationService.displayedCalendar.year;
      fixture.detectChanges();

      expect(announceSpyOn).toHaveBeenCalledWith(`The current month is ${testMonth} The current year is ${testYear}`);

      dateNavigationService.selectedDay = new DayModel(2025, 9, 1);
      fixture.detectChanges();
      testMonth = localeHelperService.localeMonthsAbbreviated[dateNavigationService.displayedCalendar.month];
      testYear = dateNavigationService.displayedCalendar.year;
      expect(announceSpyOn).toHaveBeenCalledWith(`The current month is ${testMonth} The current year is ${testYear}`);
    });
  });

  describe('Daypicker Component', () => {
    let context: TestContext<ClrDaypicker, TestComponent>;
    let viewManagerService: ViewManagerService;
    let localeHelperService: LocaleHelperService;
    let dateNavigationService: DateNavigationService;

    beforeEach(function () {
      dateNavigationService = new DateNavigationService();
      // Initializing selected day just to make sure that previous and next month tests become easier
      dateNavigationService.selectedDay = new DayModel(2015, 1, 1);
      dateNavigationService.initializeCalendar();

      context = this.create(ClrDaypicker, TestComponent, [
        { provide: DateNavigationService, useValue: dateNavigationService },
        DateIOService,
        ClrPopoverToggleService,
        ViewManagerService,
        LocaleHelperService,
        DatepickerFocusService,
        DateFormControlService,
        ClrCommonStringsService,
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
        const button = switchers.children[0] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.previousMonth).toHaveBeenCalled();
      });

      it('calls to navigate to the current month', () => {
        spyOn(context.clarityDirective, 'currentMonth');
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const button = switchers.children[1] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.currentMonth).toHaveBeenCalled();
      });

      it('calls to navigate to the next month', () => {
        spyOn(context.clarityDirective, 'nextMonth');
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const button = switchers.children[2] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.nextMonth).toHaveBeenCalled();
      });

      it('has correct title and aria-label for monthpicker button', () => {
        const button: HTMLButtonElement = context.clarityElement.querySelector('.monthpicker-trigger');
        const currentMonth = localeHelperService.localeMonthsAbbreviated[dateNavigationService.displayedCalendar.month];
        const expectedString = `Select month, the current month is ${currentMonth}`;
        expect(button.title).toEqual(expectedString);
        expect(button.attributes['aria-label'].value).toEqual(expectedString);
      });

      it('has correct title and aria-label for yearpicker button', () => {
        const button: HTMLButtonElement = context.clarityElement.querySelector('.yearpicker-trigger');
        const currentYear = dateNavigationService.displayedCalendar.year;
        const expectedString = `Select year, the current year is ${currentYear}`;
        expect(button.title).toEqual(expectedString);
        expect(button.attributes['aria-label'].value).toEqual(expectedString);
      });

      it('sets the correct aria-label value on the previous month button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const previousButton = switchers.children[0] as HTMLButtonElement;
        expect(previousButton.attributes['aria-label'].value).toEqual('Previous month');
      });

      it('sets the correct aria-label value on the current month button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const currentButton = switchers.children[1] as HTMLButtonElement;
        expect(currentButton.attributes['aria-label'].value).toEqual('Current month');
      });

      it('sets the correct aria-label value on the next month button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.calendar-switchers');
        const nextButton = switchers.children[2] as HTMLButtonElement;
        expect(nextButton.attributes['aria-label'].value).toEqual('Next month');
      });

      it('should have text based boundaries for screen readers', () => {
        const srOnlyElements: HTMLDivElement[] = context.clarityElement.querySelectorAll(
          '.clr-sr-only:not([aria-live])'
        );

        expect(srOnlyElements[0].innerText).toBe('Beginning of Modal Content');
        expect(srOnlyElements[1].innerText).toBe('End of Modal Content');
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
  template: ` <clr-daypicker></clr-daypicker> `,
})
class TestComponent {}
