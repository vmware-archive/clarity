/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/modal/register.js';
import { I18nService, HTMLAttributeTuple } from '@cds/core/internal';
import { CdsInternalCloseButton } from '@cds/core/internal-components/close-button';
import { CdsModal } from '@cds/core/modal';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  onceEvent,
  removeTestElement,
} from '@cds/core/test';

describe('modal element', () => {
  let testElement: HTMLElement;
  let component: CdsModal;
  const placeholderHeader = 'I have a nice title';
  const placeholderContent = 'But not much to say...';
  const placeholderActionText = 'Ok';
  const placeholderAction = `<cds-button>${placeholderActionText}</cds-button>`;
  const getCloseButton = () => component.querySelector<CdsInternalCloseButton>('cds-internal-close-button');

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-modal>
        <cds-modal-header>${placeholderHeader}</cds-modal-header>
        <cds-modal-content><p>${placeholderContent}</p></cds-modal-content>
        <cds-modal-actions>${placeholderAction}</cds-modal-actions>
      </cds-modal>
    `);
    component = testElement.querySelector<CdsModal>('cds-modal');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('<cds-modal-content tabindex="0">')).toBe(true);
    expect(slots.default.includes(placeholderContent)).toBe(true);

    expect(slots['modal-header'].includes('<cds-modal-header slot="modal-header">')).toBe(true);
    expect(slots['modal-header'].includes(placeholderHeader)).toBe(true);

    // since cds-button further adds and modifies the element we simply test that it contains the button text
    expect(slots['modal-actions']).toContain(`${placeholderActionText}`);
  });

  it('should add tabindex and aria-label to the content area to support scrolling large text', async () => {
    await componentIsStable(component);
    const content = component.shadowRoot.querySelector('.modal-body');
    expect(content).not.toBeNull('content exists');
    expect(content.hasAttribute('tabindex') && content.getAttribute('tabindex') === '0').toBe(
      true,
      'tabindex set on content'
    );
    expect(
      content.hasAttribute('aria-label') && content.getAttribute('aria-label') === I18nService.keys.modal.contentBox
    ).toBe(true, 'content area should have an aria label on it');
  });

  it('should support closable option', async () => {
    await componentIsStable(component);
    expect(component.closable).toBe(true);
    expect(component.hasAttribute('closable')).toBe(true);
    expect(getCloseButton()).not.toBeNull();

    component.closable = false;
    await componentIsStable(component);
    expect(component.hasAttribute('closable')).toBe(false);
    expect(getCloseButton()).toBeNull();
  });

  describe(' - close button: ', () => {
    it('should set close button aria label using Common Strings Service', async () => {
      await componentIsStable(component);
      expect(getCloseButton()).not.toBeNull();
      expect(getCloseButton().hasAttribute('aria-label')).toBe(true);
      expect(getCloseButton().getAttribute('aria-label')).toEqual(I18nService.keys.modal.closeButtonAriaLabel);
    });

    it('should set close button attributes as expected', async () => {
      const expectedAttrs: HTMLAttributeTuple[] = [
        ['cds-layout', 'align:top'],
        ['slot', 'close-button'],
        ['aria-label', I18nService.keys.modal.closeButtonAriaLabel],
        ['icon-size', '24'],
      ];
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should be closable by default');
      expect(component.shadowRoot.querySelector('cds-internal-close-button')).toBeNull(
        'close button is not in the shadow dom'
      );
      expect(getCloseButton()).not.toBeNull('close button is in the light dom');
      expectedAttrs.forEach(attr => {
        const [name, val] = attr;
        expect(getCloseButton().getAttribute(name)).toBe(val as string, `close button has ${name} attr set to ${val}`);
      });
    });

    it('should toggle close button as expected', async () => {
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should be closable by default');
      expect(getCloseButton()).not.toBeNull('close button should be present by default');
      component.size = 'lg';
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should still be closable');
      expect(getCloseButton()).not.toBeNull('close button should not be removed if closable not updated');
      component.closable = false;
      await componentIsStable(component);
      expect(getCloseButton()).toBeNull('close button should be removed');
    });

    it('should set close button click event as expected', async () => {
      await componentIsStable(component);
      const event = onceEvent(component, 'closeChange');
      getCloseButton().click();
      expect((await event).detail).toBe('close-button-click');
    });
  });

  it('should have text based boundaries for screen readers', async () => {
    await componentIsStable(component);
    const messages = component.shadowRoot.querySelectorAll<HTMLDivElement>('[cds-layout="display:screen-reader-only"]');
    expect(messages[0].innerText).toBe('Beginning of Modal Content');
    expect(messages[1].innerText).toBe('End of Modal Content');
  });

  it('should emit a closeChange event on escape', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'closeChange');
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }));
    await componentIsStable(component);
    window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Esc' }));
    expect((await event).detail).toBe('escape-keypress');
  });

  it('should emit a closeChange event when close button is clicked', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'closeChange');
    getCloseButton().click();
    expect((await event).detail).toBe('close-button-click');
  });
});
