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
      expect(iconHasBadgedShapes(<IconShapeCollection>testShape)).toEqual(true);
      expect(iconHasBadgedShapes(<IconShapeCollection>testShape2)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.nonBadgedIcon;
      expect(iconHasBadgedShapes(<IconShapeCollection>testShape)).toEqual(false);
    });
  });

  describe('iconHasAlertedShapes', () => {
    it('should return true if icon has badged shapes', () => {
      const [, testShape] = testIcons.alertedIcon;
      const [, testShape2] = testIcons.alertedIcon2;
      expect(iconHasAlertedShapes(<IconShapeCollection>testShape)).toEqual(true);
      expect(iconHasAlertedShapes(<IconShapeCollection>testShape2)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.nonAlertedIcon;
      expect(iconHasAlertedShapes(<IconShapeCollection>testShape)).toEqual(false);
    });
  });

  describe('iconHasSolidShapes', () => {
    it('should return true if icon has badged shapes', () => {
      const [, testShape] = testIcons.solidIcon;
      const [, testShape2] = testIcons.solidIcon2;
      const [, testShape3] = testIcons.solidIcon3;
      expect(iconHasSolidShapes(<IconShapeCollection>testShape)).toEqual(true);
      expect(iconHasSolidShapes(<IconShapeCollection>testShape2)).toEqual(true);
      expect(iconHasSolidShapes(<IconShapeCollection>testShape3)).toEqual(true);
    });
    it('should return false if icon does not have badged shapes', () => {
      const [, testShape] = testIcons.justOutline;
      expect(iconHasSolidShapes(<IconShapeCollection>testShape)).toEqual(false);
    });
  });
});
