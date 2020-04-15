/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { AfterViewInit, Component, ElementRef, HostListener } from '@angular/core';

import { DOWN_ARROW, LEFT_ARROW, RIGHT_ARROW, UP_ARROW } from '../../utils/key-codes/key-codes';

import { YearRangeModel } from './model/year-range.model';
import { DateNavigationService } from './providers/date-navigation.service';
import { DatepickerFocusService } from './providers/datepicker-focus.service';
import { ViewManagerService } from './providers/view-manager.service';
import { ClrCommonStringsService } from '../../utils/i18n/common-strings.service';
import { ClrAriaLiveService } from '../../utils/a11y/aria-live.service';

@Component({
  selector: 'clr-yearpicker',
  providers: [ClrAriaLiveService],
  template: `
        <div class="year-switchers">
          <button
              class="calendar-btn switcher"
              type="button"
              (click)="previousDecade()"
              [attr.aria-label]="commonStrings.keys.datepickerPreviousDecade">
              <clr-icon shape="angle" dir="left" [attr.title]="commonStrings.keys.datepickerPreviousDecade"></clr-icon>
          </button>
          <button
              class="calendar-btn switcher"
              type="button"
              (click)="currentDecade()"
              [attr.aria-label]="commonStrings.keys.datepickerCurrentDecade">
              <clr-icon shape="event" [attr.title]="commonStrings.keys.datepickerCurrentDecade"></clr-icon>
          </button>
          <button
              class="calendar-btn switcher"
              type="button"
              (click)="nextDecade()"
              [attr.aria-label]="commonStrings.keys.datepickerNextDecade">
              <clr-icon shape="angle" dir="right" [attr.title]="commonStrings.keys.datepickerNextDecade"></clr-icon>
          </button>
        </div>
        <div class="years">
            <button
                *ngFor="let year of yearRangeModel.yearRange"
                type="button"
                class="calendar-btn year"
                [attr.tabindex]="getTabIndex(year)"
                [class.is-selected]="year === calendarYear"
                (click)="changeYear(year)">
                {{year}}
            </button>
        </div>
    `,
  host: {
    '[class.yearpicker]': 'true',
  },
})
export class ClrYearpicker implements AfterViewInit {
  constructor(
    private _dateNavigationService: DateNavigationService,
    private _viewManagerService: ViewManagerService,
    private _datepickerFocusService: DatepickerFocusService,
    private _elRef: ElementRef,
    public commonStrings: ClrCommonStringsService,
    private ariaLiveService: ClrAriaLiveService
  ) {
    this.yearRangeModel = new YearRangeModel(this.calendarYear);
    this._focusedYear = this.calendarYear;
    this.updateRange(this.yearRangeModel);
  }

  /** @deprecated since 3.0, remove in 4.0 */
  get ariaLiveDecadeText(): string {
    return this.commonStrings.parse(this.commonStrings.keys.daypickerSRCurrentDecadePhrase, {
      DECADE_RANGE: this.decadeRange,
    });
  }

  private decadeRange: string;

  /**
   * YearRangeModel which is used to build the YearPicker view.
   */
  yearRangeModel: YearRangeModel;

  /**
   * Keeps track of the current focused year.
   */
  private _focusedYear: number;

  /**
   * Gets the year which the user is currently on.
   */
  get calendarYear(): number {
    return this._dateNavigationService.displayedCalendar.year;
  }

  /**
   * Increments the focus year by the value passed. Updates the YearRangeModel if the
   * new value is not in the current decade.
   */
  private incrementFocusYearBy(value: number): void {
    this._focusedYear = this._focusedYear + value;
    if (!this.yearRangeModel.inRange(this._focusedYear)) {
      if (value > 0) {
        this.yearRangeModel = this.yearRangeModel.nextDecade();
      } else {
        this.yearRangeModel = this.yearRangeModel.previousDecade();
      }
    }
    this._datepickerFocusService.focusCell(this._elRef);
  }

  /**
   * Calls the DateNavigationService to update the year value of the calendar.
   * Also changes the view to the daypicker.
   */
  changeYear(year: number): void {
    this._dateNavigationService.changeYear(year);
    this._viewManagerService.changeToDayView();
  }

  /**
   * Updates the YearRangeModel to the previous decade.
   */
  previousDecade(): void {
    this.yearRangeModel = this.yearRangeModel.previousDecade();
    this.updateRange(this.yearRangeModel);
    // Year in the yearpicker is not focused because while navigating to a different decade,
    // you want the focus to remain on the decade switcher arrows.
  }

  /**
   * Updates the YearRangeModel to the current decade.
   */
  currentDecade(): void {
    if (!this.yearRangeModel.inRange(this._dateNavigationService.today.year)) {
      this.yearRangeModel = this.yearRangeModel.currentDecade();
    }
    this._datepickerFocusService.focusCell(this._elRef);
    this.updateRange(this.yearRangeModel);
  }

  /**
   * Updates the YearRangeModel to the next decade.
   */
  nextDecade(): void {
    this.yearRangeModel = this.yearRangeModel.nextDecade();
    this.updateRange(this.yearRangeModel);
    // Year in the yearpicker is not focused because while navigating to a different decade,
    // you want the focus to remain on the decade switcher arrows.
  }

  /**
   * Compares the year passed to the focused year and returns the tab index.
   */
  getTabIndex(year: number): number {
    if (!this.yearRangeModel.inRange(this._focusedYear)) {
      if (this.yearRangeModel.inRange(this.calendarYear)) {
        this._focusedYear = this.calendarYear;
      } else {
        this._focusedYear = this.yearRangeModel.middleYear;
      }
    }
    return this._focusedYear === year ? 0 : -1;
  }

  /**
   * Handles the Keyboard arrow navigation for the yearpicker.
   */
  @HostListener('keydown', ['$event'])
  onKeyDown(event: KeyboardEvent) {
    // NOTE: Didn't move this to the date navigation service because
    // the logic is fairly simple and it didn't make sense for me
    // to create extra observables just to move this logic to the service.
    if (event) {
      const keyCode: number = event.keyCode;
      if (keyCode === UP_ARROW) {
        event.preventDefault();
        this.incrementFocusYearBy(-1);
      } else if (keyCode === DOWN_ARROW) {
        event.preventDefault();
        this.incrementFocusYearBy(1);
      } else if (keyCode === RIGHT_ARROW) {
        event.preventDefault();
        this.incrementFocusYearBy(5);
      } else if (keyCode === LEFT_ARROW) {
        event.preventDefault();
        this.incrementFocusYearBy(-5);
      }
    }
  }

  private updateRange(yrm: YearRangeModel): void {
    const floor = yrm.yearRange[0];
    const ceil = yrm.yearRange[yrm.yearRange.length - 1];
    this.decadeRange = `${floor} to ${ceil}`;
    /** @deprecated since 3.0, remove in 4.0 */
    this.ariaLiveService.announce(this.ariaLiveDecadeText);
  }

  /**
   * Focuses on the current calendar year when the View is initialized.
   */
  ngAfterViewInit() {
    this._datepickerFocusService.focusCell(this._elRef);
    /** @deprecated since 3.0, remove in 4.0 */
    this.ariaLiveService.announce(this.ariaLiveDecadeText);
  }
}
