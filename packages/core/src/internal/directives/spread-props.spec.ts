/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html } from 'lit-element';
import { render } from 'lit-html';
import { registerElementSafely, property } from '@clr/core/internal';
import { spreadProps } from './spread-props.js';
import { createTestElement, removeTestElement } from '@clr/core/test/utils';

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
    const element = createTestElement();
    const getTestElement = () => element.querySelector<TestElement>('test-spread-props-directive');

    render(html`<test-spread-props-directive></test-spread-props-directive>`, element);
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
