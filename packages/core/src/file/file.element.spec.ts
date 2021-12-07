/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import { createTestElement, removeTestElement, componentIsStable } from '@cds/core/test';
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
    (component as any).updateLabelAndFocus([{ name: 'test.png' }]);
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('test.png');

    (component as any).updateLabelAndFocus([{ name: 'test.png' }, { name: 'test2.png' }]);
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('2 files');

    (component as any).updateLabelAndFocus();
    await componentIsStable(component);
    expect(button.innerText.toLocaleLowerCase()).toBe('browse');
  });

  it('clear action should not be visible if there are no files to clear', async () => {
    await componentIsStable(component);
    expect(component.inputControl.files.length).toBe(0, 'files length is zero by default');
    expect(component.shadowRoot.querySelector('cds-button-action')).toBeNull('no files, no clear action');

    Object.defineProperty(component, 'inputControl', {
      get: () => ({ files: [{ name: 'test.png' }] }),
      configurable: true,
    });
    component.requestUpdate();
    await componentIsStable(component);
    expect(component.inputControl.files.length).toBe(1, 'we have files now');
    expect(component.shadowRoot.querySelector('cds-button-action')).not.toBeNull('we have files, we have clear action');

    Object.defineProperty(component, 'inputControl', { get: () => ({ files: void 0 }) });
    component.requestUpdate();
    await componentIsStable(component);
    expect(component.inputControl.files).toBeUndefined('files winding up undefined somehow');
    expect(component.shadowRoot.querySelector('cds-button-action')).toBeNull('no files, no clear action');
  });

  it('should clear file input', async () => {
    (component.inputControl as HTMLInputElement).dispatchEvent(new Event('change'));

    Object.defineProperty(component, 'inputControl', { get: () => ({ files: [{ name: 'test.png' }] }) });
    component.requestUpdate();
    await componentIsStable(component);

    component.shadowRoot.querySelector('cds-button-action').click();
    await componentIsStable(component);
    expect(document.activeElement).toBe(component);
    expect(button.innerText.trim().toLocaleLowerCase()).toBe('browse');
  });

  it('should not run an update on a programmatic change event', async () => {
    spyOn(component, 'updateLabelAndFocus');
    (component.inputControl as HTMLInputElement).dispatchEvent(new Event('change'));
    await componentIsStable(component);
    expect(component.updateLabelAndFocus).not.toHaveBeenCalled();
  });

  it('should be able to skip change event when clearing out files', async () => {
    spyOn(component.inputControl, 'dispatchEvent');
    await componentIsStable(component);
    component.clearFiles(false); // skip event
    expect(component.inputControl.dispatchEvent).not.toHaveBeenCalled();
    await componentIsStable(component);
    component.clearFiles(true); // hard set to force firing the change event
    await componentIsStable(component);
    component.clearFiles(); // defaults to firing the event
    expect(component.inputControl.dispatchEvent).toHaveBeenCalledTimes(2);
  });
});
