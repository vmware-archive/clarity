/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from './icon.renderer';
import { ClarityIcons } from './icon.service';
import { IconShapeCollection, IconShapeSources } from './interfaces/icon.interfaces';
import { getCollectionFromTestIcons, testIcons } from './utils/test-icons';

describe('ClarityIcons service: ', () => {
  describe('get: ', () => {
    let registry: IconShapeSources;

    beforeAll(() => {
      registry = Object.assign({}, ClarityIcons.registry);
    });

    it('should return the registry on empty string or null', () => {
      expect(ClarityIcons.get('')).toEqual(registry);
      expect(ClarityIcons.get(null)).toEqual(registry);
    });

    it('should have an unknown icon initialized in its registry', () => {
      expect(ClarityIcons.get('unknown')).toBeDefined();
    });
  });

  describe('add: ', () => {
    it('should add icons to the registry using legacy call signature', () => {
      ClarityIcons.add({
        test01: 'testing',
      });
      expect(ClarityIcons.get('test01')).toEqual('testing');
    });

    it('should be able to add multiple icons to the registry using legacy call signature', () => {
      ClarityIcons.add({
        test02: 'testing',
        test03: 'ohai',
      });
      expect(ClarityIcons.get('test02')).toEqual('testing');
      expect(ClarityIcons.get('test03')).toEqual('ohai');
    });

    it('should add icons to the registry using icon shapes', () => {
      const [, testShape] = testIcons.justOutline;
      const expected = renderIcon(testShape);
      ClarityIcons.add({
        test04: testShape,
      });
      expect(ClarityIcons.get('test04')).toEqual(expected);
    });

    it('should add icons to the registry using strings', () => {
      ClarityIcons.add({
        test05: 'testing',
      });
      expect(ClarityIcons.get('test05')).toEqual('testing');
    });

    it('should not overwrite icons that have already been added to the registry (legacy api)', () => {
      const [, testShape] = testIcons.justOutline;
      ClarityIcons.add({
        test06: 'testing',
      });
      expect(ClarityIcons.get('test06')).toEqual('testing');
      ClarityIcons.add({
        test06: testShape,
      });
      expect(ClarityIcons.get('test06')).toEqual('testing');
    });
  });

  describe('addIcon: ', () => {
    it('should add icons to the registry using icon shape tuples', () => {
      const [, testShape] = testIcons.badgedIcon;
      const expected = renderIcon(testShape);
      ClarityIcons.addIcon(['test07', <IconShapeCollection>testShape]);
      expect(ClarityIcons.get('test07')).toEqual(expected);
    });

    it('should add icons to the registry using string tuples', () => {
      ClarityIcons.addIcon(['test08', <string>'testing']);
      expect(ClarityIcons.get('test08')).toEqual('testing');
    });

    it('should not overwrite icons that have already been added to the registry (legacy api)', () => {
      ClarityIcons.addIcon(['test09', <string>'ohai']);
      expect(ClarityIcons.get('test09')).toEqual('ohai');
      ClarityIcons.addIcon(['test09', <string>'kthxbye']);
      expect(ClarityIcons.get('test09')).toEqual('ohai');
    });
  });

  describe('addCollection: ', () => {
    it('should add icons and aliases', () => {
      const myCollection = getCollectionFromTestIcons();
      ClarityIcons.addCollection(myCollection);
      expect(ClarityIcons.get('colltest999')).toBeDefined();
      expect(ClarityIcons.get('colltest1000')).toBeDefined();
      expect(ClarityIcons.get('colltest1001')).toBeDefined();
      expect(ClarityIcons.get('colltest1002')).toBeDefined();
      expect(ClarityIcons.get('the-works')).toBeDefined();
      expect(ClarityIcons.get('just-lines')).toBeDefined();
    });
  });

  describe('alias: ', () => {
    let clonedRegistry: IconShapeSources;

    beforeAll(() => {
      clonedRegistry = Object.assign({}, ClarityIcons.registry);
    });

    it('should be able to set an array of aliases', () => {
      const aliases = {
        unknown: ['whut', 'huh', 'ItsAMystery'],
      };
      const theUnknownIcon = ClarityIcons.get('unknown');
      ClarityIcons.alias(aliases);
      expect(ClarityIcons.get(aliases.unknown[0])).toEqual(theUnknownIcon);
      expect(ClarityIcons.get(aliases.unknown[1])).toEqual(theUnknownIcon);
      expect(ClarityIcons.get(aliases.unknown[2])).toEqual(theUnknownIcon);
    });
  });
});
