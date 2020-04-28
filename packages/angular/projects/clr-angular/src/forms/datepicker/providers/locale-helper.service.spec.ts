/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localePl from '@angular/common/locales/pl';

import { LocaleHelperService } from './locale-helper.service';

registerLocaleData(localeFr);
registerLocaleData(localePl);

export default function() {
  describe('Locale Helper Service', () => {
    let localeHelperServiceUS: LocaleHelperService;
    let localeHelperServiceFr: LocaleHelperService;
    let localeHelperServicePl: LocaleHelperService;

    const usDays: string[] = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];
    const frDays: string[] = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    const plDays: string[] = ['P', 'W', 'Ś', 'C', 'P', 'S', 'N'];

    const usMonthsAbbreviated: string[] = [
      'Jan',
      'Feb',
      'Mar',
      'Apr',
      'May',
      'Jun',
      'Jul',
      'Aug',
      'Sep',
      'Oct',
      'Nov',
      'Dec',
    ];
    const frMonthsAbbreviated: string[] = [
      'janv.',
      'févr.',
      'mars',
      'avr.',
      'mai',
      'juin',
      'juil.',
      'août',
      'sept.',
      'oct.',
      'nov.',
      'déc.',
    ];
    const plMonthsAbbreviated: string[] = [
      'sty',
      'lut',
      'mar',
      'kwi',
      'maj',
      'cze',
      'lip',
      'sie',
      'wrz',
      'paź',
      'lis',
      'gru',
    ];

    const usMonthsWide: string[] = [
      'January',
      'February',
      'March',
      'April',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ];
    const frMonthsWide: string[] = [
      'janvier',
      'février',
      'mars',
      'avril',
      'mai',
      'juin',
      'juillet',
      'août',
      'septembre',
      'octobre',
      'novembre',
      'décembre',
    ];
    const plMonthsWide: string[] = [
      'styczeń',
      'luty',
      'marzec',
      'kwiecień',
      'maj',
      'czerwiec',
      'lipiec',
      'sierpień',
      'wrzesień',
      'październik',
      'listopad',
      'grudzień',
    ];

    beforeEach(() => {
      localeHelperServiceFr = new LocaleHelperService('fr');
      localeHelperServicePl = new LocaleHelperService('pl');
      localeHelperServiceUS = new LocaleHelperService('en-US');
    });

    it('returns the first day of the week', () => {
      expect(localeHelperServiceUS.firstDayOfWeek).toBe(0);
      expect(localeHelperServiceFr.firstDayOfWeek).toBe(1);
      expect(localeHelperServicePl.firstDayOfWeek).toBe(1);
    });

    it('returns the months in abbreviated format' + 'and nominative form', () => {
      const a1: ReadonlyArray<string> = localeHelperServiceUS.localeMonthsAbbreviated;
      const a2: ReadonlyArray<string> = localeHelperServiceFr.localeMonthsAbbreviated;
      const a3: ReadonlyArray<string> = localeHelperServicePl.localeMonthsAbbreviated;

      expect(a1.length === usMonthsAbbreviated.length && a1.every((v, i) => v === usMonthsAbbreviated[i])).toBe(true);
      expect(a2.length === frMonthsAbbreviated.length && a2.every((v, i) => v === frMonthsAbbreviated[i])).toBe(true);
      expect(a3.length === plMonthsAbbreviated.length && a3.every((v, i) => v === plMonthsAbbreviated[i])).toBe(true);
    });

    it('returns the months in wide format ' + 'and nominative form', () => {
      const a1: ReadonlyArray<string> = localeHelperServiceUS.localeMonthsWide;
      const a2: ReadonlyArray<string> = localeHelperServiceFr.localeMonthsWide;
      const a3: ReadonlyArray<string> = localeHelperServicePl.localeMonthsWide;

      expect(a1.length === usMonthsWide.length && a1.every((v, i) => v === usMonthsWide[i])).toBe(true);
      expect(a2.length === frMonthsWide.length && a2.every((v, i) => v === frMonthsWide[i])).toBe(true);
      expect(a3.length === plMonthsWide.length && a3.every((v, i) => v === plMonthsWide[i])).toBe(true);
    });

    it('returns the locale date format', () => {
      expect(localeHelperServiceUS.localeDateFormat).toBe('M/d/yy');
      expect(localeHelperServiceFr.localeDateFormat).toBe('dd/MM/y');
      expect(localeHelperServicePl.localeDateFormat).toBe('dd.MM.y');
    });

    it(
      'returns the locale days in narrow format ' + 'and nominative form ' + 'according to the first day of the week',
      () => {
        const a1: ReadonlyArray<string> = localeHelperServiceUS.localeDaysNarrow;
        const a2: ReadonlyArray<string> = localeHelperServiceFr.localeDaysNarrow;
        const a3: ReadonlyArray<string> = localeHelperServicePl.localeDaysNarrow;

        expect(a1.length === usDays.length && a1.every((v, i) => v === usDays[i])).toBe(true);
        expect(a2.length === usDays.length && a2.every((v, i) => v === frDays[i])).toBe(true);
        expect(a3.length === plDays.length && a3.every((v, i) => v === plDays[i])).toBe(true);
      }
    );
  });
}
