/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html, render } from 'lit';
import { registerElementSafely, property } from '@cds/core/internal';
import { spreadProps } from './spread-props.js';
import { createTestElement, removeTestElement } from '@cds/core/test';

declare global {
  interface HTMLElementTagNameMap {
    'test-spread-props-directive': HTMLElement;
  }
}

export class TestElement extends LitElement {
  @property({ type: Boolean }) test = false;
  @property({ type: String }) test2 = 'hello';
  render() {
    return html`test`;
  }
}
registerElementSafely('test-spread-props-directive', TestElement);

describe('spread props directive', () => {
  it('should assign all props to component within template', async () => {
    const element = await createTestElement(html`<test-spread-props-directive></test-spread-props-directive>`);
    const getTestElement = () => element.querySelector<TestElement>('test-spread-props-directive');
    expect(getTestElement().test).toBe(false);
    expect(getTestElement().test2).toBe('hello');

    const template = html`<test-spread-props-directive
      ...="${spreadProps({ test: true, test2: 'hello world' })}"
    ></test-spread-props-directive>`;
    render(template, element);
    render(template, element); // call render twice to ensure second unchanged props skips render
    expect(getTestElement().test).toBe(true);
    expect(getTestElement().test2).toBe('hello world');
    removeTestElement(element);
  });
});
