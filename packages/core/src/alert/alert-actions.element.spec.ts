/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { CdsAlertActions } from '@clr/core/alert';
import { CdsButton } from '@clr/core/button';
import '@clr/core/alert';
import '@clr/core/button';
import { componentIsStable, createTestElement, removeTestElement, waitForComponent } from '@clr/core/test/utils';
import { getAlertActionsLayout, setActionButtonStyles } from './alert-actions.element.js';

describe('alert-actions element', () => {
  describe(' - the basics: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlertActions;
    const placeholderText = 'Alert Text Placeholder';

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `<cds-alert-actions>${placeholderText}</cds-alert-actions>`;

      await waitForComponent('cds-alert-actions');
      component = testElement.querySelector<CdsAlertActions>('cds-alert-actions');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should create the component', async () => {
      await componentIsStable(component);
      expect(component.innerText).toBe(placeholderText);
    });
  });

  describe(' - setup: ', () => {
    let testElement: HTMLElement;
    let component: CdsAlertActions;

    beforeEach(async () => {
      testElement = createTestElement();
      testElement.innerHTML = `<cds-alert-actions>
        <cds-button>ohai</cds-button>
        <cds-button>kthxbye</cds-button>
      </cds-alert-actions>`;

      await waitForComponent('cds-alert-actions');
      component = testElement.querySelector<CdsAlertActions>('cds-alert-actions');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should have a slot attribute of value `actions`', async () => {
      await componentIsStable(component);
      expect(component.hasAttribute('slot')).toBe(true);
      expect(component.getAttribute('slot')).toEqual('actions');
    });

    it('should setup buttons as expected', async () => {
      await componentIsStable(component);
      const buttons = component.querySelectorAll('cds-button');
      buttons.forEach(b => {
        expect(b.classList.contains('alert-btn')).toBe(true);
        expect(b.hasAttribute('size')).toBe(false);
        expect(b.hasAttribute('status')).toBe(false);
      });
    });
  });

  describe(' - supporting functions: ', () => {
    describe('getAlertActionsLayout', () => {
      it('should fallthrough to false to remove cds-layout attribute', () => {
        const expected = getAlertActionsLayout('anything');
        expect(expected).toBe(false);
      });

      it('should return "default" cds-layout attribute values', () => {
        const expected = (getAlertActionsLayout('default', true) as string).split(' ');
        expect(expected.indexOf('horizontal') > -1).toBe(true, 'should have horizontal layout');
        expect(expected.indexOf('gap:xs') > -1).toBe(true, 'should have xs gap');
        expect(expected.indexOf('p-l:md') > -1).toBe(true, 'should have md padding on the left');
        expect(expected.indexOf('p-r:sm') > -1).toBe(false, 'should NOT have right padding');
        expect(expected.indexOf('align:vertical-center') > -1).toBe(true, 'should be vertically centered');
        expect(expected.indexOf('align-left') > -1).toBe(false, 'should NOT be aligned left');
        expect(expected.indexOf('align:horizontal-stretch') > -1).toBe(false, 'should NOT fill flex layout');
      });

      it('should return "banner" cds-layout attribute values', () => {
        const expected = (getAlertActionsLayout('banner') as string).split(' ');
        expect(expected.indexOf('horizontal') > -1).toBe(true, 'should have horizontal layout');
        expect(expected.indexOf('gap:xs') > -1).toBe(true, 'should have xs gap');
        expect(expected.indexOf('p-l:md') > -1).toBe(true, 'should have md padding on the left');
        expect(expected.indexOf('p-r:sm') > -1).toBe(false, 'should NOT have right padding');
        expect(expected.indexOf('align:vertical-center') > -1).toBe(false, 'should not force vertical centering');
        expect(expected.indexOf('align-left') > -1).toBe(true, 'should be aligned left');
        expect(expected.indexOf('align:horizontal-stretch') > -1).toBe(true, 'should NOT fill flex layout');
      });

      it('should return different cds-layout attribute values if "default" and not "closable"', () => {
        const expected = (getAlertActionsLayout('default') as string).split(' ');
        expect(expected.indexOf('horizontal') > -1).toBe(true, 'should have horizontal layout');
        expect(expected.indexOf('gap:xs') > -1).toBe(true, 'should have xs gap');
        expect(expected.indexOf('p-l:md') > -1).toBe(true, 'should have md padding on the left');
        expect(expected.indexOf('p-r:sm') > -1).toBe(true, 'should have right padding');
        expect(expected.indexOf('align:vertical-center') > -1).toBe(true, 'should be vertically centered');
        expect(expected.indexOf('align-left') > -1).toBe(false, 'should NOT be aligned left');
        expect(expected.indexOf('align:horizontal-stretch') > -1).toBe(false, 'should NOT fill flex layout');
      });
    });

    describe('setActionButtonStyles', () => {
      let testElement: HTMLElement;
      let component: CdsButton;

      beforeEach(async () => {
        testElement = createTestElement();
        testElement.innerHTML = `<cds-button>ohai</cds-button>`;

        await waitForComponent('cds-button');
        component = testElement.querySelector('cds-button');
      });

      afterEach(() => {
        removeTestElement(testElement);
      });

      it('should set "banner" attributes as expected', async () => {
        const transformer = setActionButtonStyles('banner');
        transformer(component);
        await componentIsStable(component);
        expect(component.classList.contains('alert-btn')).toBe(false);
        expect(component.hasAttribute('size') && component.getAttribute('size') === 'sm').toBe(true);
        expect(component.hasAttribute('status') && component.getAttribute('status') === 'inverse').toBe(true);
      });

      it('should set "light" attributes as expected', async () => {
        const transformer = setActionButtonStyles('light');
        transformer(component);
        await componentIsStable(component);
        expect(component.classList.contains('alert-btn')).toBe(true);
        expect(component.hasAttribute('size')).toBe(false);
        expect(component.hasAttribute('status')).toBe(false);
      });

      it('should set "default" attributes as expected', async () => {
        const transformer = setActionButtonStyles('default');
        transformer(component);
        await componentIsStable(component);
        expect(component.classList.contains('alert-btn')).toBe(true);
        expect(component.hasAttribute('size')).toBe(false);
        expect(component.hasAttribute('status')).toBe(false);
      });

      it('should fallthrough to default attributes as expected', async () => {
        const transformer = setActionButtonStyles('ohai');
        transformer(component);
        await componentIsStable(component);
        expect(component.classList.contains('alert-btn')).toBe(true);
        expect(component.hasAttribute('size')).toBe(false);
        expect(component.hasAttribute('status')).toBe(false);
      });
    });
  });
});
