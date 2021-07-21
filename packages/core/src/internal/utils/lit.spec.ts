/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html, LitElement } from 'lit';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { childrenUpdateComplete, syncDefinedProps, syncProps, renderAfter, renderBefore } from './lit.js';

describe('lit utils', () => {
  it('childrenUpdateComplete', async () => {
    class MockElement {
      updateComplete = new Promise(resolve => resolve('test'));
    }

    const one = new MockElement() as LitElement;
    const two = new MockElement() as LitElement;

    const values: any = await childrenUpdateComplete([one, two]);
    expect(values[0]).toBe('test');
    expect(values[1]).toBe('test');
  });

  it('syncDefinedProps', () => {
    const parent = { name: 'parent-name', id: 'parent-id' };
    const one = { name: 'child-one' };
    const two = { name: 'child-two' };

    const props = new Map();
    props.set('name', 'parent-name');
    props.set('id', 'parent-id');
    syncDefinedProps(props, parent, [one, two]);

    expect(one.name).toBe('parent-name');
    expect(two.name).toBe('parent-name');

    expect((one as any).id).toBe(undefined);
    expect((two as any).id).toBe(undefined);
  });

  it('syncProps', () => {
    const source = { name: 'source-name', id: 'source-id', value: 'source-value' };
    const target = { name: 'target-name', id: 'target-id', value: 'target-value' };

    syncProps(target, source, {
      name: true,
      id: source.id !== 'source-id',
    });

    expect(target.name).toBe('source-name', 'sets properties defined true in object');
    expect(target.id).toBe('target-id', 'ignores properties where condition is not met');
    expect(target.value).toBe('target-value', 'ignores properties not defined on object conditions');
  });
});

describe('render utils', () => {
  let element: HTMLElement;
  let component: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`<div>component</div>`);
    component = element.querySelector('div');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should renderBefore a given element', () => {
    renderBefore(html`<p>before</p>`, component);
    expect(element.textContent).toBe('beforecomponent');
  });

  it('should renderAfter a given element', () => {
    renderAfter(html`<p>after</p>`, component);
    expect(element.textContent).toBe('componentafter');
  });
});
