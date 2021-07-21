/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { sendKeys } from '@web/test-runner-commands';
import { html } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { focusElement, focusable, onFocusOut, onEscape } from './focus.js';

describe('isFocusable', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`
    <a href="">true</a>
    <area href="">true</area>
    <button>true</button>
    <select true></select>
    <input value="true" />
    <textarea>true</textarea>
    <iframe title="test frame">true</iframe>
    <object>true</object>
    <div tabindex="0">true</div>
    <embed true />
    <div tabindex="-1">true</div>
    <div contenteditable="true">true</div>
    <div role="button">true</div>
    <a>false</a>
    <area>false</area>
    <input disabled value="false" />
    <button disabled>false</button>
    <select disabled false></select>
    <textarea disabled>false</textarea>
    <div role="button" disabled>false</div>
    `);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should mark focusable elements as true', () => {
    const elements = Array.from(testElement.querySelectorAll('*')).map(e => focusable(e));
    expect(elements.filter(i => i === true).length).toBe(13);
    expect(elements.filter(i => i === false).length).toBe(7);
  });
});

describe('focusElement', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <button>one</button>
      <button>two</button>
      <span>three</span>`);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should focus element', () => {
    const [one, two] = Array.from(testElement.querySelectorAll('button'));
    focusElement(two);
    expect(document.activeElement === one).toBe(false);
    expect(document.activeElement === two).toBe(true);
  });

  it('should focus non interactive elements', () => {
    const [one, two, three] = Array.from(testElement.querySelectorAll('*'));
    focusElement(three);
    expect(document.activeElement === one).toBe(false);
    expect(document.activeElement === two).toBe(false);
    expect(document.activeElement === three).toBe(true);
    expect(three.getAttribute('tabindex')).toBe('-1');

    focusElement(two);
    expect(document.activeElement === one).toBe(false);
    expect(document.activeElement === two).toBe(true);
    expect(document.activeElement === three).toBe(false);
    expect(three.getAttribute('tabindex')).toBe(null);
  });
});

describe('onFocusout', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<button>one</button><button>two</button>`);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should trigger callback when the element has a focusout', done => {
    const [one, two] = Array.from(testElement.querySelectorAll('button'));
    focusElement(one);

    let focusout = false;
    onFocusOut(one, () => {
      focusout = true;
      done();
    });

    focusElement(two);
    expect(focusout).toBe(true);
  });
});

describe('onEscape', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<button>one</button>`);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should trigger callback when the element is no longer in focus', async () => {
    const button = testElement.querySelector('button');
    focusElement(button);

    const event = new Promise(r => onEscape(testElement, () => r(true)));
    const [escape] = await Promise.all([event, sendKeys({ press: 'Escape' })]);

    expect(escape).toBe(true);
  });
});
