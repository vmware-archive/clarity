/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { renderIcon } from '../icon.renderer.js';
import { ClarityIcons } from '../icon.service.js';
import { IconRegistry, IconShapeTuple } from '../interfaces/icon.interfaces.js';
import { testIcons } from '../utils/test-icons.js';
import {
  addIcon,
  addIcons,
  getIcon,
  hasIcon,
  legacyAlias,
  setIconAlias,
  setIconAliases,
} from './icon.service-helpers.js';

describe('ClarityIcons service helper functions: ', () => {
  let registry: any;
  const testRegistry = {
    unknown: 'still here',
    test: 'testing',
  };

  beforeEach(() => {
    registry = Object.assign({}, testRegistry);
  });

  describe('addIcon: ', () => {
    it('should add new icons to registry from strings', () => {
      addIcon(['new-icon', 'ohai'], registry);
      expect(registry['new-icon']).toEqual('ohai');
    });

    it('should add new icons to registry from shapes', () => {
      const [, testShape] = testIcons.justOutline;
      const expected = renderIcon(testShape);
      addIcon(['new-icon', testShape], registry);
      expect(registry['new-icon']).toEqual(expected);
    });

    it('should not overwrite icons if they already exist in the registry', () => {
      const [, testShape] = testIcons.justOutline;
      const unexpected = renderIcon(testShape);
      const iconKey = 'new-icon';
      const expected = 'still here';
      addIcon([iconKey, expected], registry);
      expect(registry[iconKey]).toEqual(expected);
      addIcon([iconKey, testShape], registry);
      expect(registry[iconKey]).not.toEqual(unexpected);
      expect(registry[iconKey]).toEqual(expected);
    });
  });

  describe('addIcons: ', () => {
    it('should add new icons in a group', () => {
      const [, testShape] = testIcons.justOutline;
      const expected = renderIcon(testShape);
      const iconsToAdd: IconShapeTuple[] = [
        ['icon01', 'ohai'],
        ['icon02', 'howdy'],
        ['icon03', testShape],
        ['unknown', 'should not be overwritten'],
      ];

      addIcons(iconsToAdd, registry);
      expect(registry.icon01).toEqual('ohai');
      expect(registry.icon02).toEqual('howdy');
      expect(registry.icon03).toEqual(expected);
      expect(registry.unknown).not.toEqual('should not be overwritten');
      expect(registry.unknown).toEqual('still here');
    });

    it('should not overwrite icons if they already exist in the registry', () => {
      const [, testShape] = testIcons.justOutline;
      const unexpected = renderIcon(testShape);
      const iconKey = 'new-icon';
      const expected = 'still here';
      addIcon([iconKey, expected], registry);
      expect(registry[iconKey]).toEqual(expected);
      addIcon([iconKey, testShape], registry);
      expect(registry[iconKey]).not.toEqual(unexpected);
      expect(registry[iconKey]).toEqual(expected);
    });
  });

  describe('hasIcon: ', () => {
    const hasTestRegistry = {
      here: 'pree-sent',
    };
    it('should return true if icon is in registry', () => {
      expect(hasIcon('here', hasTestRegistry)).toEqual(true);
    });

    it('should return false if icon is not in registry', () => {
      expect(hasIcon('jabberwocky', hasTestRegistry)).toEqual(false);
    });
  });

  describe('setIconAliases: ', () => {
    let aliasTestRegistry: any;

    beforeEach(() => {
      aliasTestRegistry = {
        ohai: 'how are you',
      };
    });

    it('should set up aliases', () => {
      setIconAliases(['ohai', ['hola', 'bonjour']], aliasTestRegistry);
      expect(aliasTestRegistry.hola).toBeDefined();
      expect(aliasTestRegistry.bonjour).toBeDefined();
      expect(aliasTestRegistry.hola).toEqual(aliasTestRegistry.ohai);
      expect(aliasTestRegistry.bonjour).toEqual(aliasTestRegistry.ohai);
    });

    it('should do nothing if there is no icon to alias to', () => {
      setIconAliases(['jabberwocky', ['hola', 'bonjour']], aliasTestRegistry);
      expect(aliasTestRegistry.hola).not.toBeDefined();
      expect(aliasTestRegistry.bonjour).not.toBeDefined();
    });
  });

  describe('setIconAlias: ', () => {
    let aliasTestRegistry: any;

    beforeEach(() => {
      aliasTestRegistry = {
        ohai: 'how are you',
      };
    });

    it('should set up an alias', () => {
      setIconAlias('ohai', 'hola', aliasTestRegistry);
      expect(aliasTestRegistry.hola).toBeDefined();
      expect(aliasTestRegistry.hola).toEqual(aliasTestRegistry.ohai);
    });

    it('should do nothing if there is no icon to alias to', () => {
      setIconAlias('jabberwocky', 'bonjour', aliasTestRegistry);
      expect(aliasTestRegistry.bonjour).not.toBeDefined();
    });
  });

  describe('getIcon: ', () => {
    let getTestRegistry: any;

    beforeEach(() => {
      getTestRegistry = {
        ohai: 'kthxbye',
        unknown: 'here i am',
      };
    });

    it('should return icon from registry as expected if icon exists', () => {
      const myIcon = getIcon('ohai', getTestRegistry);
      expect(myIcon).toEqual(getTestRegistry.ohai);
    });

    it('should return the unknown icon if asked for an icon it cannot find', () => {
      const myIcon = getIcon('jabberwocky', getTestRegistry);
      expect(myIcon).toEqual(getTestRegistry.unknown);
    });
  });

  describe('legacyAlias: ', () => {
    let clonedRegistry: IconRegistry;

    beforeAll(() => {
      clonedRegistry = Object.assign({}, ClarityIcons.registry);
    });

    it('should be able to set an array of aliases', () => {
      const aliases = {
        unknown: ['whut', 'huh', 'ItsAMystery'],
      };
      const theUnknownIcon = getIcon('unknown', clonedRegistry);
      legacyAlias(aliases, clonedRegistry);
      expect(getIcon(aliases.unknown[0], clonedRegistry)).toEqual(theUnknownIcon);
      expect(getIcon(aliases.unknown[1], clonedRegistry)).toEqual(theUnknownIcon);
      expect(getIcon(aliases.unknown[2], clonedRegistry)).toEqual(theUnknownIcon);
    });
  });
});
