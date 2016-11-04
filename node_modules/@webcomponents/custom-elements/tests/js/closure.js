/**
 * @license
 * Copyright (c) 2014 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

suite('Closure ES5 Output', function() {

  customElements.enableFlush = true;

  // Fails at a.prototype.constructor = a;
  // Closure needs to use Object.defineProperty?
  test.skip('Closure generated ES5 works', function() {
    'use strict';

    // Closure standard library code
    var $jscomp = {scope:{}, getGlobal:function(a) {
      return "undefined" != typeof window && window === a ? a : "undefined" != typeof global ? global : a;
    }};
    $jscomp.global = $jscomp.getGlobal(this);
    $jscomp.inherits = function(a, b) {
      function c() {
      }
      c.prototype = b.prototype;
      a.prototype = new c;
      a.prototype.constructor = a;
      for (var d in b) {
        if ($jscomp.global.Object.defineProperties) {
          var e = $jscomp.global.Object.getOwnPropertyDescriptor(b, d);
          e && $jscomp.global.Object.defineProperty(a, d, e);
        } else {
          a[d] = b[d];
        }
      }
    };

    // Compiled test
    var XFoo = function(a) {
      HTMLElement.apply(this, arguments);
    };
    $jscomp.inherits(XFoo, HTMLElement);
    customElements.define("x-foo", XFoo);
    var xfoo = new XFoo;
    assert.equal(xfoo.localName, "x-foo");
    assert.instanceOf(xfoo, XFoo);
  });

});
