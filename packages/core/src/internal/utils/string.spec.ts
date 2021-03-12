/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  camelCaseToKebabCase,
  setStyles,
  setPropStyles,
  transformToSpacedString,
  transformToString,
  transformToUnspacedString,
  capitalizeFirstLetter,
  kebabCaseToCamelCase,
  kebabCaseToPascalCase,
  getNumericValueFromCssSecondsStyleValue,
  isPrefixedBy,
  isPrefixedOrSuffixedBy,
  isSuffixedBy,
  removePrefix,
  removeSuffix,
  removePrefixOrSuffix,
} from './string.js';

describe('Functional Helper: ', () => {
  function funcFactory(str: string): (x: number, y: number, z: number) => string {
    return (x: number, y: number, z: number) => (x + y + z > 9 ? str + '-High' : str + '-Low');
  }

  const tests = [funcFactory('A'), funcFactory('B'), funcFactory('C')];

  describe('transformToString(): ', () => {
    it('merges strings together from functions', () => {
      const expected = 'A-LowB-LowC-Low';
      expect(transformToString('', tests, 1, 1, 1)).toEqual(expected);
    });

    it('respects delimiter when set', () => {
      const expected = 'A-High///B-High///C-High';
      expect(transformToString('///', tests, 3, 5, 2)).toEqual(expected);
    });
  });

  describe('transformToSpacedString(): ', () => {
    it('contains spaces', () => {
      const expected = 'A-High B-High C-High';
      expect(transformToSpacedString(tests, 2, 7, 1)).toEqual(expected);
    });
  });

  describe('transformToUnspacedString(): ', () => {
    it('has no spaces in it', () => {
      expect(transformToUnspacedString(tests, 2, 7, 1).indexOf(' ') < 0).toEqual(true);
    });
  });

  describe('camelCaseToKebabCase', () => {
    it('should format correctly', () => {
      expect(camelCaseToKebabCase('camelCaseToKebabCase')).toBe('camel-case-to-kebab-case');
    });
  });

  describe('setStyles', () => {
    it('should convert a object map of CSS styles to a single concatenated string', () => {
      const styles = { color: 'red', background: 'blue', display: 'block' };
      expect(setStyles(styles)).toBe('color:red;background:blue;display:block;');
    });
  });

  describe('setPropStyles', () => {
    it('should convert a object map of CSS custom property styles to a single concatenated string', () => {
      const styles = { color: 'red', '--background': 'blue', '--display': 'block' };
      expect(setPropStyles(styles)).toBe('--background:blue;--display:block;');
    });
  });

  describe('capitalizeFirstLetter', () => {
    it('should capitalize the first letter of a string', () => {
      expect(capitalizeFirstLetter('abc')).toBe('Abc');
    });
  });

  describe('kebabCaseToCamelCase', () => {
    it('should format correctly', () => {
      expect(kebabCaseToCamelCase('test-string')).toBe('testString');
    });
  });

  describe('kebabCaseToPascalCase', () => {
    it('should format correctly', () => {
      expect(kebabCaseToPascalCase('test-string')).toBe('TestString');
    });
  });

  // '0.3s': string => 0.3: number
  describe('getNumericValueFromCssSecondsStyleValue', () => {
    it('returns 0 if style value is falsy', () => {
      expect(getNumericValueFromCssSecondsStyleValue(null)).toBe(0);
      expect(getNumericValueFromCssSecondsStyleValue(void 0)).toBe(0);
      expect(getNumericValueFromCssSecondsStyleValue('')).toBe(0);
    });

    it('returns 0 if style value is not a simple-float CSS value string in seconds', () => {
      expect(getNumericValueFromCssSecondsStyleValue('ohai')).toBe(0);
    });

    it('returns 0 if parsed style value is non-numeric', () => {
      expect(getNumericValueFromCssSecondsStyleValue('1.1.1s')).toBe(0);
    });

    it('returns simple-float number as expected', () => {
      expect(getNumericValueFromCssSecondsStyleValue('0.32s')).toBe(0.32);
      expect(getNumericValueFromCssSecondsStyleValue('1.025s')).toBe(1.025);
    });

    it('returns number as expected from a whole-number style value', () => {
      expect(getNumericValueFromCssSecondsStyleValue('34s')).toBe(34);
      expect(getNumericValueFromCssSecondsStyleValue('0s')).toBe(0);
    });
  });

  describe('isPrefixedBy', () => {
    it('returns true if start of string has expected prefix', () => {
      expect(isPrefixedBy('ohai_yep', 'ohai_')).toBe(true);
    });

    it('returns false if start of string does not have expected prefix', () => {
      expect(isPrefixedBy('kthxbye_yep', 'ohai_')).toBe(false);
    });

    it('returns false if passed a nil or empty string', () => {
      expect(isPrefixedBy('', 'ohai_')).toBe(false);
      expect(isPrefixedBy(null, 'ohai_')).toBe(false);
      expect(isPrefixedBy(void 0, 'ohai_')).toBe(false);
    });

    it('returns false if passed a nil or empty prefix', () => {
      expect(isPrefixedBy('ohai_yep', '')).toBe(false);
      expect(isPrefixedBy('ohai_yep', null)).toBe(false);
      expect(isPrefixedBy('ohai_yep', void 0)).toBe(false);
    });
  });

  describe('isSuffixedBy', () => {
    it('returns true if end of string has expected suffix', () => {
      expect(isSuffixedBy('yep_ohai', '_ohai')).toBe(true);
    });

    it('returns false if end of string does not have expected suffix', () => {
      expect(isSuffixedBy('nope_kthxbye', '_ohai')).toBe(false);
    });

    it('returns false if passed a nil or empty string', () => {
      expect(isSuffixedBy('', '_ohai')).toBe(false);
      expect(isSuffixedBy(null, '_ohai')).toBe(false);
      expect(isSuffixedBy(void 0, '_ohai')).toBe(false);
    });

    it('returns false if passed a nil or empty suffix', () => {
      expect(isSuffixedBy('yep_ohai', '')).toBe(false);
      expect(isSuffixedBy('yep_ohai', null)).toBe(false);
      expect(isSuffixedBy('yep_ohai', void 0)).toBe(false);
    });
  });

  describe('isPrefixedOrSuffixedBy', () => {
    it('defaults to prefix', () => {
      expect(isPrefixedOrSuffixedBy('ohai_yep', 'ohai_')).toBe(true);
      expect(isPrefixedOrSuffixedBy('ohai_yep', '_yep')).toBe(false);
    });

    it('returns false if start of string does not have expected prefix', () => {
      expect(isPrefixedBy('kthxbye_yep', 'ohai_')).toBe(false);
    });

    it('returns false if passed a nil or empty string', () => {
      expect(isPrefixedBy('', 'ohai_')).toBe(false);
      expect(isPrefixedBy(null, 'ohai_')).toBe(false);
      expect(isPrefixedBy(void 0, 'ohai_')).toBe(false);
    });

    it('returns false if passed a nil or empty prefix', () => {
      expect(isPrefixedBy('ohai_yep', '')).toBe(false);
      expect(isPrefixedBy('ohai_yep', null)).toBe(false);
      expect(isPrefixedBy('ohai_yep', void 0)).toBe(false);
    });
  });

  describe('removePrefix()', () => {
    it('returns string without prefix as expected', () => {
      expect(removePrefix('ohai_yep', 'ohai_')).toBe('yep');
    });

    it('returns empty string if string is empty or nil', () => {
      expect(removePrefix('', 'ohai_')).toBe('');
      expect(removePrefix(null, 'ohai_')).toBe('');
      expect(removePrefix(void 0, 'ohai_')).toBe('');
    });

    it('returns string if prefix is empty or nil', () => {
      expect(removePrefix('ohai_yep', '')).toBe('ohai_yep');
      expect(removePrefix('ohai_yep', null)).toBe('ohai_yep');
      expect(removePrefix('ohai_yep', void 0)).toBe('ohai_yep');
    });
  });

  describe('removeSuffix()', () => {
    it('returns string without suffix as expected', () => {
      expect(removeSuffix('yep::ohai', '::ohai')).toBe('yep');
    });

    it('returns empty string if string is empty or nil', () => {
      expect(removeSuffix('', '::ohai')).toBe('');
      expect(removeSuffix(null, '::ohai')).toBe('');
      expect(removeSuffix(void 0, '::ohai')).toBe('');
    });

    it('returns string if suffix is empty or nil', () => {
      expect(removeSuffix('yep::ohai', '')).toBe('yep::ohai');
      expect(removeSuffix('yep::ohai', null)).toBe('yep::ohai');
      expect(removeSuffix('yep::ohai', void 0)).toBe('yep::ohai');
    });
  });

  describe('removePrefixOrSuffix()', () => {
    it('defaults to removing a prefix', () => {
      expect(removePrefixOrSuffix('yep_ohai', 'yep')).toBe('_ohai');
    });

    it('returns string if prefix/suffix type is bad', () => {
      expect(removePrefixOrSuffix('yep_ohai', 'yep_', '')).toBe('yep_ohai');
      expect(removePrefixOrSuffix('yep_ohai', 'yep_', null)).toBe('yep_ohai');
      expect(removePrefixOrSuffix('yep_ohai', 'yep_', 'sufix')).toBe('yep_ohai');
    });
  });
});
