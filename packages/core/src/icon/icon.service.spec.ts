/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from './icon.renderer.js';
import { ClarityIcons } from './icon.service.js';
import { IconAlias, IconShapeTuple } from './interfaces/icon.interfaces.js';
import { testIcons } from './utils/test-icons.js';

describe('ClarityIcons service: ', () => {
  describe('addIcons: ', () => {
    it('should add icons to the registry using legacy call signature', () => {
      ClarityIcons.addIcons(['test01', 'testing']);
      expect(ClarityIcons.registry['test01']).toEqual('testing');
    });

    it('should be able to add multiple icons to the registry using legacy call signature', () => {
      ClarityIcons.addIcons(['test02', 'testing'], ['test03', 'ohai']);
      expect(ClarityIcons.registry['test02']).toEqual('testing');
      expect(ClarityIcons.registry['test03']).toEqual('ohai');
    });

    it('should add icons to the registry using icon shapes', () => {
      const [, testShape] = testIcons.justOutline;
      const expected = renderIcon(testShape);
      ClarityIcons.addIcons(['test04', testShape]);
      expect(ClarityIcons.registry['test04']).toEqual(expected);
    });

    it('should add icons to the registry using strings', () => {
      ClarityIcons.addIcons(['test05', 'testing']);
      expect(ClarityIcons.registry['test05']).toEqual('testing');
    });

    it('should not overwrite icons that have already been added to the registry (legacy api)', () => {
      const [, testShape] = testIcons.justOutline;
      ClarityIcons.addIcons(['test06', 'testing']);
      expect(ClarityIcons.registry['test06']).toEqual('testing');
      ClarityIcons.addIcons(['test06', testShape]);
      expect(ClarityIcons.registry['test06']).toEqual('testing');
    });
  });

  describe('addIcon: ', () => {
    it('should add icons to the registry using icon shape tuples', () => {
      const [, testShape] = testIcons.badgedIcon;
      const expected = renderIcon(testShape);
      ClarityIcons.addIcons(['test07', testShape]);
      expect(ClarityIcons.registry['test07']).toEqual(expected);
    });

    it('should add icons to the registry using string tuples', () => {
      ClarityIcons.addIcons(['test08', 'testing']);
      expect(ClarityIcons.registry['test08']).toEqual('testing');
    });

    it('should not overwrite icons that have already been added to the registry (legacy api)', () => {
      ClarityIcons.addIcons(['test09', 'ohai']);
      expect(ClarityIcons.registry['test09']).toEqual('ohai');
      ClarityIcons.addIcons(['test09', 'kthxbye']);
      expect(ClarityIcons.registry['test09']).toEqual('ohai');
    });
  });

  describe('getIconNameFromShape: ', () => {
    it('should return the icon name string from an icon shape tuple', () => {
      const testIcon: IconShapeTuple = ['test09', 'ohai'];
      ClarityIcons.addIcons(testIcon);
      expect(ClarityIcons.getIconNameFromShape(testIcon)).toEqual('test09');
    });
  });

  describe('addAliases: ', () => {
    it('should be able to set an array of aliases', () => {
      const iconName = 'unknown';
      const aliases: IconAlias[] = [
        [iconName, ['whut']],
        [iconName, ['huh']],
        [iconName, ['ItsAMystery']],
      ];

      const theUnknownIcon = ClarityIcons.registry[iconName];
      ClarityIcons.addAliases(...aliases);
      expect(ClarityIcons.registry['whut']).toEqual(theUnknownIcon);
      expect(ClarityIcons.registry['huh']).toEqual(theUnknownIcon);
      expect(ClarityIcons.registry['ItsAMystery']).toEqual(theUnknownIcon);
    });
  });
});
