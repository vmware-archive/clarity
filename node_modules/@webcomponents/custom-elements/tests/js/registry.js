/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

suite('CustomElementsRegistry', function() {
  var work;
  var assert = chai.assert;
  var HTMLNS = 'http://www.w3.org/1999/xhtml';

  customElements.enableFlush = true;

  setup(function() {
    work = document.createElement('div');
    document.body.appendChild(work);
  });

  teardown(function() {
    document.body.removeChild(work);
  });

  suite('window', function () {

    test('customElements.define exists', function() {
      assert.isFunction(customElements.define);
    });

  });

  suite('define', function() {

    test('requires a name argument', function() {
      assert.throws(function() {
        customElements.define();
      }, '', 'customElements.define failed to throw when given no arguments');
    });

    test('name must contain a dash', function() {
      assert.throws(function () {
        customElements.define('xfoo', {prototype: Object.create(HTMLElement.prototype)});
      }, '', 'customElements.define failed to throw when given no arguments');
    });

    test('name must not be a reserved name', function() {
      assert.throws(function() {
        customElements.define('font-face', {prototype: Object.create(HTMLElement.prototype)});
      }, '', 'Failed to execute \'defineElement\' on \'Document\': Registration failed for type \'font-face\'. The type name is invalid.');
    });

    test('name must be unique', function() {
      class XDuplicate extends HTMLElement {}
      customElements.define('x-duplicate', XDuplicate);
      assert.throws(function() {
        customElements.define('x-duplicate', XDuplicate);
      }, '', 'customElements.define failed to throw when called multiple times with the same element name');
    });

    test('names are case-sensitive', function() {
      class XCase extends HTMLElement {}
      assert.throws(function() { customElements.define('X-CASE', XCase); });
    });

    test('requires a constructor argument', function() {
      assert.throws(function () {
        customElements.define('x-no-options');
      }, '', 'customElements.define failed to throw without a constructor argument');
    });

    test('second argument prototype property is required', function() {
      assert.throws(function () {
        customElements.define('x-no-proto', {});
      }, '', 'customElements.define failed to throw with a constructor argument with no prototype');
    });

  });

  suite('get', function() {

    test('returns a defined constructor', function () {
      class XGet extends HTMLElement {}
      customElements.define('x-get', XGet);
      assert.equal(XGet, customElements.get('x-get'));
    });

    test('returns undefined for an undefined constructor', function () {
      assert.isUndefined(customElements.get('x-undefined'));
    });

  });

  suite('whenDefined', function() {

    test('resolves when a tag is defined', function () {
      var promise = customElements.whenDefined('x-when-defined').then(function (r) {
        assert.isUndefined(r);
      });
      class XDefined extends HTMLElement {}
      customElements.define('x-when-defined', XDefined);
      return promise;
    });

    test('throws for an invalid element name', function () {
      return customElements.whenDefined('div').then(
        function() {
          assert.fail();
        },
        function() {
          // pass
          return;
        });
    });

  });

});
