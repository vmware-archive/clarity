# custom-elements
A polyfill for HTML Custom Elements

[![Build Status](https://travis-ci.org/webcomponents/custom-elements.svg?branch=master)](https://travis-ci.org/webcomponents/custom-elements)

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

## Differences from Spec

Most custom element reactions in the polyfill are driven from Mutation Observers
and so are async in cases where the spec calls for synchronous reactions. There
are some exceptions, like for `Document.importNode()` and `Element.setAttribute`.

To ensure that queued operations are complete, mostly useful for tests, you can
enable flushing:

```javascript
customElements.enableFlush = true;

// some DOM operations

customElements.flush();

// some more DOM operations dependent on reactions in the first set
```
