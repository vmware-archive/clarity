/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { removeTestElement, createTestElement } from '@cds/core/test';
import { getElementUpdates, listenForAttributeChange, onChildListMutation, onFirstInteraction } from './events.js';

describe('getElementUpdates', () => {
  let element: HTMLElement;
  let input: HTMLInputElement;

  beforeEach(async () => {
    element = await createTestElement(html`<input type="checkbox" />`);
    input = element.querySelector<HTMLInputElement>('input');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('get notified of property change', () => {
    let checked = false;
    getElementUpdates(input, 'checked', value => (checked = value));
    input.checked = true;

    expect(checked).toEqual(true);
  });

  it('get notified of initial attr value', async () => {
    input.setAttribute('indeterminate', '');
    const event = new Promise(resolve => getElementUpdates(input, 'indeterminate', v => resolve(v)));
    expect(await event).toBe('');
  });

  it('get notified of attr changes', async () => {
    const event = new Promise(resolve => getElementUpdates(input, 'checked', v => resolve(v)));
    input.setAttribute('checked', '');
    expect(await event).toBe(false);
  });

  it('should reset any React value trackers if input', () => {
    (input as any)._valueTracker = {};

    let value = '';
    getElementUpdates(input, 'value', v => (value = v));
    input.value = 'test';

    expect(value).toEqual('test');
    expect((input as any)._valueTracker).toEqual(null);
  });

  it('should reset any React value trackers if checkable input', () => {
    (input as any)._valueTracker = {};

    let checked = false;
    getElementUpdates(input, 'checked', value => (checked = value));
    input.checked = true;

    expect(checked).toEqual(true);
    expect((input as any)._valueTracker).toEqual(null);
  });
});

describe('listenForAttributeChange', () => {
  it('executes callback when observed attribute changes', async () => {
    const element = await createTestElement();
    expect(element.getAttribute('name')).toBe(null);
    const event = new Promise(resolve => listenForAttributeChange(element, 'name', id => resolve(id)));

    element.setAttribute('name', 'hello world');
    removeTestElement(element);

    expect(await event).toBe('hello world');
  });
});

describe('onFirstInteraction', () => {
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<button></button>`);
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should track mouseover interaction', async () => {
    const event = onFirstInteraction(element);
    element.dispatchEvent(new MouseEvent('mouseover', { bubbles: true, cancelable: true }));
    await event;
    expect(true).toBe(true);
  });

  it('should track touchstart interaction', async () => {
    const event = onFirstInteraction(element);
    element.dispatchEvent(new MouseEvent('touchstart', { bubbles: true, cancelable: true }));
    await event;
    expect(true).toBe(true);
  });

  it('should track keydown interaction', async () => {
    const event = onFirstInteraction(element);
    element.dispatchEvent(new MouseEvent('keydown', { bubbles: true, cancelable: true }));
    await event;
    expect(true).toBe(true);
  });

  it('should track focus interaction', async () => {
    const event = onFirstInteraction(element);
    element.dispatchEvent(new MouseEvent('focus', { bubbles: true, cancelable: true }));
    await event;
    expect(true).toBe(true);
  });
});

describe('onChildListMutation', () => {
  let element: HTMLElement;
  let list: HTMLUListElement;

  beforeEach(async () => {
    element = await createTestElement(
      html`<ul>
        <li>one</li>
      </ul>`
    );
    list = element.querySelector('ul');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should track additons to child list', async () => {
    const mutanten = new Promise(resolve =>
      onChildListMutation(list, () => resolve(list.querySelectorAll('li').length))
    );
    const li = document.createElement('li');
    li.innerText = 'two';
    list.appendChild(li);
    expect(await mutanten).toBe(2);
  });

  it('should track removals in child list', async () => {
    const mutanten = new Promise(resolve =>
      onChildListMutation(list, () => resolve(list.querySelectorAll('li').length))
    );
    list.querySelector('li').remove();
    expect(await mutanten).toBe(0);
  });
});
