/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

/* jasmine is running these async and it's yielding weird passes/fails */
// import { registerElementSafely } from './register.js';
// import { elementExists } from './exists.js';

// jasmine choked badly on this when i had it as an ES2015 class...
/*
const __extends =
  (this && this.__extends) ||
  (function() {
    let extendStatics = function(d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function(d, b) {
            d.__proto__ = b;
          }) ||
        function(d, b) {
          for (let p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function(d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype = b === null ? Object.create(b) : ((__.prototype = b.prototype), new __());
    };
  })();
const TestElement = (function(_super) {
  __extends(TestElement, _super);
  function TestElement() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return TestElement;
})(HTMLElement);

/*
const TEST_TAGNAME = 'my-test-el-001';

describe('Functional Helper: ', () => {
  describe('addElementToRegistry(): ', () => {
    beforeEach(() => {
      // spying on console is freaking jasmine out
      spyOn(window.console, 'warn').and.callFake(() => {});
    });
    // order matters because we can't remove an element once we've defined it
    it('registers element', () => {
      registerElementSafely(TEST_TAGNAME, TestElement);
      expect(elementExists(TEST_TAGNAME)).toEqual(true);
      expect(window.console.warn).not.toHaveBeenCalled();
    });

    it('throws a console warning if an element is already registered', () => {
      expect(elementExists(TEST_TAGNAME)).toEqual(true);
      registerElementSafely(TEST_TAGNAME, TestElement);
      expect(window.console.warn).toHaveBeenCalledWith(`${TEST_TAGNAME} has already been registered`);
    });
  });
});
*/
