/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { LitElement, html, css } from 'lit-element';
import { registerElementSafely, getCssPropertyValue } from '@cds/core/internal';
import { createTestElement, removeTestElement } from '@cds/core/test';
import { globalStyle } from './global-style.js';

declare global {
  interface HTMLElementTagNameMap {
    'test-global-style-decorator': HTMLElement;
  }
}

export class TestElement extends LitElement {
  static get styles() {
    return css`
      :host {
        --color: red;
        --background: red;
      }
    `;
  }

  @globalStyle() globalStyles = css`
    test-global-style-decorator {
      --color: blue;
    }
  `;
}
registerElementSafely('test-global-style-decorator', TestElement);

let element: HTMLElement;
let testElement: TestElement;

describe('globalStyle decorator', () => {
  beforeEach(async () => {
    element = await createTestElement(html`<test-global-style-decorator></test-global-style-decorator>`);
    testElement = element.querySelector<TestElement>('test-global-style-decorator');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should append a style tag to element', () => {
    expect(getCssPropertyValue('--color', testElement)).toBe('blue');
  });
});
