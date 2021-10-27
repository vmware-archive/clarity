/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  getAriaLabelFromTemplate,
  getAriaLabelOrDefault,
  getDefaultAriaLabel,
  getProgressCircleAriaAttributes,
  getProgressCircleRadius,
} from './progress-circle.utils.js';

describe('progress circle helpers – ', () => {
  // beforeEach(async () => {});

  // afterEach(() => {});

  describe('getProgressCircleRadius:', () => {
    it('should default to viewBox size of 36', () => {
      expect(getProgressCircleRadius(3)).toBe(16);
      expect(getProgressCircleRadius(8)).toBe(14);
      expect(getProgressCircleRadius(1)).toBe(17);
    });
    it('should accept other viewBox sizes if needed', () => {
      expect(getProgressCircleRadius(3, 24)).toBe(10);
      expect(getProgressCircleRadius(8, 50)).toBe(21);
      expect(getProgressCircleRadius(1, 20)).toBe(9);
    });
  });

  describe('getAriaLabelFromTemplate:', () => {
    it('should use current value if not passed a forced value', () => {
      const currentValue = 88;
      const i18nMock = 'ohai';
      const expected = `${i18nMock} ${currentValue}%`;
      const testUndefined = getAriaLabelFromTemplate(currentValue, i18nMock);
      const testNull = getAriaLabelFromTemplate(currentValue, i18nMock, null);
      const testBadArg = getAriaLabelFromTemplate(currentValue, i18nMock, ('' as unknown) as number);
      expect(testUndefined.indexOf(currentValue + '')).not.toBe(-1, 'current val present in undefined case');
      expect(testNull.indexOf(currentValue + '')).not.toBe(-1, 'current val present in null case');
      expect(testBadArg.indexOf(currentValue + '')).not.toBe(-1, 'current val present in bad parameter case');
      expect(testUndefined).toBe(expected);
      expect(testNull).toBe(expected);
      expect(testBadArg).toBe(expected);
    });

    it('should use forced value if passed one', () => {
      const currentVal = 42;
      expect(getAriaLabelFromTemplate(currentVal, 'low ding...', 80)).toBe('low ding... 80%');
      expect(getAriaLabelFromTemplate(currentVal, 'flapjack', -1)).toBe('flapjack -1%');
    });

    it('should force value of zero', () => {
      expect(getAriaLabelFromTemplate(16, 'autobotz roll out!', 0)).toBe('autobotz roll out! 0%');
    });
  });

  describe('getDefaultAriaLabel:', () => {
    const loopingMsg = 'spinning';

    it('should return indeterminate (loading) template if value is nil', () => {
      const valUndefined = getDefaultAriaLabel(void 0, '...', loopingMsg);
      const valNull = getDefaultAriaLabel(null, '...', loopingMsg);
      const valBadVal = getDefaultAriaLabel(('' as unknown) as number, '...', loopingMsg);
      expect(valUndefined).toBe(loopingMsg, 'undefined checks out');
      expect(valNull).toBe(loopingMsg, 'null checks out');
      expect(valBadVal).toBe(loopingMsg, 'bad argument checks out');
    });
    it('should return loading template if value is passed', () => {
      const goodVal = getDefaultAriaLabel(16, '...', loopingMsg);
      const zeroVal = getDefaultAriaLabel(0, '...', loopingMsg);
      const negativeVal = getDefaultAriaLabel(-1, '...', loopingMsg);
      expect(goodVal).toBe('... 16%', 'good val checks out');
      expect(zeroVal).toBe('... 0%', 'zero checks out');
      expect(negativeVal).toBe('... -1%', 'negative val checks out');
    });
  });

  describe('getAriaLabelOrDefault:', () => {
    it('should return default if no existing aria-label', () => {
      const nope = getAriaLabelOrDefault(void 0, 3000, 'I love you', 'spins!', 80);
      expect(nope).toBe('I love you 3000%');
    });
    it('should return default if existing aria-label is just an old default aria-label', () => {
      const testMe = getAriaLabelOrDefault('I love you 200%', 3000, 'I love you', 'spins!', 200);
      expect(testMe).toBe('I love you 3000%');
    });
    it('should return existing aria-label if there is one and it is not an old default aria-label', () => {
      const testMe = getAriaLabelOrDefault('ohai', 3000, 'I love you', 'spins!', 200);
      expect(testMe).toBe('ohai');
    });
  });

  describe('getProgressCircleAriaAttributes:', () => {
    const ariaLbl = 'ohai';
    const currentVal = 49;
    const expectedLoopingAttrs = [
      ['role', 'img'],
      ['aria-valuemin', false],
      ['aria-valuemax', false],
      ['aria-valuenow', false],
      ['aria-label', ariaLbl],
    ];
    const expectedLoadingAttrs = [
      ['role', 'progressbar'],
      ['aria-valuemin', '0'],
      ['aria-valuemax', '100'],
      ['aria-valuenow', currentVal + ''],
      ['aria-label', ariaLbl],
    ];

    it('should return indeterminate/looping attrs if value is undefined', () => {
      const testMe = getProgressCircleAriaAttributes(void 0, ariaLbl);
      expect(testMe).toEqual(expectedLoopingAttrs as any);
    });
    it('should return indeterminate/looping attrs if value is null', () => {
      const testMe = getProgressCircleAriaAttributes(null, ariaLbl);
      expect(testMe).toEqual(expectedLoopingAttrs as any);
    });
    it('should return indeterminate/looping attrs if value is bad', () => {
      const testMe = getProgressCircleAriaAttributes(('' as unknown) as number, ariaLbl);
      expect(testMe).toEqual(expectedLoopingAttrs as any);
    });
    it('should return loading attrs if value is passed', () => {
      const testMe = getProgressCircleAriaAttributes(currentVal, ariaLbl);
      expect(testMe).toEqual(expectedLoadingAttrs as any);
    });
    it('should return loading attrs even if value is zero', () => {
      const testMe = getProgressCircleAriaAttributes(0, ariaLbl);
      expect(testMe).toEqual([
        ['role', 'progressbar'],
        ['aria-valuemin', '0'],
        ['aria-valuemax', '100'],
        ['aria-valuenow', 0 + ''],
        ['aria-label', ariaLbl],
      ] as any);
    });
    it('should return loading attrs even if value is negative', () => {
      const testMe = getProgressCircleAriaAttributes(-10, ariaLbl);
      expect(testMe).toEqual([
        ['role', 'progressbar'],
        ['aria-valuemin', '0'],
        ['aria-valuemax', '100'],
        ['aria-valuenow', -10 + ''],
        ['aria-label', ariaLbl],
      ] as any);
    });
  });
});
