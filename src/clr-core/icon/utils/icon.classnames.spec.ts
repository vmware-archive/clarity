/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeCollection } from '../interfaces/icon.interfaces';
import { getIconSvgClasses, IconSvgClassnames } from './icon.classnames';
import { testIcons } from './test-icons';

describe('Icon classname helpers: ', () => {
  describe('getIconSvgClasses: ', () => {
    const stringHasClassname = (classnames: string) => (stringToTest: string) => {
      return classnames.indexOf(stringToTest) > -1;
    };
    it('should not add classes to only outline shape', () => {
      const [, testShape] = testIcons.justOutline;
      const test = stringHasClassname(getIconSvgClasses(<IconShapeCollection>testShape));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should add solid class when expected', () => {
      const [, testShape] = testIcons.solidIcon;
      const test = stringHasClassname(getIconSvgClasses(<IconShapeCollection>testShape));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(true);
    });
    it('should add badged class when expected', () => {
      const [, testShape] = testIcons.nonAlertedIcon;
      const test = stringHasClassname(getIconSvgClasses(<IconShapeCollection>testShape));
      expect(test(IconSvgClassnames.Alerted)).toEqual(false);
      expect(test(IconSvgClassnames.Badged)).toEqual(true);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should add alerted class when expected', () => {
      const [, testShape] = testIcons.nonBadgedIcon;
      const test = stringHasClassname(getIconSvgClasses(<IconShapeCollection>testShape));
      expect(test(IconSvgClassnames.Alerted)).toEqual(true);
      expect(test(IconSvgClassnames.Badged)).toEqual(false);
      expect(test(IconSvgClassnames.Solid)).toEqual(false);
    });
    it('should be able to add all three', () => {
      const [, testShape] = testIcons.allIcon;
      const test = stringHasClassname(getIconSvgClasses(<IconShapeCollection>testShape));
      expect(test(IconSvgClassnames.Alerted)).toEqual(true);
      expect(test(IconSvgClassnames.Badged)).toEqual(true);
      expect(test(IconSvgClassnames.Solid)).toEqual(true);
    });
  });
});
