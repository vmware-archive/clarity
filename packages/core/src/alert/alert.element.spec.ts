/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/alert/register.js';
import '@cds/core/icon/register.js';
import { CdsAlert, getIconStatusTuple, iconShapeIsAlertStatusType } from '@cds/core/alert';
import { CdsIcon } from '@cds/core/icon/icon.element.js';
import { infoStandardIcon } from '@cds/core/icon/shapes/info-standard.js';
import {
  componentIsStable,
  createTestElement,
  getComponentSlotContent,
  onceEvent,
  removeTestElement,
} from '@cds/core/test';
import { CdsInternalCloseButton } from '@cds/core/internal-components/close-button';
import { I18nService } from '@cds/core/internal';

describe('Alert element – ', () => {
  let testElement: HTMLElement;
  let component: CdsAlert;
  const placeholderText = 'I am a default alert with no attributes.';
  const alertStatusIconSelector = '.alert-status-icon';

  describe('Lightweight alerts: ', () => {
    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-alert>${placeholderText}</cds-alert>`);
      component = testElement.querySelector<CdsAlert>('cds-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should slot the component', async () => {
      await componentIsStable(component);
      const slots = getComponentSlotContent(component);
      expect(slots.default).toBe(`${placeholderText}`);
    });

    it('should not show alert-actions', async () => {
      await componentIsStable(component);
      expect(component.querySelectorAll('.alert-actions-wrapper').length).toBe(0);
    });

    it('should not be closable', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('closable')).toBe(false);
      component.closable = true;
      await componentIsStable(component);
      expect(component.querySelectorAll('cds-internal-close-button').length).toBe(0);
    });
  });

  describe('custom icons: ', () => {
    let customComponent: CdsAlert;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert id="defaultAlert">${placeholderText}</cds-alert>
        <cds-alert id="customAlert"><cds-icon shape="ohai"></cds-icon>${placeholderText}</cds-alert>
      `);

      component = testElement.querySelector<CdsAlert>('#defaultAlert');
      customComponent = testElement.querySelector<CdsAlert>('#customAlert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should default to an show "info" icon if not defined', async () => {
      const iconName = infoStandardIcon[0];
      await componentIsStable(component);
      const alertSlotContent = getComponentSlotContent(component);
      const alertStatusIcon = component.shadowRoot.querySelector(alertStatusIconSelector);
      expect(alertSlotContent['alert-icon']).toBe('');
      expect(alertStatusIcon.getAttribute('shape')).toBe(iconName);
    });

    it('should be show "info" icon if given a weird status and no custom icon shape', async () => {
      const iconName = infoStandardIcon[0];
      await componentIsStable(component);
      component.setAttribute('status', 'jabberwocky');
      await componentIsStable(component);
      const alertSlotContent = getComponentSlotContent(component);
      const alertStatusIcon = component.shadowRoot.querySelector(alertStatusIconSelector);
      expect(alertSlotContent['alert-icon']).toBe('');
      expect(alertStatusIcon.getAttribute('shape')).toBe(iconName);
    });

    it('should default to the status icon shape if status is set and custom shape is not defined', async () => {
      await componentIsStable(component);
      const alertSlotContent = getComponentSlotContent(component);
      const alertStatusIcon = component.shadowRoot.querySelector(alertStatusIconSelector);
      expect(alertSlotContent['alert-icon']).toBe('');
      expect(alertStatusIcon).not.toBeNull();
      expect(alertStatusIcon.hasAttribute('shape')).toBe(true);
      expect(alertStatusIcon.getAttribute('shape')).toEqual('info-standard');

      component.setAttribute('status', 'warning');
      await componentIsStable(component);
      expect(component.status).toBe('warning');
      expect(alertStatusIcon.getAttribute('shape')).toEqual('warning-standard');

      await componentIsStable(customComponent);
      customComponent.setAttribute('status', 'danger');
      await componentIsStable(customComponent);
      const customAlertSlotContent = getComponentSlotContent(customComponent);
      expect(customComponent.status).toBe('danger');
      expect(customAlertSlotContent['alert-icon'].includes('cds-icon')).toBe(true);
      expect(customAlertSlotContent['alert-icon'].includes('shape="error-standard"')).toBe(false);
      expect(customAlertSlotContent['alert-icon'].includes('shape="ohai"')).toBe(true);
    });

    it('should support a custom icon shape', async () => {
      await componentIsStable(customComponent);
      const customAlertSlotContent = getComponentSlotContent(customComponent);
      expect(customAlertSlotContent['alert-icon'].includes('cds-icon')).toBe(true);
      expect(customAlertSlotContent['alert-icon'].includes('shape="ohai"')).toBe(true);
    });
  });

  describe('status: ', () => {
    let customComponent: CdsAlert;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert id="defaultAlert">${placeholderText}</cds-alert>
        <cds-alert id="customAlert"><cds-icon shape="ohai"></cds-icon>${placeholderText}</cds-alert>
      `);
      component = testElement.querySelector<CdsAlert>('#defaultAlert');
      customComponent = testElement.querySelector<CdsAlert>('#customAlert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should default to an "info" icon if status is not defined', async () => {
      await componentIsStable(component);
      const iconName = infoStandardIcon[0];
      const alertStatusIcon = component.shadowRoot.querySelector(alertStatusIconSelector);
      expect(component.status).toBe('neutral');
      expect(alertStatusIcon.getAttribute('shape')).toBe(iconName);
      expect(alertStatusIcon.getAttribute('shape')).toBe(iconName);
    });

    it('should allow users to change statuses', async () => {
      await componentIsStable(component);
      expect(component.status).toBe('neutral');
      expect(component.shadowRoot.querySelector(alertStatusIconSelector).getAttribute('shape')).toBe(
        infoStandardIcon[0]
      );
      component.setAttribute('status', 'warning');
      await componentIsStable(component);
      expect(component.status).toBe('warning');
      expect(component.shadowRoot.querySelector(alertStatusIconSelector).getAttribute('shape')).toBe(
        'warning-standard'
      );
    });

    it('should show the spinner if set to loading status', async () => {
      await componentIsStable(customComponent);
      customComponent.setAttribute('status', 'loading');
      await componentIsStable(customComponent);
      expect(customComponent.status).toBe('loading');
      expect(customComponent.shadowRoot.querySelector(alertStatusIconSelector)).toBeNull();
      expect(customComponent.shadowRoot.querySelector('cds-icon')).toBeNull();
      expect(customComponent.shadowRoot.querySelector('.alert-spinner')).not.toBeNull();
      const customAlertSlotContent = getComponentSlotContent(customComponent);
      expect(customAlertSlotContent['alert-icon']).toBeUndefined();
    });
  });

  describe('Boxed (default type pastel) alerts: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlert;
    const placeholderText = 'I am a default alert with no attributes.';
    const placeholderActionsText = 'This is where action elements go.';

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert alert-group-type="default">
          ${placeholderText}
          <cds-alert-actions>${placeholderActionsText}</cds-alert-actions>
        </cds-alert>
      `);

      component = testElement.querySelector<CdsAlert>('cds-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should slot the component', async () => {
      await componentIsStable(component);
      const slots = getComponentSlotContent(component);
      expect(slots.default.trim()).toBe(`${placeholderText}`);
    });

    it('should show alert actions', async () => {
      component.type = 'default';
      await componentIsStable(component);
      const slots = getComponentSlotContent(component);
      expect(slots.actions.includes('<cds-alert-actions slot="actions" _type="default">')).toBe(true);
      expect(slots.actions.includes(placeholderActionsText)).toBe(true);
    });
  });

  describe('Banner alerts: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlert;
    const placeholderText = 'I am a default alert with no attributes.';

    beforeEach(async () => {
      testElement = await createTestElement(
        html`<cds-alert-group type="banner"><cds-alert closable>${placeholderText}</cds-alert></cds-alert-group>`
      );
      component = testElement.querySelector<CdsAlert>('cds-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should slot the component', async () => {
      await componentIsStable(component);
      const slots = getComponentSlotContent(component);
      expect(slots.default.trim()).toBe(`${placeholderText}`);
    });

    it('close-button should be size "20"', async () => {
      await componentIsStable(component);
      const closeBtn = component.shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button');
      expect(!!closeBtn).not.toBe(false, 'close-button should exist');
      expect(closeBtn.iconSize).toBe('20', 'close-button icon size should be 20');
    });

    it('should show neutral spinner if set to loading status', async () => {
      await componentIsStable(component);
      component.setAttribute('status', 'loading');
      await componentIsStable(component);
      expect(component.status).toBe('loading');
      expect(component.shadowRoot.querySelector(alertStatusIconSelector)).toBeNull();
      expect(component.shadowRoot.querySelector('cds-icon')).toBeNull();
      const spinner = component.shadowRoot.querySelector('.alert-spinner');
      expect(spinner).not.toBeNull('loading status should show spinner');
      const customAlertSlotContent = getComponentSlotContent(component);
      expect(customAlertSlotContent['alert-icon']).toBeUndefined();
    });
  });

  describe('Alert – close button: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlert;
    const placeholderText = 'I am a default alert with no attributes.';
    const placeholderActionsText = 'This is where action elements go.';
    const getCloseButton = () =>
      component.shadowRoot.querySelector<CdsInternalCloseButton>('cds-internal-close-button');

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert alert-group-type="default">
          ${placeholderText}
          <cds-alert-actions>${placeholderActionsText}</cds-alert-actions>
        </cds-alert>
      `);

      component = testElement.querySelector<CdsAlert>('cds-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should show the close button', async () => {
      await componentIsStable(component);
      expect(getCloseButton()).toBe(null);

      component.closable = true;
      component.type = 'banner';
      await componentIsStable(component);
      expect(getCloseButton()).not.toBe(null);
    });

    it('should set the close button aria-label', async () => {
      const expectedLabel = 'ohai';
      await componentIsStable(component);
      component.type = 'default';
      component.setAttribute('closable', 'true');
      component.setAttribute('cds-i18n', `{ "closeButtonAriaLabel": "${expectedLabel}" }`);
      await componentIsStable(component);
      expect(getCloseButton()).not.toBe(null);
      expect(getCloseButton().getAttribute('aria-label')).toBe(expectedLabel);
    });

    it('should emit a closeChanged event when close button is clicked', async () => {
      component.type = 'default';
      component.closable = true;
      await componentIsStable(component);

      const event = onceEvent(component, 'closeChange');
      getCloseButton().click();
      expect((await event).detail).toBe(true);
    });

    it('sets 16 as the default icon size', async () => {
      await componentIsStable(component);

      component.closable = true;
      component.type = 'default';
      await componentIsStable(component);

      const icon = getCloseButton().shadowRoot.querySelector<CdsIcon>('cds-icon');
      expect(icon).not.toBeNull();
      expect(icon.hasAttribute('size')).toBe(true);
      expect(icon.getAttribute('size')).toBe('16');
    });
  });

  describe('Aria: ', () => {
    let testElement: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`<cds-alert>${placeholderText}</cds-alert>`);
      component = testElement.querySelector<CdsAlert>('cds-alert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should set up "aria-describedby" as expected', async () => {
      const ariaAttr = 'aria-describedby';
      await componentIsStable(component);
      expect(component.hasAttribute(ariaAttr)).toBe(true, 'alert element has ' + ariaAttr);
      const describedById = component.getAttribute(ariaAttr);
      const contentWrapper = component.shadowRoot.querySelector('.alert-content');
      expect(component.shadowRoot.querySelector('#' + describedById)).not.toBeNull(
        ariaAttr + ' id element should exist'
      );
      expect(contentWrapper.getAttribute('id')).toBe(describedById, ariaAttr + ' id should be on the content wrapper');
    });

    it('should set role to "region" as/when expected', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('role')).toBe(true, 'role exists on alert element');
      expect(component.getAttribute('role')).toBe('region', 'role is set to "region" on alert element');
    });

    it('should use "aria-label" on the alert icon', async () => {
      await componentIsStable(component);
      let alertIcon = component.shadowRoot.querySelector('cds-icon.alert-status-icon');
      expect(alertIcon.getAttribute('aria-label')).toBe('Info', 'default alert has aria-label "Info"');

      component.setAttribute('status', 'danger');
      await componentIsStable(component);
      expect(alertIcon.getAttribute('shape')).toBe('error-standard', 'verify status has changed');
      expect(alertIcon.getAttribute('aria-label')).toBe(
        'Error',
        'icon shapes have aria-label "Error" after status change'
      );

      component.setAttribute('status', 'loading');
      await componentIsStable(component);
      alertIcon = component.shadowRoot.querySelector('.alert-spinner');
      expect(component.shadowRoot.querySelector('cds-icon.alert-icon')).toBeNull('verify loading status pt. 1');
      expect(alertIcon).not.toBeNull('verify loading status pt. 2');
      expect(alertIcon.getAttribute('aria-label')).toBe(
        'Loading',
        'loading spinner has aria-label "Loading" after status changed to loading'
      );
    });
  });
});

describe('getIconStatusTuple: ', () => {
  it('should return "info" as the default', async () => {
    const [shapeName, title] = getIconStatusTuple('hippogriff');
    expect(shapeName).toBe(infoStandardIcon[0]);
    expect(title).toBe(I18nService.keys.alert.info);
  });

  it('should return statuses as expected', async () => {
    let [shapeName, title] = getIconStatusTuple('info');
    expect(shapeName).toBe(infoStandardIcon[0]);
    expect(title).toBe(I18nService.keys.alert.info);
    [shapeName, title] = getIconStatusTuple('success');
    expect(shapeName).toBe('success-standard');
    expect(title).toBe(I18nService.keys.alert.success);
    [shapeName, title] = getIconStatusTuple('warning');
    expect(shapeName).toBe('warning-standard');
    expect(title).toBe(I18nService.keys.alert.warning);
    [shapeName, title] = getIconStatusTuple('danger');
    expect(shapeName).toBe('error-standard');
    expect(title).toBe(I18nService.keys.alert.danger);
    [shapeName, title] = getIconStatusTuple('unknown');
    expect(shapeName).toBe('help');
    expect(title).toBe(I18nService.keys.alert.info);
    [shapeName, title] = getIconStatusTuple('loading');
    expect(shapeName).toBe('loading');
    expect(title).toBe(I18nService.keys.alert.loading);
  });
});

describe('iconShapeIsAlertStatusType: ', () => {
  it('should return false as expected', async () => {
    expect(iconShapeIsAlertStatusType('')).toBe(false);
    expect(iconShapeIsAlertStatusType('jabberwocky')).toBe(false);
    expect(iconShapeIsAlertStatusType(null)).toBe(false);
  });

  it('should return true as expected', async () => {
    expect(iconShapeIsAlertStatusType('error-standard')).toBe(true);
    expect(iconShapeIsAlertStatusType('warning-standard')).toBe(true);
    expect(iconShapeIsAlertStatusType('info-standard')).toBe(true);
    expect(iconShapeIsAlertStatusType('success-standard')).toBe(true);
    expect(iconShapeIsAlertStatusType('help')).toBe(true);
  });
});
