/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/progress-circle/register.js';
import { CdsProgressCircle } from '@cds/core/progress-circle';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test/utils';

describe('progress circle element – ', () => {
  let testElementUnset: HTMLElement;
  let componentUnset: CdsProgressCircle;
  let testElement: HTMLElement;
  let component: CdsProgressCircle;

  beforeEach(async () => {
    testElementUnset = await createTestElement(html`<cds-progress-circle></cds-progress-circle>`);
    testElement = await createTestElement(
      html`<cds-progress-circle status="info" value="49" inverse></cds-progress-circle>`
    );
    componentUnset = testElementUnset.querySelector<CdsProgressCircle>('cds-progress-circle');
    component = testElement.querySelector<CdsProgressCircle>('cds-progress-circle');
  });

  afterEach(() => {
    removeTestElement(testElementUnset);
    removeTestElement(testElement);
  });

  describe('size:', () => {
    it('should update and reflect', async () => {
      await componentIsStable(componentUnset);
      componentUnset.size = 'xl';
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('size')).toBe('xl');
    });
  });

  describe('status:', () => {
    it('status should initialize as "default" if not set', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('status')).toBe('default');
    });

    it('status should initialize to set value', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('status')).toBe('info');
    });

    it('status should update and reflect', async () => {
      await componentIsStable(componentUnset);
      componentUnset.status = 'danger';
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('status')).toBe('danger');
    });
  });

  describe('progress (private property; internal use only):', () => {
    it('progress should be 30 if not set', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.progress).toBe(30);
    });

    it('progress should equal value if value is set', async () => {
      await componentIsStable(component);
      expect(component.progress).toBe(49);
    });

    it('updating value should update progress', async () => {
      await componentIsStable(componentUnset);
      componentUnset.setAttribute('value', '66');
      await componentIsStable(componentUnset);
      expect(componentUnset.progress).toBe(66);
    });
  });

  describe('auto-setting aria attributes: ', () => {
    it('should not have aria attrs if value is not set', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.hasAttribute('aria-valuenow')).toBe(false, 'aria-valuenow should not be present');
      expect(componentUnset.getAttribute('role')).toBe('img', 'role should be set to "img"');
      expect(componentUnset.hasAttribute('aria-valuemin')).toBe(false, 'aria-valuenow should not be present');
      expect(componentUnset.hasAttribute('aria-valuemax')).toBe(false, 'aria-valuenow should not be present');
    });

    it('should init aria attrs if value is set', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('aria-valuenow')).toBe('49', 'aria-valuenow should be set');
      expect(component.getAttribute('role')).toBe('progressbar', 'role should not be set to progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0', 'aria-valuenow should not be set');
      expect(component.getAttribute('aria-valuemax')).toBe('100', 'aria-valuenow should not be set');
    });

    it('should add aria attrs if value is set', async () => {
      await componentIsStable(componentUnset);
      componentUnset.value = 87;
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-valuenow')).toBe('87', 'aria-valuenow should be set');
      expect(componentUnset.getAttribute('role')).toBe('progressbar', 'role should not be set to progressbar');
      expect(componentUnset.getAttribute('aria-valuemin')).toBe('0', 'aria-valuenow should not be set');
      expect(componentUnset.getAttribute('aria-valuemax')).toBe('100', 'aria-valuenow should not be set');
    });

    it('should update aria attrs when value is changed', async () => {
      await componentIsStable(component);
      component.value = 16;
      await componentIsStable(component);
      expect(component.getAttribute('aria-valuenow')).toBe('16', 'aria-valuenow should be set');
      expect(component.getAttribute('role')).toBe('progressbar', 'role should not be set to progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0', 'aria-valuenow should not be set');
      expect(component.getAttribute('aria-valuemax')).toBe('100', 'aria-valuenow should not be set');
    });

    it('should remove aria attrs when value is unset', async () => {
      await componentIsStable(component);
      component.value = undefined;
      await componentIsStable(component);
      expect(component.hasAttribute('aria-valuenow')).toBe(false, 'aria-valuenow should not be present');
      expect(component.getAttribute('role')).toBe('img', 'role should be "img"');
      expect(component.hasAttribute('aria-valuemin')).toBe(false, 'aria-valuenow should not be present');
      expect(component.hasAttribute('aria-valuemax')).toBe(false, 'aria-valuenow should not be present');
    });
  });

  describe('background circle:', () => {
    // background circle of the circular progress is a <circle> element
    // the fill is a <path> element
    it('should have a classname of backstroke if value is not set', async () => {
      await componentIsStable(componentUnset);
      const grayBackground = componentUnset.shadowRoot.querySelector('circle.backstroke');
      const filledBackground = componentUnset.shadowRoot.querySelector('circle.arcstroke');
      expect(grayBackground).not.toBeNull('fallback 30% arc should have gray background');
      expect(filledBackground).toBeNull('fallback 30% arc should NOT have filled background');
    });

    it('should have a classname of backstroke if value set but less than 100', async () => {
      await componentIsStable(component);
      const grayBackground = component.shadowRoot.querySelector('circle.backstroke');
      const filledBackground = component.shadowRoot.querySelector('circle.arcstroke');
      expect(grayBackground).not.toBeNull('< 100% arc should have gray background');
      expect(filledBackground).toBeNull('< 100%  arc should NOT have filled background');
    });

    it('should have a classname of arcstroke if value is greater than 99', async () => {
      await componentIsStable(component);
      component.setAttribute('value', '100');
      await componentIsStable(component);
      const grayBackground = component.shadowRoot.querySelector('circle.backstroke');
      const filledBackground = component.shadowRoot.querySelector('circle.arcstroke');
      expect(component.value).toBe(100, 'updated value is reflected in property');
      expect(grayBackground).toBeNull('100% arc should NOT have gray background');
      expect(filledBackground).not.toBeNull('100%  arc should have filled background');
    });
  });
  // circle classname arcstroke/backstroke
});
