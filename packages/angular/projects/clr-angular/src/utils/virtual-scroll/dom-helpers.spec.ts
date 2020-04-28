/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { itIgnore } from '../../../../tests/tests.helpers';

import {
  getScrollTop,
  offsetHeight,
  preserveScrollAfterAppend,
  preserveScrollAfterPrepend,
  ratioBottomReady,
  ratioTopReady,
  setScrollTop,
  startListening,
  stopListening,
} from './dom-helpers';

/**
 * I can't believe we still haven't standardized this across the project
 */
interface TestContext {
  viewport?: HTMLElement;
  child?: HTMLElement;
}

export default function(): void {
  describe('DOM helpers', function() {
    describe('ratioBottomReady()', function() {
      beforeEach(function(this: TestContext) {
        this.viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        this.child = createDiv(this.viewport, { height: '300px' }, 'Hello');
      });
      afterEach(function(this: TestContext) {
        document.body.removeChild(this.viewport);
      });

      it('computes the ratio of loaded elements under the viewport compared to viewport height', function(this: TestContext) {
        expect(ratioBottomReady(this.viewport)).toBe(2);
      });

      it('accepts an offset argument', function(this: TestContext) {
        expect(ratioBottomReady(this.viewport, -100)).toBe(3);
        expect(ratioBottomReady(this.viewport, 100)).toBe(1);
      });

      it('takes scroll position into account', function(this: TestContext) {
        this.viewport.scrollTop = 100;
        expect(ratioBottomReady(this.viewport)).toBe(1);
      });

      it('ignores borders for the viewport', function(this: TestContext) {
        this.viewport.style.boxSizing = 'content-box';
        this.viewport.style.border = '50px solid black';
        expect(ratioBottomReady(this.viewport)).toBe(2);
      });

      itIgnore(['firefox'], 'takes padding of the viewport into account', function(this: TestContext) {
        this.viewport.style.padding = '50px';
        expect(ratioBottomReady(this.viewport)).toBe(3);
      });

      it("doesn't care about the children's specific dimensions", function(this: TestContext) {
        this.child.style.border = '5px solid black';
        this.child.style.padding = '20px';
        expect(ratioBottomReady(this.viewport)).toBe(2);
      });
    });

    describe('ratioTopReady()', function() {
      beforeEach(function(this: TestContext) {
        this.viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        this.child = createDiv(this.viewport, { height: '300px' }, 'Hello');
        this.viewport.scrollTop = 200;
      });
      afterEach(function(this: TestContext) {
        document.body.removeChild(this.viewport);
      });

      it('computes the ratio of loaded elements over the viewport compared to viewport height', function(this: TestContext) {
        expect(ratioTopReady(this.viewport)).toBe(2);
      });

      it('accepts an offset argument', function(this: TestContext) {
        expect(ratioTopReady(this.viewport, -100)).toBe(3);
        expect(ratioTopReady(this.viewport, 100)).toBe(1);
      });

      it('takes scroll position into account', function(this: TestContext) {
        this.viewport.scrollTop = 100;
        expect(ratioTopReady(this.viewport)).toBe(1);
      });

      it('ignores borders for the viewport', function(this: TestContext) {
        this.viewport.style.boxSizing = 'content-box';
        this.viewport.style.border = '50px solid black';
        expect(ratioTopReady(this.viewport)).toBe(2);
      });

      itIgnore(['firefox'], 'takes padding of the viewport into account', function(this: TestContext) {
        this.viewport.style.padding = '50px';
        this.viewport.scrollTop = 300;
        expect(ratioTopReady(this.viewport)).toBe(3);
      });

      it("doesn't care about the children's specific dimensions", function(this: TestContext) {
        this.child.style.border = '5px solid black';
        this.child.style.padding = '20px';
        expect(ratioTopReady(this.viewport)).toBe(2);
      });
    });

    describe('offsetHeight()', function() {
      it('computes the total height of a set of elements', function(this: TestContext) {
        const elements = [
          createDiv(document.body, { height: '100px' }, 'Hello'),
          createDiv(document.body, { height: '300px', padding: '10px' }, 'World'),
          createDiv(document.body, { height: '200px', border: '5px solid black' }, '!'),
        ];
        expect(offsetHeight(elements)).toBe(600);
        elements.forEach(el => document.body.removeChild(el));
      });
    });

    describe('preserveScrollAfterAppend()', function() {
      beforeEach(function(this: TestContext) {
        this.viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        this.child = createDiv(this.viewport, { height: '300px' }, 'Hello');
      });
      afterEach(function(this: TestContext) {
        document.body.removeChild(this.viewport);
      });

      it("preserves what's displayed in a viewport after appending elements to it", function(this: TestContext) {
        this.viewport.scrollTop = 50;
        preserveScrollAfterAppend(this.viewport, () => createDiv(this.viewport, { height: '100px' }, 'World'));
        expect(this.viewport.scrollTop).toBe(50);
      });

      it("preserves what's displayed even if it's the viewport is scrolled all the way to the bottom", function(this: TestContext) {
        this.viewport.scrollTop = 200;
        preserveScrollAfterAppend(this.viewport, () => createDiv(this.viewport, { height: '100px' }, 'World'));
        expect(this.viewport.scrollTop).toBe(200);
      });
    });

    describe('preserveScrollAfterPrepend()', function() {
      beforeEach(function(this: TestContext) {
        this.viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        this.child = createDiv(this.viewport, { height: '300px' }, 'Hello');
      });
      afterEach(function(this: TestContext) {
        document.body.removeChild(this.viewport);
      });

      it("preserves what's displayed in a viewport after appending elements to it", function(this: TestContext) {
        this.viewport.scrollTop = 50;
        preserveScrollAfterPrepend(this.viewport, () => createDiv(this.viewport, { height: '100px' }, 'World', true));
        expect(this.viewport.scrollTop).toBe(150);
      });

      it("preserves what's displayed even if it's the viewport is scrolled all the way to the top", function(this: TestContext) {
        this.viewport.scrollTop = 0;
        preserveScrollAfterPrepend(this.viewport, () => createDiv(this.viewport, { height: '100px' }, 'World', true));
        expect(this.viewport.scrollTop).toBe(100);
      });
    });

    describe('getScrollTop()', function() {
      it('return the current scrollTop value of an element', function(this: TestContext) {
        const viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        createDiv(viewport, { height: '300px' }, 'Hello');
        expect(getScrollTop(viewport)).toBe(0);
        viewport.scrollTop = 150;
        expect(getScrollTop(viewport)).toBe(150);
        document.body.removeChild(viewport);
      });
    });

    describe('setScrollTop()', function() {
      it('sets the scrollTop value of an element', function(this: TestContext) {
        const viewport = createDiv(document.body, { height: '100px', overflow: 'auto' });
        createDiv(viewport, { height: '300px' }, 'Hello');
        setScrollTop(viewport, 150);
        expect(viewport.scrollTop).toBe(150);
        document.body.removeChild(viewport);
      });
    });

    describe('startListening()', function() {
      it('adds an event listener to an element', function(this: TestContext) {
        const el = createDiv(document.body, {}, 'Hello');
        let nbClicks = 0;
        startListening(el, 'click', () => {
          nbClicks++;
        });
        el.click();
        el.click();
        expect(nbClicks).toBe(2);
        document.body.removeChild(el);
      });
    });

    describe('stopListening()', function() {
      it('removes an event listener from an element', function(this: TestContext) {
        const el = createDiv(document.body, {}, 'Hello');
        const listener = () => {
          nbClicks++;
        };
        let nbClicks = 0;
        startListening(el, 'click', listener);
        el.click();
        stopListening(el, 'click', listener);
        el.click();
        expect(nbClicks).toBe(1);
        document.body.removeChild(el);
      });
    });
  });
}

function createDiv(
  parent: HTMLElement,
  css: { [key in keyof CSSStyleDeclaration]?: CSSStyleDeclaration[key] },
  text?: string,
  prepend?: boolean
) {
  const div = document.createElement('div');
  Object.assign(div.style, css);
  if (text) {
    div.appendChild(document.createTextNode(text));
  }
  if (prepend) {
    parent.insertBefore(div, parent.firstChild);
  } else {
    parent.appendChild(div);
  }
  return div;
}
