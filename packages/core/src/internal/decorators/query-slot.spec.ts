/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { createTestElement, removeTestElement } from '@cds/core/test/utils';
import { querySlot, querySlotAll } from './query-slot.js';

/** @element test-element */
class TestElement extends LitElement {
  @querySlot('#test') test: HTMLDivElement;
  @querySlotAll('.item') testItems: NodeListOf<HTMLDivElement>;

  render() {
    return html` <slot></slot> `;
  }
}

registerElementSafely('test-element', TestElement);

describe('query slot decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <test-element>
        <div id="test">hi</div>
        <div class="item">item 1</div>
        <div class="item">item 2</div>
        <div class="item">item 3</div>
      </test-element>
    `);
    component = testElement.querySelector<TestElement>('test-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get a single element reference from a slotted element', () => {
    expect(component).toBeTruthy();
    expect(component.test).toBeTruthy();
    expect(component.test.innerText).toBe('hi');
  });

  it('should get a Node List of element from slotted elements', () => {
    expect(component).toBeTruthy();
    expect(component.testItems.length).toBe(3);
    expect(Array.from(component.testItems)[0].innerText).toBe('item 1');
  });

  it('should throw if element is required', () => {
    class Proto {
      @querySlot('cds-error', { required: 'error' }) testError: HTMLDivElement;
      tagName = 'test-el';

      firstUpdated() {
        // do nothing
      }

      querySelector() {
        // do nothing
      }
    }

    const proto = new Proto();

    try {
      proto.firstUpdated();
    } catch (e) {
      expect(e.toString()).toBe('Error: The <cds-error> element is required to use <test-el>');
    }
  });

  it('should throw if element is required and contains custom message', () => {
    class Proto {
      @querySlot('#errorMessage', { required: 'error', requiredMessage: 'test message' })
      testErrorWithMessage: HTMLDivElement;

      firstUpdated() {
        // do nothing
      }

      querySelector() {
        // do nothing
      }
    }

    const proto = new Proto();

    try {
      proto.firstUpdated();
    } catch (e) {
      expect(e.toString()).toBe('Error: test message');
    }
  });

  it('should support native decorator API proposal', () => {
    const proto = { key: 'testEvent' };
    const conf = querySlot('#test')(proto, undefined);
    expect(conf.key).toBe('testEvent');
  });
});
