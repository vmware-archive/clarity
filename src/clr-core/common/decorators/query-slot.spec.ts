/*
 * Copyright (c) 2016-2019 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit-element';
import { registerElementSafely } from '../utils/register';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from './../../test/utils';
import { querySlot, querySlotAll } from './query-slot';

class TestElement extends LitElement {
  @querySlot('#test') test: HTMLDivElement;
  @querySlotAll('.item') testItems: NodeListOf<HTMLDivElement>;

  render() {
    return html`
      <slot></slot>
    `;
  }
}

registerElementSafely('test-element', TestElement);

describe('query slot decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = createTestElement();
    testElement.innerHTML = `
      <test-element>
        <div id="test">hi</div>
        <div class="item">item 1</div>
        <div class="item">item 2</div>
        <div class="item">item 3</div>
      </test-element>
    `;
    await waitForComponent('test-element');
    component = testElement.querySelector<TestElement>('test-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should get a single element reference from a slotted element', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.test).toBeTruthy();
    expect(component.test.innerText).toBe('hi');
  });

  it('should get a Node List of element from slotted elements', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
    expect(component.testItems.length).toBe(3);
    expect(Array.from(component.testItems)[0].innerText).toBe('item 1');
  });
});
