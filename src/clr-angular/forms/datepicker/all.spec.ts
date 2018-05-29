/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { addHelpers } from '../../data/datagrid/helpers.spec';

import CalendarSpecs from './calendar.spec';
import DateContainerSpecs from './date-container.spec';
import DateInputSpecs from './date-input.spec';
import DatepickerViewManagerSpecs from './datepicker-view-manager.spec';
import DayComponentSpecs from './day.spec';
import DaypickerSpecs from './daypicker.spec';
import CalendarViewModelSpecs from './model/calendar-view.model.spec';
import CalendarModelSpecs from './model/calendar.model.spec';
import DayModelSpecs from './model/day.model.spec';
import YearRangeModelSpecs from './model/year-range.model.spec';
import MonthpickerSpecs from './monthpicker.spec';
import DateFormControlServiceSpecs from './providers/date-form-control.service.spec';
import DateIOServiceSpecs from './providers/date-io.service.spec';
import DateNavigationServiceSpecs from './providers/date-navigation.service.spec';
import DatepickerEnabledServiceSpecs from './providers/datepicker-enabled.service.spec';
import DatepickerFocusServiceSpecs from './providers/datepicker-focus.service.spec';
import LocaleHelperServiceSpecs from './providers/locale-helper.service.spec';
import ViewManagerServiceSpecs from './providers/view-manager.service.spec';
import YearpickerSpecs from './yearpicker.spec';

describe('Datepicker', function() {
  addHelpers();

  describe('Model', function() {
    DayModelSpecs();
    CalendarModelSpecs();
    YearRangeModelSpecs();
    CalendarViewModelSpecs();
  });

  describe('Providers', function() {
    ViewManagerServiceSpecs();
    LocaleHelperServiceSpecs();
    DatepickerFocusServiceSpecs();
    DateIOServiceSpecs();
    DateNavigationServiceSpecs();
    DatepickerEnabledServiceSpecs();
    DateFormControlServiceSpecs();
  });

  describe('Components', function() {
    DayComponentSpecs();
    DatepickerViewManagerSpecs();
    DateContainerSpecs();
    DaypickerSpecs();
    MonthpickerSpecs();
    YearpickerSpecs();
    CalendarSpecs();
    DateInputSpecs();
  });
});
