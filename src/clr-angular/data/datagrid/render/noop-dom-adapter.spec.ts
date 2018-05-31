/*
 * Copyright (c) 2016-2018 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { NoopDomAdapter } from './noop-dom-adapter';

export default function(): void {
  describe('NoopDomAdapter', function() {
    beforeEach(() => {
      this.domAdapter = new NoopDomAdapter();
      this.element = document.createElement('div');
      this.element.appendChild(document.createTextNode('Hello'));
    });

    it('computes the scrollwidth of an element', () => {
      expect(this.domAdapter.scrollWidth(this.element)).toBe(0);
    });

    it('computes the width of the scrollbar on an element', () => {
      expect(this.domAdapter.scrollBarWidth(this.element)).toBe(0);
    });

    it('computes the height of an element', () => {
      const child = document.createElement('div');
      child.style.width = '10px';
      child.style.height = '1234px';
      this.element.replaceChild(child, this.element.firstChild);
      expect(this.domAdapter.computedHeight(this.element)).toBe(0);
    });

    describe('user-defined width', () => {
      it('recognizes a width defined on the element', () => {
        expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
        this.element.style.width = '42px';
        expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
      });

      it('recognizes a width defined in a CSS stylesheet', () => {
        expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
        const style = document.createElement('style');
        style.appendChild(document.createTextNode('.my-test { width: 42px; }'));
        document.body.appendChild(style);
        this.element.classList.add('my-test');
        expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
        document.body.removeChild(style);
      });

      it('ignores padding and border', () => {
        this.element.style.padding = '10px';
        this.element.style.border = '5px solid black';
        expect(this.domAdapter.userDefinedWidth(this.element)).toBe(0);
      });
    });
  });
}
