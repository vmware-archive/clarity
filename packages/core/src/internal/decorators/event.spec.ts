/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit-element';
import { event, EventEmitter, registerElementSafely } from '@cds/core/internal';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

/** @element test-event-decorator */
export class TestElement extends LitElement {
  @event() test: EventEmitter<string>;
}

registerElementSafely('test-event-decorator', TestElement);

describe('event decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<test-event-decorator></test-event-decorator>`);
    component = testElement.querySelector<TestElement>('test-event-decorator');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create a event listener with a generic type', async () => {
    await componentIsStable(component);
    let value: any;
    component.addEventListener('test', (e: any) => (value = e.detail));
    component.test.emit('hello');

    await componentIsStable(component);
    expect(value).toBe('hello');
  });

  it('should support native decorator API proposal', () => {
    const proto = { key: 'testEvent' };
    const conf = event()(proto, undefined);
    expect(conf.key).toBe('testEvent');
    expect(conf.descriptor.get().eventName).toBe('testEvent');
  });

  it('should support legacy decorator for now', () => {
    const proto = {};
    const conf = event()(proto, 'ohai');
    expect(conf).toBeUndefined();
  });
});
