/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/internal-components/close-button/register.js';
import {
  CdsInternalCloseButton,
  CdsCloseButtonTagName,
  appendCloseButton,
  removeCloseButton,
} from '@cds/core/internal-components/close-button';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import { HTMLAttributeTuple } from '@cds/core/internal/utils/dom.js';

describe('internal close button element', () => {
  let testElement: HTMLElement;
  let component: CdsInternalCloseButton;
  const placeholderText = 'ohai';

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <form>
        <cds-internal-close-button>${placeholderText}</cds-internal-close-button>
      </form>
    `);
    component = testElement.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component but not project content into the slot', async () => {
    await componentIsStable(component);
    expect(component.innerText).not.toBe(placeholderText);
  });
});

describe('appendCloseButton: ', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement();
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should do nothing if hostElement does not exist', () => {
    function testFn() {
      appendCloseButton(void 0);
    }
    expect(testFn).not.toThrowError();
  });

  it('should add close-button as expected', () => {
    appendCloseButton(testElement);
    expect(testElement.querySelector(CdsCloseButtonTagName)).not.toBeNull();
  });

  it('should add attributes as expected', () => {
    const testAttrs: HTMLAttributeTuple[] = [
      ['class', 'ohai'],
      ['cds-layout', 'p:lg'],
      ['aria-hidden', 'true'],
    ];
    appendCloseButton(testElement);
    appendCloseButton(testElement, testAttrs);
    const closeBtns = testElement.querySelectorAll(CdsCloseButtonTagName);
    expect(closeBtns.length > 0).toBe(true, 'multiple close btns added');
    expect(closeBtns[0].attributes.length !== closeBtns[1].attributes.length).toBe(
      true,
      'close btn attr lists should be different'
    );
    testAttrs.forEach(attrtup => {
      const [name, value] = attrtup;
      expect(closeBtns[1].getAttribute(name)).toBe(value as string, `${name} attr set to ${value} on closeBtn`);
    });
  });

  it('should not add attributes if attributes are not passed', () => {
    appendCloseButton(testElement);
    appendCloseButton(testElement, []);
    const closeBtns = testElement.querySelectorAll(CdsCloseButtonTagName);
    expect(closeBtns.length > 0).toBe(true, 'multiple close btns added');
    expect(closeBtns[0].attributes.length === closeBtns[1].attributes.length).toBe(
      true,
      'close btn attr lists should be the same'
    );
  });

  it('should add close-button to the light DOM of the host element', () => {
    appendCloseButton(testElement);
    expect(testElement.querySelector(CdsCloseButtonTagName)).not.toBeNull('close btn exists in light DOM');
    expect(
      testElement.shadowRoot !== null && testElement.shadowRoot.querySelector(CdsCloseButtonTagName) !== null
    ).toBe(false, 'close btn does not exist in shadow DOM');
  });

  it('should add click handler to the close-button', () => {
    let clicked = 0;
    appendCloseButton(testElement, [], () => {
      clicked = clicked + 1;
    });
    const btn = testElement.querySelector(CdsCloseButtonTagName);
    btn.click();
    expect(clicked).toBe(1, 'close btn click handler was assigned and called');
  });

  it('should bind hostElement as the context of the click handler for the close-button', () => {
    appendCloseButton(testElement, [], () => {
      testElement.classList.add('ohai');
    });
    const btn = testElement.querySelector(CdsCloseButtonTagName);
    btn.click();
    expect(testElement.classList.contains('ohai')).toBe(true, 'close btn events act on the host element');
  });
});

describe('removeCloseButton: ', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement();
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should do nothing if hostElement does not exist', () => {
    function testFn() {
      removeCloseButton(void 0);
    }
    expect(testFn).not.toThrowError();
  });

  it('should do nothing if close button does not exist', () => {
    function testFn() {
      removeCloseButton(testElement);
    }
    expect(testFn).not.toThrowError();
  });

  it('should remove close-button as expected', () => {
    appendCloseButton(testElement);
    expect(testElement.querySelector(CdsCloseButtonTagName)).not.toBeNull('close btn added');
    removeCloseButton(testElement);
    expect(testElement.querySelector(CdsCloseButtonTagName)).toBeNull('close btn removed');
  });
});
