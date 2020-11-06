/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test/utils';
import { CdsButton } from '@cds/core/button';
import { CdsFile } from '@cds/core/file';
import '@cds/core/file/register.js';

describe('cds-file', () => {
  let component: CdsFile;
  let button: CdsButton;
  let element: HTMLElement;

  beforeEach(async () => {
    element = await createTestElement(html`
      <cds-file>
        <label>file</label>
        <input type="file" />
        <cds-control-message>message text</cds-control-message>
      </cds-file>
    `);

    component = element.querySelector<CdsFile>('cds-file');
    button = component.shadowRoot.querySelector('cds-button');
  });

  afterEach(() => {
    removeTestElement(element);
  });

  it('should create component', async () => {
    await componentIsStable(component);
    expect(component).toBeTruthy();
  });

  it('should set the file input as active when button is clicked', done => {
    let clicked = false;
    element.querySelector('label').addEventListener('click', () => {
      clicked = true;
      done();
    });
    component.shadowRoot.querySelector('cds-button').click();
    expect(clicked).toBe(true);
  });

  it('should disable button if file input is disabled', async () => {
    await componentIsStable(component);
    expect(button.disabled).toBe(false);

    component.inputControl.setAttribute('disabled', '');
    await componentIsStable(component);
    expect(button.disabled).toBe(true);
  });

  it('should show file name when selected', async () => {
    await componentIsStable(component);
    const button = component.shadowRoot.querySelector('cds-button');
    expect(button.innerText.toLocaleLowerCase()).toBe('browse');

    // cast to test method as its not possible to trigger file upload in test due to browser security reasons
    (component as any).updateLabel([{ name: 'test.png' }]);
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('test.png');

    (component as any).updateLabel([{ name: 'test.png' }, { name: 'test2.png' }]);
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('2 files');

    (component as any).updateLabel();
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('browse');
  });

  it('should clear file input', async () => {
    component.inputControl.dispatchEvent(new Event('change'));

    Object.defineProperty(component, 'inputControl', { get: () => ({ files: [{ name: 'test.png' }] }) });
    component.requestUpdate();
    await componentIsStable(component);

    component.shadowRoot.querySelector('cds-control-action').click();
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('browse');
  });
});
