/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { ClarityMotion } from './motion.service.js';

describe('ClarityMotion service: ', () => {
  const setConfig = [
    {
      target: '.test',
      animation: [{ opacity: 0 }, { opacity: 1 }],
      options: {
        duration: 350,
        easing: 'ease-out',
      },
    },
  ];

  ClarityMotion.add('test', setConfig);

  describe('get()', () => {
    it('returns animation configs that were added to the service', () => {
      const test = ClarityMotion.get('test');
      expect(test).toEqual(setConfig);
    });

    it('returns empty if animation config is not found', () => {
      const nope = ClarityMotion.get('asdfaeawfwefasddf');
      expect(nope).toEqual([]);
    });
  });

  describe('has()', () => {
    it('returns true if animation configs were added to the service', () => {
      const test = ClarityMotion.has('test');
      expect(test).toEqual(true);
    });

    it('returns false if animation config is not found', () => {
      const nope = ClarityMotion.has('asdfaeawfwefasddf');
      expect(nope).toEqual(false);
    });
  });

  describe('add()', () => {
    // add basic functionality tested in get()
    it('early returns if passed a falsy animation name', () => {
      spyOn(ClarityMotion, 'add');
      ClarityMotion.add(null, setConfig);
      ClarityMotion.add(void 0, setConfig);
      ClarityMotion.add('', setConfig);
      expect(ClarityMotion.add).not.toThrowError();
    });

    it('early returns if not passed an animation config; assigns an empty config though', () => {
      spyOn(ClarityMotion, 'add');
      expect(ClarityMotion.get('animation-null')).toEqual([]);
      expect(ClarityMotion.get('animation-void')).toEqual([]);
      expect(ClarityMotion.get('animation-empty')).toEqual([]);
      expect(ClarityMotion.add).not.toThrowError();
    });
  });

  describe('registry()', () => {
    it('returns as expected', () => {
      expect(ClarityMotion.registry).toBeDefined();
    });
  });
});
