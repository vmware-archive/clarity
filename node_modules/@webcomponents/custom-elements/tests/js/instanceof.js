/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */

suite('Built-in Element instanceof', function() {

  test('Built-in Elements are instanceof HTMLElement', function() {
    'use strict';

    // All tags implementing the HTMLElement interface, according to:
    // https://html.spec.whatwg.org/multipage/indices.html#element-interfaces
    // Commented out tags do not have their own class, but are concrete
    // instances of HTMLElement, which makes it impossible to patch their
    // prototype chain to make instanceof work.
    var elements = [
      'a',
      // 'abbr',
      // 'address',
      'area',
      // 'article',
      // 'aside',
      'audio',
      // 'b',
      'base',
      // 'bdi',
      // 'bdo',
      // 'blockquote', // fails on IE11
      'body',
      'br',
      'button',
      'canvas',
      'caption',
      // 'cite',
      // 'code',
      'col',
      'colgroup',
      'menuitem',
      'data',
      'datalist',
      // 'dd',
      'del',
      // 'details', // fails on Safari 9
      // 'dfn',
      'dialog',
      'div',
      'dl',
      // 'dt',
      // 'em',
      'embed',
      'fieldset',
      // 'figcaption',
      // 'figure',
      // 'footer',
      'form',
      'h1',
      'h2',
      'h3',
      'h4',
      'h5',
      'h6',
      'head',
      // 'header',
      // 'hgroup',
      'hr',
      'html',
      // 'i',
      'iframe',
      'img',
      'input',
      'ins',
      // 'kbd',
      // 'keygen', // fails on IE11
      'label',
      'legend',
      'li',
      'link',
      // 'main',
      'map',
      // 'mark',
      'menu',
      'meta',
      'meter',
      // 'nav',
      // 'noscript',
      'object',
      'ol',
      'optgroup',
      'option',
      'output',
      'p',
      'param',
      'picture',
      'pre',
      'progress',
      'q',
      // 'rp',
      // 'rt',
      // 'ruby',
      // 's',
      // 'samp',
      'script',
      // 'section',
      'select',
      'slot',
      // 'small',
      'source',
      'span',
      // 'strong',
      'style',
      // 'sub',
      // 'summary',
      // 'sup',
      'table',
      'tbody',
      'td',
      'template',
      'textarea',
      'tfoot',
      'th',
      'thead',
      // 'time', // doesn't work on Safari 9
      'title',
      'tr',
      'track',
      // 'u',
      'ul',
      // 'var',
      'video',
      // 'wbr',
    ];

    for (var i = 0; i < elements.length; i++) {
      var tag = elements[i];
      var e = document.createElement(tag);
      assert.isTrue(e instanceof HTMLElement, tag + ' not instanceof HTMLElement');
    }

  });

});
