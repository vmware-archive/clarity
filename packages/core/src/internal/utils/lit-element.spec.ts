/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';
import { childrenUpdateComplete, syncDefinedProps, syncProps } from './lit-element.js';

describe('lit-element utils', () => {
  it('childrenUpdateComplete', async () => {
    class MockElement {
      updateComplete = new Promise(resolve => resolve('test'));
    }

    const one = new MockElement() as LitElement;
    const two = new MockElement() as LitElement;

    const values = await childrenUpdateComplete([one, two]);
    expect(values[0]).toBe('test');
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
