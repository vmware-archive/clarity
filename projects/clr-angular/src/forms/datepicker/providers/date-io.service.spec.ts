/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerLocaleData } from '@angular/common';
import localeAk from '@angular/common/locales/ak';
import localeHr from '@angular/common/locales/hr';
import localeKkj from '@angular/common/locales/kkj';

import { assertEqualDates } from '../utils/test-utils';

import { DateIOService } from './date-io.service';
import { LocaleHelperService } from './locale-helper.service';
import { DayModel } from '../model/day.model';

registerLocaleData(localeAk);
registerLocaleData(localeHr);
registerLocaleData(localeKkj);

export default function () {
  describe('Date IO Service', () => {
    let dateIOService: DateIOService;
    let localeHelperService: LocaleHelperService;

    describe('Locale Formatting', function () {
      it('updates the cldrLocaleDateFormat based on the locale helper service', () => {
        const localeHelperServ: LocaleHelperService = new LocaleHelperService('en-US');
        const dateIOServ: DateIOService = new DateIOService(localeHelperServ);
        expect(dateIOServ.cldrLocaleDateFormat).toBe('M/d/yy');

        const localeHelperServ1: LocaleHelperService = new LocaleHelperService('ak');
        const dateIOServ1: DateIOService = new DateIOService(localeHelperServ1);

        expect(dateIOServ1.cldrLocaleDateFormat).toBe('yy/MM/dd');
      });

      it('supports a method to convert a Date object to date string based on the locale', () => {
        const localeHelperServ: LocaleHelperService = new LocaleHelperService('en-US');
        const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

        expect(dateIOServ.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe('02/01/2015');

        const localeHelperServAK: LocaleHelperService = new LocaleHelperService('ak');
        const dateIOServAK: DateIOService = new DateIOService(localeHelperServAK);

        expect(dateIOServAK.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe('2015/02/01');

        const localeHelperServHR: LocaleHelperService = new LocaleHelperService('hr');
        const dateIOServHR: DateIOService = new DateIOService(localeHelperServHR);

        expect(dateIOServHR.toLocaleDisplayFormatString(new Date(2015, 1, 1))).toBe('01. 02. 2015');

        const localeHelperServKKJ: LocaleHelperService = new LocaleHelperService('kkj');
        const dateIOServKKJ: DateIOService = new DateIOService(localeHelperServKKJ);

        expect(dateIOServKKJ.toLocaleDisplayFormatString(new Date(2016, 1, 15))).toBe('15/02 2016');
      });

      it('processes an invalid date object as an empty string', () => {
        const localeHelperServ: LocaleHelperService = new LocaleHelperService('en-US');
        const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

        expect(dateIOServ.toLocaleDisplayFormatString(new Date('Test'))).toBe('');
      });

      it('processes a null object as an empty string', () => {
        const localeHelperServ: LocaleHelperService = new LocaleHelperService('en-US');
        const dateIOServ: DateIOService = new DateIOService(localeHelperServ);

        expect(dateIOServ.toLocaleDisplayFormatString(null)).toBe('');
      });
    });

    describe('Date Processing', () => {
      beforeEach(() => {
        localeHelperService = new LocaleHelperService('en-US');
        dateIOService = new DateIOService(localeHelperService);
      });

      it('ignores just text', () => {
        const inputDate = 'abc';
        const date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).toBeNull();
      });

      it('ignores invalid dates', () => {
        let inputDate = '10/21/test';
        const date1: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date1).toBeNull();

        inputDate = 'test/1/1';
        const date2: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date2).toBeNull();

        inputDate = 'test test test';
        const date3: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date3).toBeNull();
      });

      it('ignores empty strings', () => {
        const inputDate = '';
        const date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).toBeNull();
      });

      it('parse a two digit year', () => {
        let inputDate = '01/02/20';
        let date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).not.toBeNull();
        expect(assertEqualDates(date, new Date(2020, 0, 2))).toBe(true);

        // Invalid date with 2 digit year
        inputDate = '51/02/20';
        date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).toBeNull();
      });

      it('should not parse a five digit year', () => {
        const inputDate = '01/02/10000';
        expect(dateIOService.getDateValueFromDateString(inputDate)).toBeNull();
      });

      it('should not parse a three digit year', () => {
        const inputDate = '01/02/201';
        expect(dateIOService.getDateValueFromDateString(inputDate)).toBeNull();
      });

      it('should not parse a 1 digit year', () => {
        const inputDate = '01/02/2';
        expect(dateIOService.getDateValueFromDateString(inputDate)).toBeNull();
      });

      it('parse a 1 digit date', () => {
        const inputDate = '01/2/2015';
        const date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).not.toBeNull();
        expect(assertEqualDates(date, new Date(2015, 0, 2))).toBe(true);
      });

      it('ignores invalid dates', () => {
        let inputDate = '01/55/2015';
        const date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).toBeNull();

        inputDate = '02/29/2015';
        const date1: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date1).toBeNull();

        // Leap Year
        inputDate = '02/29/2016';
        const date2: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date2, new Date(2016, 1, 29))).toBe(true);
      });

      it('parses a 1 digit month', () => {
        const inputDate = '1/02/2015';
        const date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(date).not.toBeNull();
        expect(assertEqualDates(date, new Date(2015, 0, 2))).toBe(true);
      });

      it('ignores invalid months', () => {
        const inputDate = '13/02/2015';
        expect(dateIOService.getDateValueFromDateString(inputDate)).toBeNull();
      });

      it('ignores the minus sign and considers it as a delimiter', () => {
        let inputDate = '1/-2/2015';
        let date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date, new Date(2015, 0, 2)));

        inputDate = '-2/5/2015';
        date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date, new Date(2015, 1, 5)));

        inputDate = '1/2/-2015';
        date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date, new Date(2015, 0, 2)));
      });

      it('processes dates with different delimiters', () => {
        let inputDate = '1/ 2/2015';
        let date: Date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date, new Date(2015, 0, 2)));

        inputDate = '1.3 .2016';
        date = dateIOService.getDateValueFromDateString(inputDate);
        expect(assertEqualDates(date, new Date(2016, 0, 3)));
      });
    });
    describe('TypeScript API', () => {
      beforeEach(() => {
        localeHelperService = new LocaleHelperService('en-US');
        dateIOService = new DateIOService(localeHelperService);
      });

      it('handles adding minDate inputs', () => {
        const testDateModel = new DayModel(2019, 10, 11);
        const thereIsNoDateModel = new DayModel(0, 0, 1);
        let minInput = '2019-11-11';
        dateIOService.setMinDate(minInput);
        expect(testDateModel).toEqual(dateIOService.disabledDates.minDate);

        // handles undefined
        minInput = undefined;
        dateIOService.setMinDate(minInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.minDate);

        // handles null
        minInput = null;
        dateIOService.setMinDate(minInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.minDate);

        // handles empty string
        minInput = '';
        dateIOService.setMinDate(minInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.minDate);
      });

      it('handles adding maxDate inputs', () => {
        const testDateModel = new DayModel(2019, 10, 11);
        const thereIsNoDateModel = new DayModel(9999, 11, 31);

        let maxInput = '2019-11-11';
        dateIOService.setMaxDate(maxInput);
        expect(testDateModel).toEqual(dateIOService.disabledDates.maxDate);

        // handles undefined
        maxInput = undefined;
        dateIOService.setMaxDate(maxInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.maxDate);

        // handles null
        maxInput = null;
        dateIOService.setMaxDate(maxInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.maxDate);

        // handles empty string
        maxInput = '';
        dateIOService.setMaxDate(maxInput);
        expect(thereIsNoDateModel).toEqual(dateIOService.disabledDates.maxDate);
      });
    });
  });
}
