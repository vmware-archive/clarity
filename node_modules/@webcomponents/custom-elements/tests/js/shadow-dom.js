/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

suite('Shadow DOM Support', function() {

  var work;
  var assert = chai.assert;

  customElements.enableFlush = true;

  setup(function() {
    work = document.createElement('div');
    document.body.appendChild(work);
  });

  teardown(function() {
    document.body.removeChild(work);
  });

  // Tests should be skipped in browsers that don't have native Shadow DOM
  var testFn = Element.prototype.attachShadow ? test : test.skip;

  testFn('custom elements are created in shadow roots', function() {
    class XShadow extends HTMLElement {}
    customElements.define('x-shadow', XShadow);

    var shadowRoot = work.attachShadow({mode: 'open'});
    var container = document.createElement('div');
    shadowRoot.appendChild(container);
    container.innerHTML = '<x-shadow></x-shadow>';

    customElements.flush();
    var el = container.querySelector('x-shadow');
    assert.instanceOf(el, XShadow);
  });

  testFn('custom elements are upgraded in shadow roots', function() {
    class XShadow2 extends HTMLElement {}

    // setup shadow root
    var shadowRoot = work.attachShadow({mode: 'open'});
    var container = document.createElement('div');
    shadowRoot.appendChild(container);
    container.innerHTML = '<x-shadow2></x-shadow2>';
    var el = container.querySelector('x-shadow2');
    customElements.flush();

    // undefined elements are not upgraded
    assert.notInstanceOf(el, XShadow2);

    // elements are upgraded on definition
    customElements.define('x-shadow2', XShadow2);
    assert.instanceOf(el, XShadow2);
  });


});
