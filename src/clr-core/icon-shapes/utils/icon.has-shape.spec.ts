/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { IconShapeCollection } from '../interfaces/icon.interfaces.js';
import { iconHasAlertedShapes, iconHasBadgedShapes, iconHasSolidShapes } from './icon.has-shape.js';
import { testIcons } from './test-icons.js';

describe('icon hasShape helpers: ', () => {
  describe('iconHasBadgedShapes', () => {
    it('should return true if icon has badged shapes', () => {
      const [, testShape] = testIcons.badgedIcon;
      const [, testShape2] = testIcons.badgedIcon2;
      expect(iconHasBadgedShapes(testShape as IconShapeCollection)).toEqual(true);
      expect(iconHasBadgedShapes(testShape2 as IconShapeCollection)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.nonBadgedIcon;
      expect(iconHasBadgedShapes(testShape as IconShapeCollection)).toEqual(false);
    });
  });

  describe('iconHasAlertedShapes', () => {
    it('should return true if icon has badged shapes', () => {
      const [, testShape] = testIcons.alertedIcon;
      const [, testShape2] = testIcons.alertedIcon2;
      expect(iconHasAlertedShapes(testShape as IconShapeCollection)).toEqual(true);
      expect(iconHasAlertedShapes(testShape2 as IconShapeCollection)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.nonAlertedIcon;
      expect(iconHasAlertedShapes(testShape as IconShapeCollection)).toEqual(false);
    });
  });

  describe('iconHasSolidShapes', () => {
    it('should return true if icon has badged shapes', () => {
      const [, testShape] = testIcons.solidIcon;
      const [, testShape2] = testIcons.solidIcon2;
      const [, testShape3] = testIcons.solidIcon3;
      expect(iconHasSolidShapes(testShape as IconShapeCollection)).toEqual(true);
      expect(iconHasSolidShapes(testShape2 as IconShapeCollection)).toEqual(true);
      expect(iconHasSolidShapes(testShape3 as IconShapeCollection)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.justOutline;
      expect(iconHasSolidShapes(testShape as IconShapeCollection)).toEqual(false);
    });
  });
});
