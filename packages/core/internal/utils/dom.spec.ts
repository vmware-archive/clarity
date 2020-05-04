/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { createTestElement, removeTestElement } from '@clr/core/test/utils';
import {
  addAttributeValue,
  getElementWidth,
  getElementWidthUnless,
  HTMLAttributeTuple,
  isHTMLElement,
  removeAttributes,
  removeAttributeValue,
  setAttributes,
} from './dom.js';

describe('Functional Helper: ', () => {
  describe('getElementWidth() ', () => {
    let testElement: HTMLElement;
    const elementWidth = '100px';

    beforeEach(() => {
      testElement = createTestElement();
      testElement.style.width = elementWidth;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns the width of an element', () => {
      expect(getElementWidth(testElement)).toEqual(elementWidth);
    });

    it('returns an empty string if passed junk', () => {
      expect(getElementWidth(null)).toEqual('');
    });
  });

  describe('getElementWidthUnless() ', () => {
    let testElement: HTMLElement;
    const elementWidth = '100px';

    beforeEach(() => {
      testElement = createTestElement();
      testElement.style.width = elementWidth;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns the width of an element when unless is false', () => {
      expect(getElementWidthUnless(testElement, false)).toEqual(elementWidth);
    });

    it('returns empty string when unless is true', () => {
      expect(getElementWidthUnless(testElement, true)).toEqual('');
    });
  });

  describe('isHTMLElement() ', () => {
    let testElement: any;

    it('returns true if it is an HTMLElement', () => {
      testElement = createTestElement();
      expect(isHTMLElement(testElement)).toEqual(true);
    });

    it('returns false if undefined or null', () => {
      testElement = undefined;
      expect(isHTMLElement(testElement)).toEqual(false);

      testElement = null;
      expect(isHTMLElement(testElement)).toEqual(false);
    });

    it('returns false if it is not an HTMLElement', () => {
      testElement = 2;
      expect(isHTMLElement(testElement)).toEqual(false);
    });
  });

  describe('addAttributeValue() ', () => {
    let testElement: HTMLElement;
    const attrName = 'myAttr';

    beforeEach(() => {
      testElement = createTestElement();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets the attribute value', () => {
      addAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('bar');
    });

    it('adds to current attribute value', () => {
      testElement.setAttribute(attrName, 'foo');
      addAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo bar');
    });

    it('does not add if the value is already present', () => {
      testElement.setAttribute(attrName, 'foo');
      addAttributeValue(testElement, attrName, 'foo');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });
  });

  describe('setAttributes() ', () => {
    let testElement: HTMLElement;

    const attrsToTest: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(() => {
      testElement = createTestElement();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets attributes', () => {
      setAttributes(testElement, ...attrsToTest);
      attrsToTest.forEach(tup => {
        const [attr, val] = tup;
        expect(testElement.hasAttribute(attr)).toBe(true);
        expect(testElement.getAttribute(attr)).toBe(val.toString());
      });
    });

    it('overrides an attribute value if it already exists', () => {
      const valueWeDontWant = 'ohai';
      testElement.setAttribute('title', valueWeDontWant);
      setAttributes(testElement, ...attrsToTest);
      attrsToTest.forEach(tup => {
        const [attr, val] = tup;
        expect(testElement.hasAttribute(attr)).toBe(true);
        if (attr === 'title') {
          expect(testElement.getAttribute(attr)).not.toBe(valueWeDontWant);
        }
        expect(testElement.getAttribute(attr)).toBe(val.toString());
      });
    });

    it('removes attribute value if value is false', () => {
      const attrToRemove = 'data-bool';
      const theseAttrsToTest = [].concat(attrsToTest, [[attrToRemove, false]]);
      testElement.setAttribute(attrToRemove, 'true');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(attrToRemove)).toBe(false);
    });

    it('removes attribute value if value is null', () => {
      const attrToRemove = 'data-bool';
      const theseAttrsToTest = [].concat(attrsToTest, [[attrToRemove, null]]);
      testElement.setAttribute(attrToRemove, 'true');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(attrToRemove)).toBe(false);
    });

    it('gracefully handles empty strings', () => {
      const emptyAttr = 'data-emptystring';
      const theseAttrsToTest = [].concat(attrsToTest, [[emptyAttr, '']]);
      testElement.setAttribute(emptyAttr, 'jabberwocky');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(emptyAttr)).toBe(true);
      expect(testElement.getAttribute(emptyAttr)).toBe('');
    });

    it('gracefully handles undefined', () => {
      const undefAttr = 'data-undefined';
      const theseAttrsToTest = [].concat(attrsToTest, [[undefAttr, undefined]]);
      testElement.setAttribute(undefAttr, 'jabberwocky');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(undefAttr)).toBe(true);
      expect(testElement.getAttribute(undefAttr)).toBe('undefined');
    });
  });

  describe('removeAttributes() ', () => {
    let testElement: HTMLElement;

    const testAttrs: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(() => {
      testElement = createTestElement();
      setAttributes(testElement, ...testAttrs);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('removes attributes', () => {
      const attrsToRemove = ['aria-hidden', 'data-attr'];
      removeAttributes(testElement, ...attrsToRemove);
      attrsToRemove.forEach(attr => {
        expect(testElement.hasAttribute(attr)).toBe(false);
      });
      expect(testElement.hasAttribute('title')).toBe(true);
    });

    it('gracefully handles attributes that are not there', () => {
      const attrsToRemove = ['aria-hidden', 'data-bullywug'];
      removeAttributes(testElement, ...attrsToRemove);
      attrsToRemove.forEach(attr => {
        expect(testElement.hasAttribute(attr)).toBe(false);
      });
    });
  });

  describe('removeAttributeValues() ', () => {
    let testElement: HTMLElement;
    const attrName = 'myAttr';
    const testAttrs: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(() => {
      testElement = createTestElement();
      setAttributes(testElement, ...testAttrs);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('does not do anything if attribute value is not present', () => {
      testElement.setAttribute(attrName, 'foo');
      removeAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });

    it('removes only the value specified', () => {
      testElement.setAttribute(attrName, 'foo bar');
      removeAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });

    it('removes the attribute if the value was the only value for that attribute', () => {
      testElement.setAttribute(attrName, 'foo');
      removeAttributeValue(testElement, attrName, 'foo');
      expect(testElement.getAttribute(attrName)).toBeNull();
    });
  });
});
