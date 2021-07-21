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
  let scrollComponent: CdsModal;
  const placeholderHeader = 'I have a nice title';
  const placeholderContent = 'But not much to say...';
  const placeholderActionText = 'Ok';
  const placeholderAction = `<cds-button>${placeholderActionText}</cds-button>`;

  beforeEach(async () => {
    testElement = await createTestElement(html`
      <cds-modal id="normal-modal" hidden>
        <cds-modal-header>${placeholderHeader}</cds-modal-header>
        <cds-modal-content
          ><div><p>${placeholderContent}</p></div></cds-modal-content
        >
        <cds-modal-actions>${placeholderAction}</cds-modal-actions>
      </cds-modal>

      <cds-modal id="scroll-modal" style="--max-height: 400px" hidden>
        <cds-modal-header>${placeholderHeader}</cds-modal-header>
        <cds-modal-content
          ><div style="padding-bottom: 1200px"><p>${placeholderContent}</p></div></cds-modal-content
        >
        <cds-modal-actions>${placeholderAction}</cds-modal-actions>
      </cds-modal>
    `);
    component = testElement.querySelector<CdsModal>('#normal-modal');
    scrollComponent = testElement.querySelector<CdsModal>('#scroll-modal');
  });

  afterEach(() => {
    removeTestElement(testElement);
    removeTestElement(scrollComponent);
  });

  it('should create the component', async () => {
    await componentIsStable(component);
    const slots = getComponentSlotContent(component);
    expect(slots.default.includes('<cds-modal-content tabindex="0">')).toBe(false);
    expect(slots.default.includes(placeholderContent)).toBe(true);

    expect(slots['modal-header'].includes('<cds-modal-header slot="modal-header">')).toBe(true);
    expect(slots['modal-header'].includes(placeholderHeader)).toBe(true);

    // since cds-button further adds and modifies the element we simply test that it contains the button text
    expect(slots['modal-actions']).toContain(`${placeholderActionText}`);
  });

  it('should NOT add tabindex and aria-label to the content area if it is not scrollable', async () => {
    await componentIsStable(component);
    const content = component.shadowRoot.querySelector('.modal-body');
    component.hidden = false;
    await componentIsStable(scrollComponent);
    expect(content).not.toBeNull('content exists');
    expect(content.hasAttribute('tabindex') && content.getAttribute('tabindex') === '0').toBe(
      false,
      'tabindex set on content'
    );
    expect(
      content.hasAttribute('aria-label') && content.getAttribute('aria-label') === I18nService.keys.modal.contentBox
    ).toBe(false, 'content area should have an aria label on it');
  });

  it('should add aria-label and tabindex to the content area if it needs to scroll', async () => {
    await componentIsStable(scrollComponent);
    const content = scrollComponent.shadowRoot.querySelector('.modal-body');
    scrollComponent.hidden = false;
    await componentIsStable(scrollComponent);
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
    const shadowRoot = component.shadowRoot;
    let button = shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
    expect(button).not.toBeNull();

    component.closable = false;
    await componentIsStable(component);
    expect(component.hasAttribute('closable')).toBe(false);
    button = shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
    expect(button).toBeNull();
  });

  describe(' - close button: ', () => {
    it('should set close button aria label using Common Strings Service', async () => {
      component.hidden = false;
      await componentIsStable(component);
      const button = component.shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
      expect(button).not.toBeNull();
      expect(button.hasAttribute('aria-label')).toBe(true);
      expect(button.getAttribute('aria-label')).toEqual(I18nService.keys.modal.closeButtonAriaLabel);
    });

    it('should set close button attributes as expected', async () => {
      const expectedAttrs: HTMLAttributeTuple[] = [
        ['cds-layout', 'align:top'],
        ['aria-label', I18nService.keys.modal.closeButtonAriaLabel],
      ];
      const root = component.shadowRoot;
      component.hidden = false;
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should be closable by default');
      expect(root.querySelector('cds-internal-close-button')).not.toBeNull('close button is in the shadow dom');
      expect(component.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).toBeNull(
        'close button is NOT in the light dom'
      );
      const closeBtn = root.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
      expectedAttrs.forEach(attr => {
        const [name, val] = attr;
        expect(closeBtn.getAttribute(name)).toBe(val as string, `close button has ${name} attr set to ${val}`);
      });
    });

    it('should toggle close button as expected', async () => {
      const root = component.shadowRoot;
      component.hidden = false;
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should be closable by default');
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).not.toBeNull(
        'close button should be present by default'
      );
      component.size = 'lg';
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'should still be closable');
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).not.toBeNull(
        'close button should not be removed if closable not updated'
      );
      component.closable = false;
      await componentIsStable(component);
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).toBeNull(
        'close button should be removed'
      );
    });

    it('should only ever have one close button, even if the close button is added/removed', async () => {
      component.hidden = false;
      const root = component.shadowRoot;
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'starts out closable');
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).not.toBeNull(
        'close button should be present by default'
      );
      expect(root.querySelectorAll<CdsInternalCloseButton>('cds-internal-close-button').length).toBe(
        1,
        'should have one close button'
      );

      component.hidden = true;
      await componentIsStable(component);
      component.hidden = false;
      await componentIsStable(component);
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).not.toBeNull(
        'close button should still be there after hiding/showing'
      );
      expect(root.querySelectorAll<CdsInternalCloseButton>('cds-internal-close-button').length).toBe(
        1,
        'should still only have one close button after hiding/showing'
      );

      component.closable = false;
      await componentIsStable(component);
      expect(component.closable).toBe(false, 'no longer closable');
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).toBeNull(
        'close button should be removed'
      );
      expect(root.querySelectorAll<CdsInternalCloseButton>('cds-internal-close-button').length).toBe(
        0,
        'should not have any close buttons anymore'
      );

      component.closable = true;
      await componentIsStable(component);
      expect(component.closable).toBe(true, 'closable again');
      expect(root.querySelector<CdsInternalCloseButton>('cds-internal-close-button')).not.toBeNull(
        'close button added back in'
      );
      expect(root.querySelectorAll<CdsInternalCloseButton>('cds-internal-close-button').length).toBe(
        1,
        'should still only have 1 close button'
      );
    });

    it('should set close button click event as expected', async () => {
      component.hidden = false;
      await componentIsStable(component);
      let value = '';
      component.addEventListener<any>('closeChange', (e: CustomEvent) => {
        value = e.detail;
        expect(value).toBe('close-button-click');
      });
      component.shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button').click();
    });
  });

  it('should have text based boundaries for screen readers', async () => {
    component.hidden = false;
    await componentIsStable(component);
    const messages = component.shadowRoot.querySelectorAll<HTMLDivElement>('[cds-layout="display:screen-reader-only"]');
    expect(messages[0].innerText.toLowerCase()).toBe('beginning of modal content');
    expect(messages[1].innerText.toLowerCase()).toBe('end of modal content');
  });

  it('should emit a closeChange event on escape', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'closeChange');
    component.dispatchEvent(new KeyboardEvent('keyup', { code: 'Escape' }));
    await componentIsStable(component);
    expect((await event).detail).toBe('escape-keypress');
  });

  it('should emit a closeChange event when close button is clicked', async () => {
    await componentIsStable(component);
    const event = onceEvent(component, 'closeChange');
    component.shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button').click();
    expect((await event).detail).toBe('close-button-click');
  });
});
