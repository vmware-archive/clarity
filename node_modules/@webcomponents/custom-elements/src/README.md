# Custom Elements v1

## Status

The polyfill should be mostly feature complete now. It supports defining
custom elements, the custom element reactions, and upgrading existing elements. It integrates with native Shadow DOM v1, and native and polyfilled HTML Imports.

The implementation could use more tests, especially around ordering of
reactions. The source references old versions of the spec.

### To do

  1. Implement Node#isConnected
  2. Implement built-in element extension (is=)
  3. Add reaction callback ordering tests
  4. Reorganize tests to be closer to spec structure
  5. Performance tests

## Building & Running Tests

  1. Install web-component-tester

    ```bash
    $ npm i -g web-component-tester
    ```

  2. Checkout the webcomponentsjs v1 branch

    ```bash
    $ git clone https://github.com/webcomponents/webcomponentsjs.git
    $ cd webcomponentsjs
    $ npm i
    $ gulp build
    ```

  3. Run tests

    ```bash
    $ wct tests/CustomElements/v1/index.html -l chrome
    ```

  4. Bower link to use in another project

    ```bash
    $ bower link
    $ cd {your project directory}
    $ bower link webcomponentsjs
    ```

## Implementation approach and browser support

The polyfill leans heavily on MutationObservers to drive custom element creation and reactions. This means that the polyfill requires native or polyfilled MutationObservers. The polyfill also uses Map and Set, though those would be easy to polyfill or remove.

The implementation should work without additional polyfills in IE 11, Edge, Safari >6, Firefox, Chrome, Android Browser >4.4, and Opera (not Mini).

IE 10 should be supported with the Mutation Observer polyfill.

This branch does not pass the CI tests yet, but it passes locally in Chrome 52, Safari 9.1, Safari Technical Preview, and Firefox 47.

Because MutationObservers are used to create custom element instances and react to document structure and attribute changes, all reactions are asynchronous while in the specs, some are synchronous. This is by design, since some of the synchronous reactions are impossible to polyfill. We consider it more important that reactions have the same relative timing to each other as the spec, for example attributeChangedCallback happens after connectedCallback.

### Implementing the "Constructor-call Trick"

The HTMLElement constructor is now specified to return a different object than `this`, so that the parser and upgrades can call the constructor on elements that have already been allocated. JavaScript allows this, but some compilers, such as TypeScript and Closure currently don't.

The HTMLElement constructor is also specified to look up the tag name associated with a constructor by using `new.target`. `new.target` isn't available in ES5, is not polyfillable, but `this.constructor` behaves similarly for most ES5 class patterns, including the output of Babel, TypeScript and Closure, so the polyfill uses that to look up tag names.

`new.target` isn't even feature detectable, since it's a syntax error in ES5. Because of this, the polyfill can't check `new.target` first and fallback to `this.constructor`. This also means that ES5-style constructors can't conditionally make a "super" call to the HTMLElement constructor (with `Reflect.construct`) in non-ES6 environments to be compatible with native Custom Elements.

To allow for elements that work in both ES5 and ES6 environments, we provide a shim to be used in browsers that have native Custom Elements v1 support, that overrides the HTMLElement constructor and calls `Reflect.construct` with either the value of `new.target` or `this.constructor`. This shim can only be executed in ES6 environments that support `new.target`, and so should be conditionally loaded. The shim and the polyfill should not be loaded at the same time.

## Building

The Custom Elements V1 polyfill does not use the same module or build system as
the other webcomponentsjs polyfills, and its build is not integrated into the default build tasks yet.

To build run:

    gulp CustomElementsV1

This creates a CustomElementsV1.min.js file in dist/

## Custom Elements in the DOM Spec

### 4.2.3 Mutation Algorithms

https://dom.spec.whatwg.org/#mutation-algorithms

 * insert 6.5.2.1: call connectedCallback
 * insert 6.5.2.2: upgrade
 * remove 14: call disconnectedCallback
 * remove 15.2: call disconnectedCallback

### 4.4 Node

https://dom.spec.whatwg.org/#concept-node-clone

 * clone 2.1: performs create-element
 * clone 2.2: append attributes

isConnected looks like it's Custom Elements related, but it's actually part of Shadow DOM. We might want to implement it for on non-native Shadow DOM environments, since we already watch for all connections and disconnections.

### 4.5 Document

https://dom.spec.whatwg.org/#interface-document

  * createElement and createElementNS take ElementCreationOptions

https://dom.spec.whatwg.org/#dom-document-createelement

  * createElement 3, 4, 5, 7
  * createElementNS 2, 3, 4, 5

### 4.9 Element

https://dom.spec.whatwg.org/#concept-element-custom-element-state

https://dom.spec.whatwg.org/#concept-create-element

  * create an element 2, 3, 4, 5, 6

https://dom.spec.whatwg.org/#concept-element-attributes-change

  * change an attribute 2

https://dom.spec.whatwg.org/#concept-element-attributes-append

  * append an attribute 2

https://dom.spec.whatwg.org/#concept-element-attributes-remove

  * remove an attribute 2

https://dom.spec.whatwg.org/#concept-element-attributes-replace

  * replace an attribute 2

https://dom.spec.whatwg.org/#dom-element-attachshadow

  * attachShadow 2 (nothing to implement)

## Custom Elements in the HTML Spec


### 3.2.3 HTML element constructors

https://html.spec.whatwg.org/multipage/dom.html#html-element-constructors

  * HTML element constructors 1-9

### 4.13 Custom Elements

https://html.spec.whatwg.org/multipage/scripting.html#custom-elements

https://html.spec.whatwg.org/multipage/scripting.html#valid-custom-element-name

https://html.spec.whatwg.org/multipage/scripting.html#customelementsregistry

### 7.3 Window

https://html.spec.whatwg.org/multipage/browsers.html#window

 * Window#customElements

https://html.spec.whatwg.org/multipage/syntax.html#create-an-element-for-the-token

 * create an element for a token 3, 4, 5, 6, 7, 8, 9
