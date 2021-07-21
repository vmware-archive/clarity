/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import {
  addAttributeValue,
  assignSlotNames,
  createFragment,
  getElementWidth,
  getElementWidthUnless,
  getShadowRootOrElse,
  getWindowDimensions,
  hasAttributeAndIsNotEmpty,
  HTMLAttributeTuple,
  windowIsAboveMobileBreakpoint,
  isHTMLElement,
  removeAttributes,
  removeAttributeValue,
  setAttributes,
  isVisible,
  setOrRemoveAttribute,
  spanWrapper,
  isFocusable,
  queryChildFromLightOrShadowDom,
  queryAllFocusable,
  isScrollable,
  isElementTextInputType,
  getInputValueType,
} from './dom.js';
import { updateElementStyles } from './css.js';
import { registerElementSafely } from './registration.js';

/** @element test-dom-spec-element */
export class TestElement extends LitElement {
  render() {
    return html`<div class="shadow-dom-el" id="shady"><slot></slot></div>`;
  }
}

registerElementSafely('test-dom-spec-element', TestElement);

describe('Functional Helper: ', () => {
  describe('getElementWidth() ', () => {
    let testElement: HTMLElement;
    const elementWidth = '100px';

    beforeEach(async () => {
      testElement = await createTestElement();
      testElement.style.width = elementWidth;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns the width of an element', () => {
      expect(getElementWidth(testElement)).toEqual(elementWidth);
    });

    it('returns an empty string if passed junk', () => {
      expect(getElementWidth(null)).toEqual('');
    });
  });

  describe('getElementWidthUnless() ', () => {
    let testElement: HTMLElement;
    const elementWidth = '100px';

    beforeEach(async () => {
      testElement = await createTestElement();
      testElement.style.width = elementWidth;
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('returns the width of an element when unless is false', () => {
      expect(getElementWidthUnless(testElement, false)).toEqual(elementWidth);
    });

    it('returns empty string when unless is true', () => {
      expect(getElementWidthUnless(testElement, true)).toEqual('');
    });
  });

  describe('isHTMLElement() ', () => {
    let testElement: any;

    it('returns true if it is an HTMLElement', async () => {
      testElement = await createTestElement();
      expect(isHTMLElement(testElement)).toEqual(true);
    });

    it('returns false if undefined or null', () => {
      testElement = undefined;
      expect(isHTMLElement(testElement)).toEqual(false);

      testElement = null;
      expect(isHTMLElement(testElement)).toEqual(false);
    });

    it('returns false if it is not an HTMLElement', () => {
      testElement = 2;
      expect(isHTMLElement(testElement)).toEqual(false);
    });
  });

  describe('addAttributeValue() ', () => {
    let testElement: HTMLElement;
    const attrName = 'myAttr';

    beforeEach(async () => {
      testElement = await createTestElement();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets the attribute value', () => {
      addAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('bar');
    });

    it('adds to current attribute value', () => {
      testElement.setAttribute(attrName, 'foo');
      addAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo bar');
    });

    it('does not add if the value is already present', () => {
      testElement.setAttribute(attrName, 'foo');
      addAttributeValue(testElement, attrName, 'foo');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });
  });

  describe('setAttributes() ', () => {
    let testElement: HTMLElement;

    const attrsToTest: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(async () => {
      testElement = await createTestElement();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets attributes', () => {
      setAttributes(testElement, ...attrsToTest);
      attrsToTest.forEach(tup => {
        const [attr, val] = tup;
        expect(testElement.hasAttribute(attr)).toBe(true);
        expect(testElement.getAttribute(attr)).toBe(val.toString());
      });
    });

    it('overrides an attribute value if it already exists', () => {
      const valueWeDontWant = 'ohai';
      testElement.setAttribute('title', valueWeDontWant);
      setAttributes(testElement, ...attrsToTest);
      attrsToTest.forEach(tup => {
        const [attr, val] = tup;
        expect(testElement.hasAttribute(attr)).toBe(true);
        if (attr === 'title') {
          expect(testElement.getAttribute(attr)).not.toBe(valueWeDontWant);
        }
        expect(testElement.getAttribute(attr)).toBe(val.toString());
      });
    });

    it('removes attribute value if value is false', () => {
      const attrToRemove = 'data-bool';
      const theseAttrsToTest = [].concat(attrsToTest, [[attrToRemove, false]]);
      testElement.setAttribute(attrToRemove, 'true');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(attrToRemove)).toBe(false);
    });

    it('removes attribute value if value is null', () => {
      const attrToRemove = 'data-bool';
      const theseAttrsToTest = [].concat(attrsToTest, [[attrToRemove, null]]);
      testElement.setAttribute(attrToRemove, 'true');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(attrToRemove)).toBe(false);
    });

    it('gracefully handles empty strings', () => {
      const emptyAttr = 'data-emptystring';
      const theseAttrsToTest = [].concat(attrsToTest, [[emptyAttr, '']]);
      testElement.setAttribute(emptyAttr, 'jabberwocky');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(emptyAttr)).toBe(true);
      expect(testElement.getAttribute(emptyAttr)).toBe('');
    });

    it('gracefully handles undefined', () => {
      const undefAttr = 'data-undefined';
      const theseAttrsToTest = [].concat(attrsToTest, [[undefAttr, undefined]]);
      testElement.setAttribute(undefAttr, 'jabberwocky');
      setAttributes(testElement, ...theseAttrsToTest);
      expect(testElement.hasAttribute(undefAttr)).toBe(true);
      expect(testElement.getAttribute(undefAttr)).toBe('undefined');
    });
  });

  describe('removeAttributes() ', () => {
    let testElement: HTMLElement;

    const testAttrs: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(async () => {
      testElement = await createTestElement();
      setAttributes(testElement, ...testAttrs);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('removes attributes', () => {
      const attrsToRemove = ['aria-hidden', 'data-attr'];
      removeAttributes(testElement, ...attrsToRemove);
      attrsToRemove.forEach(attr => {
        expect(testElement.hasAttribute(attr)).toBe(false);
      });
      expect(testElement.hasAttribute('title')).toBe(true);
    });

    it('gracefully handles attributes that are not there', () => {
      const attrsToRemove = ['aria-hidden', 'data-bullywug'];
      removeAttributes(testElement, ...attrsToRemove);
      attrsToRemove.forEach(attr => {
        expect(testElement.hasAttribute(attr)).toBe(false);
      });
    });
  });

  describe('setOrRemoveAttribute() ', () => {
    let testElement: HTMLElement;

    const attrToTest: HTMLAttributeTuple = ['data-attr', 'stringified data goes here'];
    const [attrToTestName, attrToTestValue] = attrToTest;

    beforeEach(async () => {
      testElement = await createTestElement();
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets attribute if test function returns true', () => {
      setOrRemoveAttribute(testElement, attrToTest, () => {
        return true;
      });
      expect(testElement.hasAttribute(attrToTestName)).toBe(true);
      expect(testElement.getAttribute(attrToTestName)).toBe(attrToTestValue as string);
    });

    it('removes attribute value if function returns false', () => {
      setAttributes(testElement, attrToTest);
      expect(testElement.hasAttribute(attrToTestName)).toBe(true);
      expect(testElement.getAttribute(attrToTestName)).toBe(attrToTestValue as string);
      setOrRemoveAttribute(testElement, attrToTest, () => {
        return false;
      });
      expect(testElement.hasAttribute(attrToTestName)).toBe(false);
      expect(testElement.getAttribute(attrToTestName)).toBe(null);
    });
  });

  describe('assignSlotNames() ', () => {
    let testElement: HTMLElement;
    let testDiv1: HTMLElement;
    let testDiv2: HTMLElement;
    let testDiv3: null;
    let testDiv4: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<div id="testDiv1">ohai</div>
          <div id="testDiv2">kthxbye</div>
          <div id="testDiv4">omye</div>`
      );
      testDiv1 = testElement.querySelector('#testDiv1');
      testDiv2 = testElement.querySelector('#testDiv2');
      testDiv3 = testElement.querySelector('#testDiv3');
      testDiv4 = testElement.querySelector('#testDiv4');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('spec sets up as expected', () => {
      expect(testDiv1 instanceof HTMLElement).toBe(true, 'retrieves testDiv1 as expected');
      expect(testDiv2 instanceof HTMLElement).toBe(true, 'retrieves testDiv2 as expected');
      expect(testDiv3).toBeNull('testDiv3 does not exist');
      expect(testDiv4 instanceof HTMLElement).toBe(true, 'retrieves testDiv4 as expected');
    });

    it('assigns slot names as expected', () => {
      assignSlotNames([testDiv1, 'test1'], [testDiv2, 'test2']);
      expect(testDiv1.getAttribute('slot')).toBe('test1', 'assigns testDiv1 slot');
      expect(testDiv2.getAttribute('slot')).toBe('test2', 'assigns testDiv2 slot');
      expect(testDiv4.getAttribute('slot')).toBeNull('does not assign testDiv4 slot');
    });

    it('removes slot names as expected', () => {
      assignSlotNames([testDiv1, 'test1'], [testDiv2, 'test2']);
      expect(testDiv1.getAttribute('slot')).toBe('test1', 'assigns testDiv1 slot');
      assignSlotNames([testDiv1, false]);
      expect(testDiv1.getAttribute('slot')).toBeNull('removes testDiv1 slot');
      expect(testDiv2.getAttribute('slot')).toBe('test2', 'leaves testDiv2 slot alone');
    });

    it('does not die on divs that do not exist', () => {
      assignSlotNames([testDiv1, 'test1'], [testDiv2, 'test2'], [testDiv3, 'test3']);
      expect(testDiv1.getAttribute('slot')).toBe('test1', 'assigns testDiv1 slot');
      expect(testDiv2.getAttribute('slot')).toBe('test2', 'leaves testDiv2 slot alone');
    });
  });

  describe('removeAttributeValue() ', () => {
    let testElement: HTMLElement;
    const attrName = 'myAttr';
    const testAttrs: HTMLAttributeTuple[] = [
      ['title', 'test element'],
      ['aria-hidden', 'true'],
      ['data-attr', 'stringified data goes here'],
    ];

    beforeEach(async () => {
      testElement = await createTestElement();
      setAttributes(testElement, ...testAttrs);
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('does not do anything if attribute value is not present', () => {
      testElement.setAttribute(attrName, 'foo');
      removeAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });

    it('removes only the value specified', () => {
      testElement.setAttribute(attrName, 'foo bar');
      removeAttributeValue(testElement, attrName, 'bar');
      expect(testElement.getAttribute(attrName)).toEqual('foo');
    });

    it('removes the attribute if the value was the only value for that attribute', () => {
      testElement.setAttribute(attrName, 'foo');
      removeAttributeValue(testElement, attrName, 'foo');
      expect(testElement.getAttribute(attrName)).toBeNull();
    });
  });

  describe('isVisible', () => {
    it('determines if element is visible', async () => {
      const element = await createTestElement();
      element.style.width = '100px';
      element.style.height = '100px';

      expect(isVisible(element)).toBe(true);

      element.setAttribute('hidden', '');
      expect(isVisible(element)).toBe(false);

      removeAttributes(element, 'hidden');
      expect(isVisible(element)).toBe(true);

      removeTestElement(element);
      expect(isVisible(element)).toBe(false);
    });
  });

  describe('spanWrapper', () => {
    it('wraps text nodes in an element', async () => {
      const element = await createTestElement(html`Hello spanWrapper`);
      spanWrapper(element.childNodes);
      expect(element.children[0].tagName).toBe('SPAN');
      expect(element.children[0].textContent).toBe('Hello spanWrapper');
    });
  });

  describe('hasAttributeAndIsNotEmpty', () => {
    it('should return false if element does not exist', () => {
      const nope = document.getElementById('ohai');
      expect(hasAttributeAndIsNotEmpty(nope, 'id')).toBe(false);
    });
    it('should return true if element has attribute', async () => {
      const element = await createTestElement(html`<div id="ohai" data-test-value="false">howdy</div>`);
      expect(hasAttributeAndIsNotEmpty(document.getElementById('ohai'), 'data-test-value')).toBe(true);
      removeTestElement(element);
    });
    it('should return false if element has attribute but it is an empty string', async () => {
      const element = await createTestElement(html`<div id="ohai" data-test-value="">howdy</div>`);
      expect(hasAttributeAndIsNotEmpty(document.getElementById('ohai'), 'data-test-value')).toBe(false);
      removeTestElement(element);
    });
    it('should return false if element has attribute but there is no value in the attribute', async () => {
      const element = await createTestElement(html`<div id="ohai" data-test-value>howdy</div>`);
      expect(hasAttributeAndIsNotEmpty(document.getElementById('ohai'), 'data-test-value')).toBe(false);
      removeTestElement(element);
    });
  });

  describe('isScrollable() ', () => {
    it('should verify the element is scrollable', async () => {
      const element = await createTestElement(html`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      `);

      // `createTestElement` wraps the text in a `<div>` and we have to add the styles to it
      updateElementStyles(element, ['width', '20px'], ['height', '20px'], ['overflow', 'scroll']);

      expect(isScrollable(element)).toBe(true);
    });

    it('should verify the element is not scrollable', async () => {
      const element = await createTestElement(html`
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make
        a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting,
        remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
        Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      `);

      expect(isScrollable(element)).toBe(false);
    });
  });

  describe('isFocusable() ', () => {
    let testElement: HTMLElement;
    const testId = 'testme';

    afterEach(() => {
      removeTestElement(testElement);
    });

    describe('- form elements:', () => {
      it('checkboxes return true', async () => {
        testElement = await createTestElement(html`<input type="checkbox" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('radios return true', async () => {
        testElement = await createTestElement(html`<input type="radio" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('text inputs return true', async () => {
        testElement = await createTestElement(html`<input type="text" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('time inputs return true', async () => {
        testElement = await createTestElement(html`<input type="time" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('date inputs return true', async () => {
        testElement = await createTestElement(html`<input type="date" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('color inputs return true', async () => {
        testElement = await createTestElement(html`<input type="color" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('range inputs return true', async () => {
        testElement = await createTestElement(html`<input type="range" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('password inputs return true', async () => {
        testElement = await createTestElement(html`<input type="password" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('search inputs return true', async () => {
        testElement = await createTestElement(html`<input type="search" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('buttons return true', async () => {
        testElement = await createTestElement(html`<button type="button" id="${testId}">ohai</button>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('selects return true', async () => {
        testElement = await createTestElement(
          html`<select id="${testId}"
            ><option selected>ohai</option
            ><option>kthxbye</option></select
          >`
        );
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
      it('textareas return true', async () => {
        testElement = await createTestElement(html`<textarea id="${testId}"></textarea>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
    });

    describe('- iframe and embedded: ', () => {
      it('iframe return true', async () => {
        testElement = await createTestElement(html`<iframe title="example" id="${testId}"></iframe>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('embedded return true', async () => {
        testElement = await createTestElement(html`
          <embed type="image/jpg" id="${testId}" src="#" width="300" height="200" />
        `);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });
    });

    describe('- anchor elements:', () => {
      it('a[href] returns true', async () => {
        testElement = await createTestElement(html`<a href="https://clarity.design" id="${testId}">ohai</a>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('a:not([href]) returns false', async () => {
        testElement = await createTestElement(html`<a id="${testId}">ohai</a>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(false);
      });
    });

    describe('- area elements:', () => {
      it('area[href] returns true', async () => {
        testElement = await createTestElement(html`<area href="https://clarity.design" id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('area:not([href]) returns false', async () => {
        testElement = await createTestElement(html`<area id="${testId}" />`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(false);
      });
    });

    describe('- audio and video elements:', () => {
      it('audio[controls] returns true', async () => {
        testElement = await createTestElement(html`<audio controls id="${testId}"></audio>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('audio:not([controls]) returns false', async () => {
        testElement = await createTestElement(html`<audio id="${testId}"></audio>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(false);
      });

      it('video[controls] returns true', async () => {
        testElement = await createTestElement(html`<video controls id="${testId}"></video>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('video:not([controls]) returns false', async () => {
        testElement = await createTestElement(html`<video id="${testId}"></video>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(false);
      });
    });

    describe('- tabindex:', () => {
      it('*[tabindex] returns true', async () => {
        testElement = await createTestElement(html`<div tabindex="-1" id="${testId}"></div>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(true);
      });

      it('*:not([tabindex]) returns false', async () => {
        testElement = await createTestElement(html`<div id="${testId}"></div>`);
        expect(isFocusable(testElement.querySelector('#' + testId))).toBe(false);
      });
    });
  });

  describe('queryAllFocusable() ', () => {
    let testElement: HTMLElement;

    it('should get focusable elements', async () => {
      testElement = await createTestElement(html`
        <button>Hello</button>
        <a href="#">Hello</a>
        <audio controls>
          <source src="#" type="audio/ogg" />
          <source src="#" type="audio/mpeg" />
          Your browser does not support the audio tag.
        </audio>
        <select name="cars" id="cars">
          <option value="volvo">Volvo</option>
          <option value="saab">Saab</option>
          <option value="mercedes">Mercedes</option>
          <option value="audi">Audi</option>
        </select>
        <textarea id="w3review" name="w3review" rows="4" cols="50">
         Hello
        </textarea
        >
        <video width="320" height="240" controls>
          <source src="#" type="video/mp4" />
          <source src="#" type="video/ogg" />
          Your browser does not support the video tag.
        </video>
        <div role="button">Clickable</div>
        <div contenteditable="true">Clickable</div>
        <map name="workmap">
          <area shape="rect" coords="34,44,270,350" alt="Computer" href="computer.htm" />
        </map>
        <!-- <iframe title="hello" src="#"></iframe> -->
        <!-- <embed type="image/jpg" src="#" width="300" height="200" /> -->
        <div tabindex="-5"></div>
        <!-- <object data="#" width="300" height="200"></object> -->
      `);

      // iframe, embed and object were causing web-test-runner to blow up
      const expectedListOfInstances = [
        HTMLButtonElement,
        HTMLAnchorElement,
        HTMLAudioElement,
        HTMLSelectElement,
        HTMLTextAreaElement,
        HTMLVideoElement,
        HTMLDivElement,
        HTMLDivElement,
        HTMLAreaElement,
        // HTMLIFrameElement,
        // HTMLEmbedElement,
        HTMLDivElement,
        // HTMLObjectElement,
      ];

      const elements = queryAllFocusable(testElement);

      elements.forEach((element, order) => {
        expect(element instanceof expectedListOfInstances[order]).toBeTruthy();
      });

      removeTestElement(testElement);
    });

    it('should not get an not selectable element', async () => {
      testElement = await createTestElement(html`<div>
        <div>I AM DIV</div>
        <span>I AM SPAN</span>
        <section>I AM SECTION</section>
        <input type="hidden" />
        <input disabled />
        <input readonly />
        <button>Hello</button>
      </div>`);
      const elements = queryAllFocusable(testElement);
      expect(elements.length).toBe(1);
      expect(elements[0] instanceof HTMLButtonElement).toBeTruthy();
      removeTestElement(testElement);
    });
  });

  describe('queryChildFromLightOrShadowDom', () => {
    let testElement: HTMLElement;
    let component: TestElement;

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<test-dom-spec-element><div class="light-dom-el" id="light">ohai</div></test-dom-spec-element>`
      );
      component = testElement.querySelector<TestElement>('test-dom-spec-element');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('retrieves element from light dom as expected', () => {
      const el = queryChildFromLightOrShadowDom(component, '.light-dom-el');
      expect(el).not.toBeNull();
      expect(el.id).toBe('light');
    });

    it('retrieves element from shadow dom as expected', () => {
      const el = queryChildFromLightOrShadowDom(component, '.shadow-dom-el');
      expect(el).not.toBeNull();
      expect(el.id).toBe('shady');
    });

    it('returns null if element not found in light dom or shadow dom', () => {
      const el = queryChildFromLightOrShadowDom(component, '.jabberwocky');
      expect(el).toBeNull();
    });

    it('does not die if host el does not have a shadow dom', async () => {
      const nonShadyHost = await createTestElement(html`<div><span class="find-me" id="found">ohai</span></div>`);
      const el = queryChildFromLightOrShadowDom(nonShadyHost, '.find-me');
      expect(el).not.toBeNull();
      expect(el.id).toBe('found');
      removeTestElement(nonShadyHost);
    });
  });

  describe('getWindowDimensions(): ', () => {
    it('returns a dimension object with window height and width as expected', () => {
      const bodyEl = window.document.body;
      bodyEl.style.height = '100vh';
      bodyEl.style.width = '100vw';

      const bodyElRect = bodyEl.getBoundingClientRect();
      const { height, width } = getWindowDimensions(); // defaults to base window object if no arguments sent

      expect(height).toBe(bodyElRect.height, 'height is as expected');
      expect(width).toBe(bodyElRect.width, 'width is as expected');
    });

    it('handles bad input', () => {
      const testWindowWithoutDocument = {} as Window;

      expect(getWindowDimensions(null)).toEqual({ width: 0, height: 0 }, 'handles null');
      expect(() => {
        getWindowDimensions(null);
      }).not.toThrowError('does not die on null');

      expect(getWindowDimensions(testWindowWithoutDocument)).toEqual(
        { width: 0, height: 0 },
        'handles a bad window object'
      );
      expect(() => {
        getWindowDimensions(testWindowWithoutDocument);
      }).not.toThrowError('does not die with a bad window object');
    });
  });

  describe('windowIsAboveMobileBreakpoint(): ', () => {
    it('should break if test suite changes default dimensions', () => {
      // default window width in tests is 800
      expect(window.innerWidth).toBe(800, 'width checks out');
    });

    it('returns as expected', () => {
      expect(windowIsAboveMobileBreakpoint()).toBe(false, 'defaults to mobile breakpoint (576px)');
      expect(windowIsAboveMobileBreakpoint('802px')).toBe(true, 'handles px values');
    });
  });

  describe('getShadowRootOrElse(): ', () => {
    let testElement: HTMLElement;
    let component: TestElement;
    let div: HTMLElement;
    let fallback: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(
        html`
          <test-dom-spec-element id="has-shadow">ohai</test-dom-spec-element>
          <div id="no-shadow">howdy</div>
          <div id="intended-fallback"></div>
        `
      );
      component = testElement.querySelector<TestElement>('test-dom-spec-element');
      div = testElement.querySelector('#no-shadow');
      fallback = testElement.querySelector('#intended-fallback');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should return as expected', () => {
      const returnsShade = getShadowRootOrElse(component, fallback);
      const returnsHostEl = getShadowRootOrElse(div);
      const returnsFallbackInstead = getShadowRootOrElse(div, fallback);
      expect(returnsShade).toBe((component.shadowRoot as unknown) as HTMLElement, 'returns shadow root if exists');
      expect(returnsHostEl).toBe(div, 'returns host if no shadow root or fallback');
      expect(returnsFallbackInstead).toBe(fallback, 'returns fallback');
    });
  });

  describe('createFragment(): ', () => {
    it('returns as expected', () => {
      const test = createFragment('ohai');
      expect(test instanceof DocumentFragment).toBe(true, 'we made a fragment');
      expect(test.textContent).toBe('ohai', 'fragment has our text');
    });
  });

  describe('isElementTextInputType() ', () => {
    let testElement: any;

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('checkboxes return false', async () => {
      testElement = await createTestElement(html`<input type="checkbox" />`);
      expect(isElementTextInputType(testElement.querySelector('input'))).toBe(false);
    });

    it('radios return false', async () => {
      testElement = await createTestElement(html`<input type="radio" />`);
      expect(isElementTextInputType(testElement.querySelector('input'))).toBe(false);
    });

    it('buttons return false', async () => {
      testElement = await createTestElement(html`<button></button>`);
      expect(isElementTextInputType(testElement.querySelector('button'))).toBe(false);
    });

    it('text input return true', async () => {
      testElement = await createTestElement(html`<input type="text" />`);
      expect(isElementTextInputType(testElement.querySelector('input'))).toBe(true);
    });

    it('default text input return true', async () => {
      testElement = await createTestElement(html`<input />`);
      expect(isElementTextInputType(testElement.querySelector('input'))).toBe(true);
    });

    it('textarea returns true', async () => {
      testElement = await createTestElement(html`<textarea></textarea>`);
      expect(isElementTextInputType(testElement.querySelector('textarea'))).toBe(true);
    });

    it('select returns true', async () => {
      testElement = await createTestElement(html`<select></select>`);
      expect(isElementTextInputType(testElement.querySelector('select'))).toBe(true);
    });
  });

  describe('getInputValueType() ', () => {
    it('string should return text type', async () => {
      expect(getInputValueType('hello')).toBe('text');
    });

    it('numeric string should return number type', async () => {
      expect(getInputValueType('10')).toBe('number');
    });

    it('date string should return number type', async () => {
      expect(getInputValueType('2018-12-31')).toBe('date');
    });
  });
});
