/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement } from './../../test/utils.js';
import {
  addClassnames,
  hasClassnames,
  pxToRem,
  removeClassnames,
  removeClassnamesUnless,
  updateElementStyles,
  isCssPropertyName,
  getCssPropertyValue,
} from './css.js';

describe('Css utility functions - ', () => {
  let testElement: HTMLElement;
  let testDiv: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<div id="myTestElement" class="test1 test2">Ohai</div>`);
    testDiv = testElement.querySelector<HTMLElement>('#myTestElement');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('hasClassnames: ', () => {
    it('should say if the element has a classname', () => {
      expect(hasClassnames(testDiv, 'test1')).toEqual(true);
      expect(hasClassnames(testDiv, 'test4')).toEqual(false);
    });

    it('should support multiple classnames and return as logical AND', () => {
      expect(hasClassnames(testDiv, 'test1', 'test2')).toEqual(true);
      expect(hasClassnames(testDiv, 'test1', 'test3')).toEqual(false);
    });
  });

  describe('addClassnames: ', () => {
    it('should say if the element has a classname', () => {
      expect(addClassnames(testDiv, 'ohai').classList.contains('ohai')).toEqual(true);
    });
    it('should support multiple classnames', () => {
      const testMe = addClassnames(testDiv, 'ohai', 'kthxbye');
      expect(testMe.classList.contains('ohai')).toEqual(true);
      expect(testMe.classList.contains('kthxbye')).toEqual(true);
    });
  });

  describe('removeClassnames: ', () => {
    it('should remove classnames from the element', () => {
      const testMe = removeClassnames(testDiv, 'test1');
      expect(testMe.classList.contains('test1')).toBe(false);
    });
    it('should support multiple classnames', () => {
      const testMe = removeClassnames(testDiv, 'test1', 'test2');
      expect(testMe.classList.contains('test1')).toBe(false);
      expect(testMe.classList.contains('test2')).toBe(false);
    });
    it('should handle non-existent classes gracefully', () => {
      const testMe = removeClassnames(testDiv, 'test8', 'test1');
      expect(testMe.classList.contains('test1')).toBe(false);
    });
  });

  describe('removeClassnamesUnless: ', () => {
    it('should skip classnames in the keep array', () => {
      addClassnames(testDiv, 'ohai', 'kthxbye');
      const testMe = removeClassnamesUnless(testDiv, ['test1', 'ohai', 'test2'], ['test2', 'ohai']);
      expect(testMe.classList.contains('test1')).toBe(false);
      expect(testMe.classList.contains('test2')).toBe(true);
      expect(testMe.classList.contains('ohai')).toBe(true);
      expect(testMe.classList.contains('kthxbye')).toBe(true);
    });
  });

  describe('updateElementStyles: ', () => {
    it('should set element styles as expected', () => {
      const testMe = updateElementStyles(
        testDiv,
        ['backgroundColor', 'yellow'],
        ['width', '100%'],
        ['fontSize', '28px']
      );
      expect(testMe.style.backgroundColor).toBe('yellow');
      expect(testMe.style.width).toBe('100%');
      expect(testMe.style.fontSize).toBe('28px');
    });
  });

  describe('pxToRem: ', () => {
    it('should convert px to rem values from base font size token', () => {
      expect(pxToRem(10)).toBe('0.5rem');
    });

    it('should cache the rem calculation to the HTML cds-font-size attr', () => {
      document.documentElement.setAttribute('cds-base-font', null);
      expect(pxToRem(20)).toBe('1rem');
      expect(document.documentElement.getAttribute('cds-base-font')).toBe('20');
    });
  });

  describe('isCssPropertyName: ', () => {
    it('should work as expected', () => {
      expect(isCssPropertyName('--color')).toBe(true);
      expect(isCssPropertyName('--border-color')).toBe(true);
      expect(isCssPropertyName('border-color')).toBe(false);
    });
    it('should handle falsy values', () => {
      expect(isCssPropertyName('')).toBe(false);
      expect(isCssPropertyName(null)).toBe(false);
      expect(isCssPropertyName(void 0)).toBe(false);
    });
    it('should handle bad inputs', () => {
      expect(isCssPropertyName(500)).toBe(false);
      expect(isCssPropertyName([])).toBe(false);
      expect(isCssPropertyName({})).toBe(false);
    });
  });

  describe('getCssPropertyValue: ', () => {
    it('should work as expected', async () => {
      const el = await createTestElement(
        html`<style>
            .ohai {
              --ohai: green;
            }
          </style>
          <div class="ohai">ohai</div>`
      );
      expect(getCssPropertyValue('--ohai', el.querySelector('.ohai'))).toBe('green');
      removeTestElement(el);
    });
    it('should handle falsy values', () => {
      const newStyle = document.createElement('style');
      document.head.appendChild(newStyle);
      newStyle.innerHTML = ':root { --ohai: green; }';
      expect(getCssPropertyValue('--ohai')).toBe('green');
      document.head.removeChild(newStyle);
    });
  });
});
