/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement } from './../../test/utils.js';
import { updateElementStyles } from './css.js';
import { isTshirtSize, updateEquilateralSizeStyles } from './size.js';

describe('Functional Helper: ', () => {
  describe('isTshirtSize(): ', () => {
    it('identifies t-shirt sizes as expected', () => {
      expect(isTshirtSize('xxs')).toEqual(true);
      expect(isTshirtSize('xs')).toEqual(true);
      expect(isTshirtSize('sm')).toEqual(true);
      expect(isTshirtSize('md')).toEqual(true);
      expect(isTshirtSize('lg')).toEqual(true);
      expect(isTshirtSize('xl')).toEqual(true);
      expect(isTshirtSize('xxl')).toEqual(true);
    });
    it('rejects non t-shirt sizes as expected', () => {
      expect(isTshirtSize(undefined)).toEqual(false, 'undefined is not a t-shirt size');
      expect(isTshirtSize(null)).toEqual(false, 'null is not a t-shirt size');
      expect(isTshirtSize('')).toEqual(false, 'empty string is not a t-shirt size');
      expect(isTshirtSize('    ')).toEqual(false, 'string of spaces is not a t-shirt size');
      expect(isTshirtSize('ohai')).toEqual(false, 'string is not a t-shirt size');
      expect(isTshirtSize('xx')).toEqual(false, 'partial size is not a t-shirt size');
    });
  });

  describe('updateEquilateralSizeStyles(): ', () => {
    const initSize = '49px';
    let testElement: HTMLElement;
    let testDiv: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<div id="myTestElement" class="test1 test2">Ohai</div>`);
      testDiv = testElement.querySelector<HTMLElement>('#myTestElement');
      updateElementStyles(testDiv, ['width', initSize], ['height', initSize]);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('removes equilateral styles if passed undefined size', () => {
      updateEquilateralSizeStyles(testDiv, void 0);
      expect(testDiv.style.width).not.toBe(initSize);
      expect(testDiv.style.height).not.toBe(initSize);
    });

    it('removes equilateral styles if passed null size', () => {
      updateEquilateralSizeStyles(testDiv, null);
      expect(testDiv.style.width).not.toBe(initSize);
      expect(testDiv.style.height).not.toBe(initSize);
    });

    it('removes equilateral styles if passed empty size', () => {
      updateEquilateralSizeStyles(testDiv, '');
      expect(testDiv.style.width).not.toBe(initSize);
      expect(testDiv.style.height).not.toBe(initSize);
    });

    it('removes equilateral styles if passed a t-shirt size', () => {
      updateEquilateralSizeStyles(testDiv, 'xl');
      expect(testDiv.style.width).not.toBe(initSize);
      expect(testDiv.style.height).not.toBe(initSize);
    });

    it('updates equilateral styles if passed a numeric string', () => {
      updateEquilateralSizeStyles(testDiv, '100');
      expect(testDiv.style.width).toBe('5rem');
      expect(testDiv.style.height).toBe('5rem');
    });

    it('does nothing if passed a non-numeric string that is not a t-shirt size', () => {
      updateEquilateralSizeStyles(testDiv, 'ohai');
      expect(testDiv.style.width).toBe(initSize);
      expect(testDiv.style.height).toBe(initSize);
    });
  });
});
