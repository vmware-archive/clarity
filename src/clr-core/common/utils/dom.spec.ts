/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { createTestElement, removeTestElement } from '@clr/core/test/utils';
import {
  getElementWidth,
  getElementWidthUnless,
  getTranslateForChromeRenderingBugUnless,
  toggleDisabledAttribute,
} from './dom';

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

  describe('getTranslateForChromeRenderingBugUnless() ', () => {
    const translateForChromeRenderingBug = 'translateZ(0px)';

    it('returns the translateZ value when unless is false', () => {
      expect(getTranslateForChromeRenderingBugUnless(false)).toEqual(translateForChromeRenderingBug);
    });

    it('returns empty string when unless is true', () => {
      expect(getTranslateForChromeRenderingBugUnless(true)).toEqual('');
    });
  });

  describe('toggleDisabledAttribute() ', () => {
    let testElement: HTMLElement;
    const elementWidth = '100px';

    beforeEach(() => {
      testElement = createTestElement();
      testElement.style.width = elementWidth;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('removes disabled attribute if toggling off', () => {
      toggleDisabledAttribute(testElement, true);
      expect(testElement.getAttribute('disabled')).toBeDefined();
    });

    it('sets the disabled attribute if toggling on', () => {
      expect(testElement.getAttribute('disabled')).toBeNull();

      toggleDisabledAttribute(testElement, false);
      expect(testElement.getAttribute('disabled')).toBeDefined();
    });
  });
});
