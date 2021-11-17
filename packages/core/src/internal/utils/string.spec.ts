/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  camelCaseToKebabCase,
  convertStringPropertyToObjectConfig,
  interpolateNaively,
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
  pluckPixelValue,
  pluckValueFromStringUnit,
  removePrefix,
  removeSuffix,
  removePrefixOrSuffix,
  replaceWord,
  transformSpacedStringToArray,
  trimExtraWhitespace,
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

  describe('pluckPixelValue: ', () => {
    it('returns numbers as expected', () => {
      expect(pluckPixelValue('86.75309px')).toBe(86.75309, 'works for decimals');
      expect(pluckPixelValue('49px')).toBe(49, 'works for integers');
      expect(pluckPixelValue('-2020px')).toBe(-2020, 'works for negative numbers');
      expect(pluckPixelValue('-8675.309px')).toBe(-8675.309, 'works for negative decimals too');
    });

    it('handles bad input', () => {
      expect(pluckPixelValue('3rem')).toBe(0, 'needs pixel values');
      expect(pluckPixelValue('')).toBe(0, 'handles empty strings');
      expect(pluckPixelValue(void 0)).toBe(0, 'handles undefined');
    });
  });

  describe('pluckValueFromStringUnit: ', () => {
    it('returns numbers as expected', () => {
      expect(pluckValueFromStringUnit('86.75309str', 'str')).toBe(86.75309, 'works for decimals');
      expect(pluckValueFromStringUnit('49str', 'str')).toBe(49, 'works for integers');
      expect(pluckValueFromStringUnit('-2020str', 'str')).toBe(-2020, 'works for negative numbers');
      expect(pluckValueFromStringUnit('-8675.309str', 'str')).toBe(-8675.309, 'works for negative decimals too');
    });

    it('handles bad input', () => {
      expect(pluckValueFromStringUnit('30vh', 'str')).toBe(0, 'needs to find unit');
      expect(pluckValueFromStringUnit('', 'str')).toBe(0, 'handles empty strings');
      expect(pluckValueFromStringUnit(void 0, 'str')).toBe(0, 'handles undefined');
      expect(pluckValueFromStringUnit('      ', 'str')).toBe(0, 'trims to empty string');
      expect(pluckValueFromStringUnit('  100str   ', 'str')).toBe(100, 'trims to string value');
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

  describe('replaceWord()', () => {
    it('defaults to removing words', () => {
      expect(replaceWord('dog seahawk cat', 'seahawk')).toBe('dog cat');
    });

    it('removes more than one instance of a word', () => {
      expect(replaceWord('seahawk dog horse seahawk cat seahawk seahawk mouse', 'seahawk')).toBe('dog horse cat mouse');
    });

    it('handles empty strings', () => {
      expect(replaceWord('', 'ohai')).toBe('');
    });

    it('does not mess with string if word is not in it', () => {
      expect(replaceWord('dog horse cat seahawk mouse', 'niner')).toBe('dog horse cat seahawk mouse');
    });

    it('can also do a replace', () => {
      expect(replaceWord('dog horse cat seahawk mouse', 'seahawk', 'niner')).toBe('dog horse cat niner mouse');
    });

    it('can replace multiple instances of a word', () => {
      expect(replaceWord('seahawk dog horse seahawk cat seahawk seahawk mouse', 'seahawk', 'niner')).toBe(
        'niner dog horse niner cat niner niner mouse'
      );
    });
  });

  describe('convertStringPropertyToObjectConfig()', () => {
    const defaultConfig = { greeting: 'goodnight', target: 'moon' };

    it('defaults to identity of default config if the converter is not passed', () => {
      expect(convertStringPropertyToObjectConfig('hello world', defaultConfig)).toEqual(defaultConfig);
    });

    it('returns default config if the converter is a no-op', () => {
      const noopConverter = () => {
        return {};
      };
      expect(convertStringPropertyToObjectConfig('hello world', defaultConfig, noopConverter)).toEqual(defaultConfig);
    });

    it('returns default config values if the converter is not relevant', () => {
      const irrelevantConverter = (p: string) => {
        const returnObj = {};
        if (p === 'supercalifragilisticexpialidocious') {
          Object.assign(returnObj, { dontDoThis: 'true' });
        }
        return returnObj;
      };
      const testMe = convertStringPropertyToObjectConfig('hello world', defaultConfig, irrelevantConverter) as any;
      expect(testMe).toEqual(defaultConfig);
      expect(testMe.dontDoThis).toBeUndefined();
    });

    it('converts string values as specified by the converter', () => {
      const converter = (p: string) => {
        const returnObj = {};
        p.split(' ').forEach(p => {
          switch (p) {
            case 'hello':
              (returnObj as any).greeting = 'hello';
              break;
            case 'world':
              (returnObj as any).target = 'world';
              break;
            default:
              break;
          }
        });
        return returnObj;
      };
      const testMe = convertStringPropertyToObjectConfig('hello world', defaultConfig, converter) as any;
      expect(testMe.greeting).toBe('hello');
      expect(testMe.target).toBe('world');
    });
  });

  describe('trimExtraWhitespace()', () => {
    it('returns empty string with bad input', () => {
      expect(trimExtraWhitespace(null)).toBe('', 'handles null');
      expect(trimExtraWhitespace(void 0)).toBe('', 'handles undefined');
      expect(trimExtraWhitespace('       ')).toBe('', 'handles empty spaces');
      expect(trimExtraWhitespace('')).toBe('', 'handles empty string');
    });

    it('returns as expected', () => {
      const test1 = trimExtraWhitespace('a       b     ');
      const test2 = trimExtraWhitespace('  c  d   e');
      expect(test1).toBe('a b');
      expect(test2).toBe('c d e');
    });

    it('does not mutate the param', () => {
      const ohai = ' my    weird     string              ';
      const testMe = trimExtraWhitespace(ohai);
      expect(testMe).toBe('my weird string');
      expect(ohai).toBe(' my    weird     string              ');
    });
  });

  describe('transformSpacedStringToArray()', () => {
    it('returns empty array with bad input', () => {
      expect(transformSpacedStringToArray(null)).toEqual([], 'handles null');
      expect(transformSpacedStringToArray(void 0)).toEqual([], 'handles undefined');
      expect(transformSpacedStringToArray('       ')).toEqual([], 'handles empty spaces');
      expect(transformSpacedStringToArray('')).toEqual([], 'handles empty string');
    });

    it('returns array of strings as expected', () => {
      const testMe = transformSpacedStringToArray('1 2 3');
      const testMeTrimmed = transformSpacedStringToArray('  4 5   6 ');
      expect(testMe).toEqual(['1', '2', '3']);
      expect(testMeTrimmed).toEqual(['4', '5', '6']);
    });
  });

  describe('interpolateNaively()', () => {
    const testObj = {
      location: 'forest',
      creature: 'jabberwocky',
    };

    const numberObj = {
      currentPage: 8,
      totalPages: 100,
    };

    const nestedObj = {
      person: {
        name: 'Saul',
        preferred_contact: 'call',
      },
      location: {
        city: 'Roswell',
        state: {
          name: 'New Mexico',
          addl_info: {
            abbrev: 'NM',
          },
        },
        country: 'USA',
      },
    };

    function ohai() {
      return true;
    }

    const badObj: { nope: null; [key: string]: any } = {
      func: ohai,
      inlineFunc: () => {
        return false;
      },
      arry: [1, 2, 3, '500'],
      nope: null,
      empty: '',
      bool: false,
    };

    it('substitutes tokens for object properties', () => {
      const testMe = interpolateNaively('In the ${location}, there are lots of ${creature}', testObj);
      const expected = 'In the forest, there are lots of jabberwocky';
      expect(testMe).toBe(expected);
    });

    it('does alright with numbers', () => {
      const testMe = interpolateNaively('Reading page ${currentPage} of ${totalPages}', numberObj);
      const expected = 'Reading page 8 of 100';
      expect(testMe).toBe(expected);
    });

    it('does alright with nested properties', () => {
      const testMe = interpolateNaively(
        'In ${location.city}, ${location.state.name} (${location.country}), you better ${person.preferred_contact} ${person.name}',
        nestedObj
      );
      const expected = 'In Roswell, New Mexico (USA), you better call Saul';
      expect(testMe).toBe(expected);
    });

    it('ignores whitespace before and after the path', () => {
      const testMe = interpolateNaively(
        'You better ${person.preferred_contact   } ${      person.name     }',
        nestedObj
      );
      const expected = 'You better call Saul';
      expect(testMe).toBe(expected);
    });

    it('uses fallback if object property is not found', () => {
      const testMe = interpolateNaively('${greeting.display}, ${location}', testObj);
      const expected = '${greeting.display}, forest';
      expect(testMe).toBe(expected);
    });

    it('displays token and path as fallback if none is given', () => {
      const testMe = interpolateNaively('${greeting.display}, ${location}', testObj, 'Howdy');
      const expected = 'Howdy, forest';
      expect(testMe).toBe(expected);
    });

    it('does not die on functions (1 of 2)', () => {
      const testMe = interpolateNaively('${func}', badObj);
      expect(testMe.indexOf('function ohai()') > -1).toBe(true);
    });

    it('does not die on functions (2 of 2)', () => {
      const testMe = interpolateNaively('${inlineFunc}', badObj);
      expect(testMe.indexOf('() => {') > -1).toBe(true);
    });

    it('does not die on arrays', () => {
      const testMe = interpolateNaively('${arry}', badObj);
      expect(testMe).toBe('1,2,3,500');
    });

    it('does not die on null, empty strings, or booleans', () => {
      expect(interpolateNaively('this is... ${nope}', badObj)).toBe('this is... null');
      expect(interpolateNaively('this is... ${empty}', badObj)).toBe('this is... ');
      expect(interpolateNaively('this is... ${bool}', badObj)).toBe('this is... false');
      expect(interpolateNaively('this is... ${undef}', badObj)).toBe('this is... ${undef}');
    });
  });
});
