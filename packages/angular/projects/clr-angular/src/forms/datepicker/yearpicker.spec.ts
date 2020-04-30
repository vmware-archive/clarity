/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { Component } from '@angular/core';
import { async } from '@angular/core/testing';
import { By } from '@angular/platform-browser';

import { TestContext } from '../../data/datagrid/helpers.spec';
import { ClrPopoverToggleService } from '../../utils/popover/providers/popover-toggle.service';
import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';

import { ClrDatepickerModule } from './datepicker.module';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { LocaleHelperService } from './providers/locale-helper.service';
import { ViewManagerService } from './providers/view-manager.service';
import { createKeyboardEvent } from './utils/test-utils';
import { ClrYearpicker } from './yearpicker';
import { YearRangeModel } from './model/year-range.model';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { TestBed } from '@angular/core/testing';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';
import { MockAriaLiveService } from '../../utils/a11y/aria-live.service.mock';
import { DateIOService } from './providers/date-io.service';

export default function () {
  describe('Yearpicker Component AriaLiveSerivice', function () {
    let announceSpyOn: (str: string) => void;
    let ariaLiveService: ClrAriaLiveService;
    let fixture, component;

    beforeEach(function () {
      const selectedYear = 2003;

      const dateNavigationService = new DateNavigationService();
      dateNavigationService.initializeCalendar();
      dateNavigationService.changeYear(selectedYear);

      TestBed.configureTestingModule({
        imports: [ClrDatepickerModule],
        declarations: [TestComponent],
        providers: [
          ViewManagerService,
          DatepickerFocusService,
          ClrPopoverToggleService,
          { provide: DateNavigationService, useValue: dateNavigationService },
          LocaleHelperService,
          DateIOService,
          ClrCommonStringsService,
        ],
      }).overrideComponent(ClrYearpicker, {
        set: {
          providers: [{ provide: ClrAriaLiveService, useClass: MockAriaLiveService }],
        },
      });

      fixture = TestBed.createComponent(TestComponent);
      ariaLiveService = fixture.debugElement.query(By.directive(ClrYearpicker)).injector.get(ClrAriaLiveService);
      component = fixture.debugElement.query(By.directive(ClrYearpicker)).injector.get(ClrYearpicker);
      announceSpyOn = spyOn(ariaLiveService, 'announce');
      fixture.detectChanges();
    });

    function checkLiveElementYearRangeModel(yrm: YearRangeModel) {
      const yearFloor = yrm.yearRange[0];
      const yearCeil = yrm.yearRange[yrm.yearRange.length - 1];
      expect(announceSpyOn).toHaveBeenCalledWith(`The current decade is ${yearFloor} to ${yearCeil}`);
    }

    it('updates the aria-live element when the next decade button is clicked', () => {
      checkLiveElementYearRangeModel(component.yearRangeModel);
      const switchers: HTMLElement = fixture.debugElement.nativeElement.querySelector('.year-switchers');
      const button = switchers.children[2] as HTMLButtonElement;
      button.click();
      fixture.detectChanges();

      checkLiveElementYearRangeModel(component.yearRangeModel);
    });

    it('updates the aria-live element when the previous button is clicked', () => {
      checkLiveElementYearRangeModel(component.yearRangeModel);

      const switchers: HTMLElement = fixture.debugElement.nativeElement.querySelector('.year-switchers');
      const button = switchers.children[0] as HTMLButtonElement;
      button.click();
      fixture.detectChanges();

      checkLiveElementYearRangeModel(component.yearRangeModel);
    });

    it('updates the aria-live element when the current button is clicked', () => {
      // Go back first
      const switchers: HTMLElement = fixture.debugElement.nativeElement.querySelector('.year-switchers');
      const previousButton = switchers.children[0] as HTMLButtonElement;
      previousButton.click();
      fixture.detectChanges();
      checkLiveElementYearRangeModel(component.yearRangeModel);

      const currentButton = switchers.children[1] as HTMLButtonElement;
      currentButton.click();
      fixture.detectChanges();

      checkLiveElementYearRangeModel(component.yearRangeModel);
    });
  });

  describe('Yearpicker Component', () => {
    let context: TestContext<ClrYearpicker, TestComponent>;
    let dateNavigationService: DateNavigationService;
    const selectedYear = 2003;

    function initializeCalendar(selYear: number) {
      dateNavigationService = new DateNavigationService();
      dateNavigationService.initializeCalendar();
      dateNavigationService.changeYear(selYear);
    }

    describe('View Basics', () => {
      beforeEach(function () {
        initializeCalendar(selectedYear);

        context = this.create(ClrYearpicker, TestComponent, [
          ViewManagerService,
          DatepickerFocusService,
          ClrPopoverToggleService,
          { provide: DateNavigationService, useValue: dateNavigationService },
          LocaleHelperService,
          ClrCommonStringsService,
        ]);
      });

      it('renders the year range', () => {
        const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll('.year');
        expect(years).not.toBeNull();
        expect(years.length).toBe(10);

        for (let i = 0; i < 10; i++) {
          expect(years[i].textContent).toMatch(`${2000 + i}`);
        }
      });

      it('calls to navigate to the previous decade', () => {
        spyOn(context.clarityDirective, 'previousDecade');
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const button = switchers.children[0] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.previousDecade).toHaveBeenCalled();
      });

      it('calls to navigate to the current decade', () => {
        spyOn(context.clarityDirective, 'currentDecade');
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const button = switchers.children[1] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.currentDecade).toHaveBeenCalled();
      });

      it('calls to navigate to the next decade', () => {
        spyOn(context.clarityDirective, 'nextDecade');
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const button = switchers.children[2] as HTMLButtonElement;

        button.click();
        context.detectChanges();

        expect(context.clarityDirective.nextDecade).toHaveBeenCalled();
      });

      it('updates the year when a year button is clicked', () => {
        spyOn(context.clarityDirective, 'changeYear');
        const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll('.year');

        for (const year of years) {
          year.click();
          context.detectChanges();
          expect(context.clarityDirective.changeYear).toHaveBeenCalled();
        }
      });

      it('adds a .yearpicker class on the host', () => {
        expect(context.clarityElement.classList.contains('yearpicker')).toBe(true);
      });

      it('adds a .is-selected class on the selected year', () => {
        const yearIndex: number = context.clarityDirective.yearRangeModel.yearRange.indexOf(selectedYear);
        const years: HTMLButtonElement[] = context.clarityElement.querySelectorAll('.year');

        let count = 0;
        for (const year of years) {
          if (count === yearIndex) {
            expect(year.classList.contains('is-selected')).toBe(true);
          } else {
            expect(year.classList.contains('is-selected')).toBe(false);
          }
          count++;
        }
      });

      it('has the correct aria-label for the previousDecade button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const previousDecadeBtn = switchers.children[0] as HTMLButtonElement;
        expect(previousDecadeBtn.attributes['aria-label'].value).toEqual('Previous decade');
      });

      it('has the correct aria-label for the currentDecade button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const currentDecadeBtn = switchers.children[1] as HTMLButtonElement;
        expect(currentDecadeBtn.attributes['aria-label'].value).toEqual('Current decade');
      });

      it('has the correct aria-label for the nextDecade button', () => {
        const switchers: HTMLElement = context.clarityElement.querySelector('.year-switchers');
        const nextDecadeBtn = switchers.children[2] as HTMLButtonElement;
        expect(nextDecadeBtn.attributes['aria-label'].value).toEqual('Next decade');
      });

      it('updates the tab indices correctly', async(() => {
        const buttons: HTMLButtonElement[] = context.clarityElement.querySelectorAll('.year');

        expect(buttons[3].tabIndex).toBe(0);

        context.clarityElement.dispatchEvent(createKeyboardEvent(DOWN_ARROW, 'keydown'));
        context.detectChanges();

        expect(buttons[3].tabIndex).toBe(-1);
        expect(buttons[4].tabIndex).toBe(0);

        context.clarityElement.dispatchEvent(createKeyboardEvent(UP_ARROW, 'keydown'));
        context.detectChanges();

        expect(buttons[4].tabIndex).toBe(-1);
        expect(buttons[3].tabIndex).toBe(0);

        context.clarityElement.dispatchEvent(createKeyboardEvent(RIGHT_ARROW, 'keydown'));
        context.detectChanges();

        expect(buttons[3].tabIndex).toBe(-1);
        expect(buttons[8].tabIndex).toBe(0);

        context.clarityElement.dispatchEvent(createKeyboardEvent(LEFT_ARROW, 'keydown'));
        context.detectChanges();

        expect(buttons[8].tabIndex).toBe(-1);
        expect(buttons[3].tabIndex).toBe(0);
      }));
    });

    describe('Typescript API', () => {
      beforeEach(function () {
        initializeCalendar(selectedYear);

        context = this.create(ClrYearpicker, TestComponent, [
          ViewManagerService,
          DatepickerFocusService,
          ClrPopoverToggleService,
          { provide: DateNavigationService, useValue: dateNavigationService },
          LocaleHelperService,
          ClrCommonStringsService,
        ]);
      });

      it('has access to the calendar year', () => {
        expect(context.clarityDirective.calendarYear).toBe(selectedYear);
      });

      it('generates a YearRangeModel based on the selected year on initialization', () => {
        const testArr: number[] = [2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009];
        expect(context.clarityDirective.yearRangeModel).not.toBeNull();
        expect(context.clarityDirective.yearRangeModel.yearRange.length).toBe(10);

        expect(context.clarityDirective.yearRangeModel.yearRange).toEqual(testArr);
      });

      it('updates the year range model when moving to the previous decade', () => {
        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

        context.clarityDirective.previousDecade();

        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear - 10)).toBe(true);
      });

      it('updates the year range model when moving to the next decade', () => {
        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

        context.clarityDirective.nextDecade();

        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear + 10)).toBe(true);
      });

      it('updates the year range model when moving to the current decade', () => {
        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(true);

        context.clarityDirective.currentDecade();

        expect(context.clarityDirective.yearRangeModel.inRange(selectedYear)).toBe(false);
        expect(context.clarityDirective.yearRangeModel.inRange(new Date().getFullYear())).toBe(true);
      });

      it('does not regenerate the year range when its on the current decade', () => {
        // Move to the current decade
        context.clarityDirective.currentDecade();
        expect(context.clarityDirective.yearRangeModel.inRange(new Date().getFullYear())).toBe(true);

        // Move again and check
        spyOn(context.clarityDirective.yearRangeModel, 'currentDecade');
        context.clarityDirective.currentDecade();
        expect(context.clarityDirective.yearRangeModel.currentDecade).not.toHaveBeenCalled();
      });

      it('gets the correct tab indices on initialization', () => {
        const years: number[] = context.clarityDirective.yearRangeModel.yearRange;

        for (const year of years) {
          if (year === selectedYear) {
            expect(context.clarityDirective.getTabIndex(year)).toBe(0);
          } else {
            expect(context.clarityDirective.getTabIndex(year)).toBe(-1);
          }
        }
      });

      it('changes view to day picker when changeYear is called', () => {
        const viewManagerService: ViewManagerService = context.getClarityProvider(ViewManagerService);

        viewManagerService.changeToYearView();
        expect(viewManagerService.isYearView).toBe(true);

        context.clarityDirective.changeYear(2015);

        expect(viewManagerService.isYearView).toBe(false);
        expect(viewManagerService.isDayView).toBe(true);
      });

      it('updates year value in the date navigation service', () => {
        const dateNavService: DateNavigationService = context.getClarityProvider(DateNavigationService);

        expect(dateNavService.displayedCalendar.year).toBe(selectedYear);

        context.clarityDirective.changeYear(2015);

        expect(dateNavService.displayedCalendar.year).toBe(2015);
      });
    });

    describe('Keyboard Navigation', () => {
      // Yearpicker Layout
      // 2000 | 2005
      // 2001 | 2006
      // 2002 | 2007
      // 2003 | 2008
      // 2004 | 2009

      function createYearPicker(scope: any, selYear: number) {
        initializeCalendar(selYear);

        context = scope.create(ClrYearpicker, TestComponent, [
          ViewManagerService,
          DatepickerFocusService,
          ClrPopoverToggleService,
          { provide: DateNavigationService, useValue: dateNavigationService },
          LocaleHelperService,
          ClrCommonStringsService,
        ]);
      }

      it('handles up arrow', function () {
        createYearPicker(this, 2010);

        // Boundary
        expect(context.clarityDirective.getTabIndex(2010)).toBe(0);
        expect(context.clarityDirective.yearRangeModel.inRange(2009)).toBe(false);

        for (let i = 2009; i >= 2000; i--) {
          context.clarityDirective.onKeyDown(createKeyboardEvent(UP_ARROW, 'keydown'));
          expect(context.clarityDirective.getTabIndex(i)).toBe(0);
        }

        expect(context.clarityDirective.yearRangeModel.inRange(2010)).toBe(false);
      });

      it('handles down arrow', function () {
        createYearPicker(this, 2009);

        // Boundary
        expect(context.clarityDirective.getTabIndex(2009)).toBe(0);
        expect(context.clarityDirective.yearRangeModel.inRange(2010)).toBe(false);

        for (let i = 2010; i <= 2019; i++) {
          context.clarityDirective.onKeyDown(createKeyboardEvent(DOWN_ARROW, 'keydown'));
          expect(context.clarityDirective.getTabIndex(i)).toBe(0);
        }

        expect(context.clarityDirective.yearRangeModel.inRange(2010)).toBe(true);
      });

      it('handles right arrow', function () {
        createYearPicker(this, 2001);
        expect(context.clarityDirective.getTabIndex(2001)).toBe(0);
        context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, 'keydown'));
        expect(context.clarityDirective.getTabIndex(2006)).toBe(0);

        // Boundary
        expect(context.clarityDirective.yearRangeModel.inRange(2011)).toBe(false);
        context.clarityDirective.onKeyDown(createKeyboardEvent(RIGHT_ARROW, 'keydown'));
        expect(context.clarityDirective.yearRangeModel.inRange(2011)).toBe(true);
        expect(context.clarityDirective.getTabIndex(2011)).toBe(0);
      });

      it('handles left arrow', function () {
        createYearPicker(this, 2005);
        expect(context.clarityDirective.getTabIndex(2005)).toBe(0);
        context.clarityDirective.onKeyDown(createKeyboardEvent(LEFT_ARROW, 'keydown'));
        expect(context.clarityDirective.getTabIndex(2000)).toBe(0);

        // Boundary
        expect(context.clarityDirective.yearRangeModel.inRange(1995)).toBe(false);
        context.clarityDirective.onKeyDown(createKeyboardEvent(LEFT_ARROW, 'keydown'));
        expect(context.clarityDirective.yearRangeModel.inRange(1995)).toBe(true);
        expect(context.clarityDirective.getTabIndex(1995)).toBe(0);
      });
    });
  });
}

@Component({
  template: ` <clr-yearpicker></clr-yearpicker> `,
})
class TestComponent {}
