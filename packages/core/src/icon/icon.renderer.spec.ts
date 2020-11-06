/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { isString } from '@cds/core/internal';
import { getInnerSvgFromShapes, renderIcon } from './icon.renderer.js';
import { IconShapeSources } from './interfaces/icon.interfaces.js';
import { IconDecorationClassnames, IconSvgClassnames } from './utils/icon.classnames.js';
import { dummyIconShape, testIcons } from './utils/test-icons.js';

describe('Icon renderer: ', () => {
  describe('renderIcon: ', () => {
    it('should return a string if passed a string or a shape', () => {
      expect(isString(renderIcon(dummyIconShape))).toEqual(true);
      expect(isString(renderIcon('<svg><path/></svg>'))).toEqual(true);
    });
  });
  describe('renderIconFromShapes: ', () => {
    describe(' - svg tags: ', () => {
      it('should have opening and closing svg tags', () => {
        const [, testShape] = testIcons.justOutline;
        const test = renderIcon(testShape);
        expect(test.indexOf('<svg') > -1).toEqual(true);
        expect(test.indexOf('</svg>') > -1).toEqual(true);
      });
      it('should have expected classes on svg tag of solid icons', () => {
        const [, testShape] = testIcons.solidIcon;
        const test = renderIcon(testShape);
        expect(test.indexOf(IconSvgClassnames.Solid) > -1).toEqual(true);
      });
      it('should have expected classes on svg tag of badged icons', () => {
        const [, testShape] = testIcons.badgedIcon;
        const test = renderIcon(testShape);
        expect(test.indexOf(IconSvgClassnames.Badged) > -1).toEqual(true);
      });
      it('should have expected classes on svg tag of alerted icons', () => {
        const [, testShape] = testIcons.alertedIcon;
        const test = renderIcon(testShape);
        expect(test.indexOf(IconSvgClassnames.Alerted) > -1).toEqual(true);
      });
    });
    it('should add badge to badged shapes', () => {
      const [, testShape] = testIcons.badgedIcon;
      const test = renderIcon(testShape);
      expect(test.indexOf(IconDecorationClassnames.Badge) > -1).toEqual(true);
    });
    it('should add alert to alerted shapes', () => {
      expect(isString(renderIcon(dummyIconShape))).toEqual(true);
      expect(isString(renderIcon('<svg><path/></svg>'))).toEqual(true);
    });
  });
  describe('renderIconFromString: ', () => {
    it('should return what it is given', () => {
      const testString = 'abcdefghijklmnop';
      const test = renderIcon(testString);
      expect(test).toEqual(testString);
    });
  });
  describe('getInnerSvgFromShapes: ', () => {
    it('should return an array of functions equal to the number of shapes in the collection', () => {
      const [, shapes] = testIcons.allIcon;
      expect(getInnerSvgFromShapes(shapes as IconShapeSources).length).toEqual(6);
    });
  });
});
