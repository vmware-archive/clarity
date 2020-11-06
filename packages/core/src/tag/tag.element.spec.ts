/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/tag/register.js';
import '@cds/core/icon/register.js';
import { CdsTag } from '@cds/core/tag';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('tag element', () => {
  let testElement: HTMLElement;
  const placeholderText = 'Tag Placeholder';
  const defaultClassname = 'clickable-tag';
  const readonlyClassname = 'readonly-tag';
  const closableClassname = 'closable-tag';

  const closeIconString = '<cds-icon shape="times"';

  function getTagComponentFromElement(el: HTMLElement, type: 'readonly' | 'closable' | 'clickable' = 'clickable') {
    return el.querySelector<CdsTag>(`cds-tag.${type}-tag`);
  }

  beforeEach(async () => {
    spyOn(console, 'warn').and.callThrough();

    testElement = await createTestElement(html`
      <cds-tag aria-label="test" class="${defaultClassname}">${placeholderText}</cds-tag>
      <cds-tag class="${readonlyClassname}" readonly>Readonly Tag</cds-tag>
      <cds-tag aria-label="test" class="${closableClassname}" closable>Closable Tag</cds-tag>
    `);
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    const component = getTagComponentFromElement(testElement);
    await componentIsStable(component);
    expect(component.innerText).toBe(placeholderText);
    expect(!!component.closable).toBe(false);
  });

  it('should be clickable by default and not closable', async () => {
    const component = getTagComponentFromElement(testElement);
    await componentIsStable(component);
    expect(!!component.readonly).toBe(false);
    expect(!!component.closable).toBe(false);
    expect(component.shadowRoot.innerHTML).not.toContain(closeIconString);
  });

  it('should NOT have a close X by default', async () => {
    const component = getTagComponentFromElement(testElement);
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).not.toContain(closeIconString);
  });

  it('should not be clickable if readonly', async () => {
    const component = getTagComponentFromElement(testElement, 'readonly');
    await componentIsStable(component);
    expect(!!component.readonly).toBe(true);
    expect(component.shadowRoot.innerHTML).not.toContain(closeIconString);
  });

  it('should have a close X if closable', async () => {
    const component = getTagComponentFromElement(testElement, 'closable');
    await componentIsStable(component);
    expect(component.shadowRoot.innerHTML).toContain(closeIconString);
  });

  it('should set readonly to false if closable', async () => {
    const component = getTagComponentFromElement(testElement, 'closable');
    await componentIsStable(component);
    expect(!!component.closable).toBe(true);
    expect(!!component.readonly).toBe(false);
    component.closable = false;
    await componentIsStable(component);
    component.closable = true;
    await componentIsStable(component);
    expect(!!component.readonly).toBe(false);
  });

  it('should warn if closable but there is no aria-label', async () => {
    await createTestElement(html`
      <cds-tag class="${readonlyClassname}" readonly>Readonly Tag</cds-tag>
      <cds-tag class="${closableClassname}" closable>Closable Tag</cds-tag>
    `);
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should warn if clickable but there is no aria-label', async () => {
    await createTestElement(html`
      <cds-tag class="${readonlyClassname}" readonly>Readonly Tag</cds-tag>
      <cds-tag class="${closableClassname}">Clickable Tag</cds-tag>
    `);
    expect(console.warn).toHaveBeenCalledTimes(1);
  });

  it('should NOT warn if aria-labels are present', async () => {
    const component = getTagComponentFromElement(testElement, 'closable');
    await componentIsStable(component);

    expect(console.warn).not.toHaveBeenCalled();
  });
});
