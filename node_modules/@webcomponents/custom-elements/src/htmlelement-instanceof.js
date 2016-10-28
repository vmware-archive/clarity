/**
 * @license
 * Copyright (c) 2016 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
 */
(function() {
  'use strict';

  // patch all built-in subclasses of HTMLElement to inherit from the new HTMLElement
  // See https://html.spec.whatwg.org/multipage/indices.html#element-interfaces

  /** @const */
  var htmlElementSubclasses = [
  	'Button',
  	'Canvas',
  	'Data',
  	'Head',
  	'Mod',
  	'TableCell',
  	'TableCol',
    'Anchor',
    'Area',
    'Base',
    'Body',
    'BR',
    'DataList',
    'Details',
    'Dialog',
    'Div',
    'DList',
    'Embed',
    'FieldSet',
    'Form',
    'Heading',
    'HR',
    'Html',
    'IFrame',
    'Image',
    'Input',
    'Keygen',
    'Label',
    'Legend',
    'LI',
    'Link',
    'Map',
    'Media',
    'Menu',
    'MenuItem',
    'Meta',
    'Meter',
    'Object',
    'OList',
    'OptGroup',
    'Option',
    'Output',
    'Paragraph',
    'Param',
    'Picture',
    'Pre',
    'Progress',
    'Quote',
    'Script',
    'Select',
    'Slot',
    'Source',
    'Span',
    'Style',
    'TableCaption',
    'Table',
    'TableRow',
    'TableSection',
    'Template',
    'TextArea',
    'Time',
    'Title',
    'Track',
    'UList',
    'Unknown',
  ];

  for (var i = 0; i < htmlElementSubclasses.length; i++) {
    var ctor = window['HTML' + htmlElementSubclasses[i] + 'Element'];
    if (ctor) {
      ctor.prototype.__proto__ = window.HTMLElement.prototype;
    }
  }
})();
