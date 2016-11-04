/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

/**
 * This shim allows elements written in, or compiled to, ES5 to work on native
 * implementations of Custom Elements v1. It sets new.target to the value of
 * this.constructor so that the native HTMLElement constructor can access the
 * current under-construction element's definition.
 *
 * Because `new.target` is a syntax error in VMs that don't support it, this
 * shim must only be loaded in browsers that do.
 */
(() => {
  let origHTMLElement = HTMLElement;
  // TODO(justinfagnani): Tests!!
  window.HTMLElement = function() {
    // prefer new.target for elements that call super() constructors or
    // Reflect.construct directly
    let newTarget = new.target || this.constructor;
    return Reflect.construct(origHTMLElement, [], newTarget);
  }
  HTMLElement.prototype = Object.create(origHTMLElement.prototype, {
    constructor: {value: HTMLElement, configurable: true, writable: true},
  });
})();
