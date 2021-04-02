/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import {
  customElement,
  getChildren,
  getFocusableItems,
  getFlattenedDOMTree,
  getFlattenedFocusableItems,
} from '@cds/core/internal';

@customElement('traversal-test-element')
class TestComponent extends LitElement {
  render() {
    return html`
      <slot name="slot-two">slot two</slot>
      <button id="shady-btn">shadow dom one</button>
      <p>shadow dom content</p>
      <slot>slot</slot>
      <button>shadow dom two</button>
    `;
  }
}

describe('getFocusableItems', () => {
  let testElement: HTMLElement;
  let component: TestComponent;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <traversal-test-element>
        <button id="slot-btn">light dom one</button>
        <button slot="slot-two">light dom two</button>
        <p>light dom content</p>
      </traversal-test-element>
    `);

    component = testElement.querySelector<TestComponent>('traversal-test-element');
    await componentIsStable(component);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get first focus -- light DOM', async () => {
    const myBtn = testElement.querySelector<HTMLElement>('#slot-btn');
    myBtn.setAttribute('cds-first-focus', '');
    await componentIsStable(component);
    const focusables = getFocusableItems(testElement);
    expect(focusables.length).toBe(4);
    expect(focusables[0].hasAttribute('cds-first-focus'));
    const testFocusables = focusables.filter(f => f.getAttribute('id') === 'slot-btn');
    expect(testFocusables.length).toBe(1);
  });

  it('should get first focus -- shadow DOM', async () => {
    const myBtn = component.shadowRoot.querySelector<HTMLElement>('#shady-btn');
    myBtn.setAttribute('cds-first-focus', '');
    await componentIsStable(component);
    const focusables = getFocusableItems(testElement);
    expect(focusables.length).toBe(4);
    expect(focusables[0].hasAttribute('cds-first-focus'));
    const testFocusables = focusables.filter(f => f.getAttribute('id') === 'shady-btn');
    expect(testFocusables.length).toBe(1);
  });

  it('should only get tabbbable elements', async () => {
    const shadyPara = component.shadowRoot.querySelector<HTMLElement>('p');
    const nonShadyPara = testElement.querySelector<HTMLElement>('p');
    shadyPara.setAttribute('tabindex', '0');
    nonShadyPara.setAttribute('tabindex', '-1');
    await componentIsStable(component);
    const focusables = getFocusableItems(testElement);
    expect(focusables.length).toBe(5);
    const testFocusables = focusables.filter(f => f.hasAttribute('tabindex'));
    expect(testFocusables.length).toBe(1);
  });
});

describe('getChildren', () => {
  let testElement: HTMLElement;
  let component: TestComponent;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <traversal-test-element>
        <button>light dom one</button>
        <button slot="slot-two">light dom two</button>
      </traversal-test-element>
    `);

    component = testElement.querySelector<TestComponent>('traversal-test-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get children in light DOM', () => {
    const children = getChildren(testElement);
    expect(children.length).toBe(1);
  });

  it('should get children in shadow DOM', () => {
    const children = getChildren(component);
    expect(children.length).toBe(5);
  });
});

describe('getFlattenedDOMTree', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <traversal-test-element>
        <button>light dom two</button>
        <button slot="slot-two">light dom one</button>
      </traversal-test-element>
    `);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get all children in both light and shadow DOM from projected and flattened DOM tree', () => {
    const children = getFlattenedDOMTree(testElement);
    expect(children.length).toBe(8);
    expect(children[0].tagName.toLowerCase()).toBe('traversal-test-element');
    expect(children[1].textContent).toBe('slot two');
    expect(children[2].textContent).toBe('light dom one');
    expect(children[3].textContent).toBe('shadow dom one');
    expect(children[4].textContent).toBe('shadow dom content');
    expect(children[5].textContent).toBe('slot');
    expect(children[6].textContent).toBe('light dom two');
    expect(children[7].textContent).toBe('shadow dom two');
  });
});

describe('getFlattenedFocusableItems', () => {
  let testElement: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <traversal-test-element>
        <button>light dom two</button>
        <p>shadow dom light</p>
        <button slot="slot-two">light dom one</button>
      </traversal-test-element>
    `);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get all focusable children in both light and shadow DOM from a flattened DOM tree', () => {
    const children = getFlattenedFocusableItems(testElement);
    expect(children.length).toBe(4);
    expect(children[0].textContent).toBe('light dom one');
    expect(children[1].textContent).toBe('shadow dom one');
    expect(children[2].textContent).toBe('light dom two');
    expect(children[3].textContent).toBe('shadow dom two');
  });

  it('should only get tabbable elements', async () => {
    const component = testElement.querySelector<TestComponent>('traversal-test-element');
    const shadyPara = component.shadowRoot.querySelector<HTMLElement>('p');
    const nonShadyPara = testElement.querySelector<HTMLElement>('p');
    shadyPara.setAttribute('tabindex', '0');
    nonShadyPara.setAttribute('tabindex', '-1');
    await componentIsStable(component);
    const children = getFlattenedFocusableItems(testElement);
    expect(children.length).toBe(5);
    const filteredTabindexed = children.filter(f => f.hasAttribute('tabindex'));
    expect(filteredTabindexed.length).toBe(1);
    expect(children[0].textContent).toBe('light dom one');
    expect(children[1].textContent).toBe('shadow dom one');
    expect(children[2].textContent).toBe('shadow dom content');
    expect(children[3].textContent).toBe('light dom two');
    expect(children[4].textContent).toBe('shadow dom two');
  });
});
