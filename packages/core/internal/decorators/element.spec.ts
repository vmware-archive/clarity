/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement } from 'lit-element';

import { customElement } from './element.js';

@customElement('test-custom-element-decorator')
export class TestElement extends LitElement {}

export class LegacyTestElement extends LitElement {
  constructor() {
    super();
  }
}

describe('event decorator', () => {
  it('should register the custom element', async () => {
    const component = customElements.get('test-custom-element-decorator');
    expect(component).toBe(TestElement);
  });

  it('should support native decorator API proposal', () => {
    const desc = { kind: 'class', elements: [''] };
    customElement('test-custom-element-decorator-legacy')(desc as any).finisher(LegacyTestElement);
    const component = customElements.get('test-custom-element-decorator-legacy');
    expect(component).toBe(LegacyTestElement);
  });
});
