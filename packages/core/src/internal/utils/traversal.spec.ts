/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { customElement, getChildren, getFlattenedDOMTree, getFlattenedFocusableItems } from '@cds/core/internal';

@customElement('traversal-test-element')
class TestComponent extends LitElement {
  buttonId = 'shady-btn';

  render() {
    return html`
      <slot name="slot-two">slot two</slot>
      <button>shadow dom one</button>
      <p>shadow dom content</p>
      <slot>slot</slot>
      <button>shadow dom two</button>
    `;
  }
}

describe('getChildren', () => {
  let testElement: HTMLElement;
  let component: HTMLElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <traversal-test-element>
        <button>light dom one</button>
        <button slot="slot-two">light dom two</button>
      </traversal-test-element>
    `);

    component = testElement.querySelector('traversal-test-element');
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
});
