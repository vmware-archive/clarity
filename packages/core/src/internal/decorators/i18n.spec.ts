/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { registerElementSafely } from '@cds/core/internal';
import { html, LitElement } from 'lit-element';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';
import { i18n } from '@cds/core/internal';

const i18nValues = {
  open: 'Open my element',
  close: 'Close my element',
};

/** @element test-18n-element */
class TestI18nElement extends LitElement {
  [__i18n: string]: any;

  @i18n() i18n = i18nValues;

  render() {
    return html`<slot></slot>`;
  }
}

registerElementSafely('test-18n-element', TestI18nElement);

describe('i18n decorator', () => {
  let testElement: HTMLElement;
  let component: TestI18nElement;
  const closeText = 'Close my example element';

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-18n-element></test-18n-element> `);
    component = testElement.querySelector<TestI18nElement>('test-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should allow setting values for i18n', () => {
    expect(component.__i18n).toEqual(i18nValues);
  });

  it('should allow setting values for i18n through cds-i18n attribute', async () => {
    await componentIsStable(component);
    component.setAttribute('cds-i18n', `{ "close": "${closeText}" }`);
    await componentIsStable(component);
    expect(component.i18n.close).toEqual(closeText);
  });
});
