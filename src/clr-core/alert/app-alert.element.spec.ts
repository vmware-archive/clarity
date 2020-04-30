/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */
import { CdsAppAlert } from '@clr/core/alert';
import '@clr/core/alert';
import { CdsIcon } from '@clr/core/icon-shapes';
import { CommonStringsService, CommonStringsServiceInternal } from '@clr/core/internal';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  removeTestElement,
  waitForComponent,
} from '@clr/core/test/utils';

describe('alert element', () => {
  let testElement: HTMLElement;
  let component: CdsAppAlert;
  const placeholderText = 'I am a default alert with no attributes.';
  const placeholderActionsText = 'This is where action elements go.';

  describe('Basic alert behaviors', () => {
    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `
        <cds-app-alert>
          <cds-alert-content>${placeholderText}</cds-alert-content>
          <cds-alert-actions>${placeholderActionsText}</cds-alert-actions>
        </cds-app-alert>
      `;

      await waitForComponent('cds-app-alert');
      component = testElement.querySelector<CdsAppAlert>('cds-app-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      const slots = getComponentSlotContent(component);
      expect(slots.default).toBe(`<cds-alert-content>${placeholderText}</cds-alert-content>`);
      expect(slots.actions).toBe(`<cds-alert-actions slot="actions">${placeholderActionsText}</cds-alert-actions>`);
    });

    it('should support closable option', async () => {
      await componentIsStable(component);
      expect(component.closable).toBe(true);
      expect(component.hasAttribute('closable')).toBe(true);
      let button = component.shadowRoot.querySelector('button.close');
      expect(button).not.toBeNull();
      expect(button.classList.contains('close')).toBe(true);

      component.closable = false;
      await componentIsStable(component);
      expect(component.hasAttribute('closable')).toBe(false);
      button = component.shadowRoot.querySelector<HTMLButtonElement>('button.close');
      expect(button).toBeNull();
    });

    it('should set icon shape based on status', async () => {
      await componentIsStable(component);
      let icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();

      expect(icon.hasAttribute('shape')).toBe(true);
      expect(icon.getAttribute('shape')).toEqual('info-circle');

      component.status = 'warning';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon.hasAttribute('shape')).toBe(true);
      expect(icon.getAttribute('shape')).toEqual('exclamation-triangle');

      component.status = 'danger';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon.hasAttribute('shape')).toBe(true);
      expect(icon.getAttribute('shape')).toEqual('exclamation-circle');
    });

    it('should support custom icon shape', async () => {
      await componentIsStable(component);
      let icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      component.iconShape = 'exclamation-triangle';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon.hasAttribute('shape')).toBe(true);
      expect(icon.getAttribute('shape')).toEqual('exclamation-triangle');
    });

    it('should set icon title based on status', async () => {
      await componentIsStable(component);
      let icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();

      expect(icon.hasAttribute('title')).toBe(true);
      expect(icon.getAttribute('title')).toEqual(CommonStringsService.keys.info);

      component.status = 'warning';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon).toBeDefined();
      expect(icon.hasAttribute('title')).toBe(true);
      expect(icon.getAttribute('title')).toEqual(CommonStringsService.keys.warning);

      component.status = 'danger';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon).toBeDefined();
      expect(icon.hasAttribute('title')).toBe(true);
      expect(icon.getAttribute('title')).toEqual(CommonStringsService.keys.danger);
    });

    it('should support custom icon title', async () => {
      await componentIsStable(component);
      let icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();

      expect(icon.hasAttribute('shape')).toBe(true);
      expect(icon.getAttribute('shape')).toEqual('info-circle');

      component.iconTitle = 'my-icon-title';
      await componentIsStable(component);
      icon = component.shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon).toBeDefined();
      expect(icon.hasAttribute('title')).toBe(true);
      expect(icon.getAttribute('title')).toEqual('my-icon-title');
    });

    it('should set close button aria label using Common Strings Service', async () => {
      const service = new CommonStringsServiceInternal();

      await componentIsStable(component);
      const button = component.shadowRoot.querySelector<HTMLButtonElement>('button.close');
      expect(button).not.toBeNull();
      expect(button.hasAttribute('aria-label')).toBe(true);
      expect(button.getAttribute('aria-label')).toEqual(service.keys.alertCloseButtonAriaLabel);
    });

    it('should emit a closeChanged event when close button is clicked', async done => {
      let value: any;
      await componentIsStable(component);
      component.addEventListener<any>('closeChange', (e: CustomEvent) => {
        value = e.detail;
        expect(value).toBe(true);
        done();
      });

      const button = component.shadowRoot.querySelector<HTMLButtonElement>('button.close');
      expect(button).toBeDefined();
      button.click();
    });
  });
});
