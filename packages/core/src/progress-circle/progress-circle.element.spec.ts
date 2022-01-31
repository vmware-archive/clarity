/*
 * Copyright (c) 2016-2022 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit';
import '@cds/core/progress-circle/register.js';
import { CdsProgressCircle } from '@cds/core/progress-circle';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

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
    it('status should initialize as "neutral" if not set', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('status')).toBe('neutral');
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

  describe('ariaLabel', () => {
    it('should show indeterminate label if no label is set and there is no value', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-label')).toBe('Loading');
    });
    it('should show loading label and value if no label is set', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('aria-label')).toBe('Loading 49%');
      component.value = 80;
      await componentIsStable(component);
      expect(component.getAttribute('aria-label')).toBe('Loading 80%');
    });
    it('should not show default label if a custom label is set', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-label')).toBe('Loading');
      componentUnset.setAttribute('aria-label', 'ohai');
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-label')).toBe('ohai');

      await componentIsStable(component);
      component.setAttribute('aria-label', 'ohai');
      await componentIsStable(component);
      expect(component.getAttribute('aria-label')).toBe('ohai');
      component.value = 88;
      await componentIsStable(component);
      expect(component.getAttribute('aria-label')).toBe('ohai');
    });
  });

  describe('i18n', () => {
    const newLoading = 'ohai';
    const newLooping = 'kthxbye';

    it('uses i18n strings by default', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('aria-label').indexOf(component.i18n.loading) > -1).toBe(
        true,
        'has loading i18n string'
      );
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-label').indexOf(componentUnset.i18n.looping) > -1).toBe(
        true,
        'has looping i18n string'
      );
    });
    it('updates looping i18n strings as expected', async () => {
      await componentIsStable(componentUnset);
      componentUnset.setAttribute('cds-i18n', `{ "loading": "${newLoading}", "looping": "${newLooping}" }`);
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('aria-label').indexOf(newLooping) > -1).toBe(true);
    });
    it('updates loading i18n strings as expected', async () => {
      await componentIsStable(component);
      component.setAttribute('cds-i18n', `{ "loading": "${newLoading}", "looping": "${newLooping}" }`);
      await componentIsStable(component);
      expect(component.getAttribute('aria-label').indexOf(newLoading) > -1).toBe(true);
    });
  });

  describe('setAriaAttributes', () => {
    it('should return expected for indeterminate progress', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('role')).toBe('img');
      expect(componentUnset.hasAttribute('aria-valuemin')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuemax')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuenow')).toBe(false);
      expect(componentUnset.getAttribute('aria-label')).toBe('Loading');

      componentUnset.ariaLabel = 'howdy';
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('role')).toBe('img');
      expect(componentUnset.hasAttribute('aria-valuemin')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuemax')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuenow')).toBe(false);
      expect(componentUnset.getAttribute('aria-label')).toBe('howdy');
    });
    it('should return as expected for progress with value', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0');
      expect(component.getAttribute('aria-valuemax')).toBe('100');
      expect(component.getAttribute('aria-valuenow')).toBe('49');
      expect(component.getAttribute('aria-label')).toBe('Loading 49%');

      component.value = 0;
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0');
      expect(component.getAttribute('aria-valuemax')).toBe('100');
      expect(component.getAttribute('aria-valuenow')).toBe('0');
      expect(component.getAttribute('aria-label')).toBe('Loading 0%');

      component.ariaLabel = 'ohai';
      component.value = 80;
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0');
      expect(component.getAttribute('aria-valuemax')).toBe('100');
      expect(component.getAttribute('aria-valuenow')).toBe('80');
      expect(component.getAttribute('aria-label')).toBe('ohai');
    });
    it('should update as expected for indeterminate progress given a value', async () => {
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('role')).toBe('img');
      expect(componentUnset.hasAttribute('aria-valuemin')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuemax')).toBe(false);
      expect(componentUnset.hasAttribute('aria-valuenow')).toBe(false);
      expect(componentUnset.getAttribute('aria-label')).toBe('Loading');

      componentUnset.value = 66;
      await componentIsStable(componentUnset);
      expect(componentUnset.getAttribute('role')).toBe('progressbar');
      expect(componentUnset.getAttribute('aria-valuemin')).toBe('0');
      expect(componentUnset.getAttribute('aria-valuemax')).toBe('100');
      expect(componentUnset.getAttribute('aria-valuenow')).toBe('66');
      expect(componentUnset.getAttribute('aria-label')).toBe('Loading 66%');
    });
    it('should update as expected for progress with a value shifted to indeterminate', async () => {
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('progressbar');
      expect(component.getAttribute('aria-valuemin')).toBe('0');
      expect(component.getAttribute('aria-valuemax')).toBe('100');
      expect(component.getAttribute('aria-valuenow')).toBe('49');
      expect(component.getAttribute('aria-label')).toBe('Loading 49%');

      component.value = null;
      await componentIsStable(component);
      expect(component.getAttribute('role')).toBe('img');
      expect(component.hasAttribute('aria-valuemin')).toBe(false);
      expect(component.hasAttribute('aria-valuemax')).toBe(false);
      expect(component.hasAttribute('aria-valuenow')).toBe(false);
      expect(component.getAttribute('aria-label')).toBe('Loading');
    });
  });
});
