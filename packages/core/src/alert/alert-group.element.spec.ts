/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { html } from 'lit-html';
import '@cds/core/alert/register.js';
import '@cds/core/icon/register.js';
import { CdsAlert, CdsAlertGroup } from '@cds/core/alert';
import { componentIsStable, createTestElement, getComponentSlotContent, removeTestElement } from '@cds/core/test/utils';

describe('Alert groups – ', () => {
  let testElement: HTMLElement;
  let alertGroup: CdsAlertGroup;
  let alerts: NodeListOf<CdsAlert>;
  const placeholderText = 'I am an alert.';
  const alertStatusIconSelector = '.alert-status-icon';

  describe('syncAlerts: ', () => {
    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group id="default" status="success">
          <cds-alert>ohai</cds-alert>
          <cds-alert status="loading">not me</cds-alert>
          <cds-alert>ohai</cds-alert>
        </cds-alert-group>
      `);

      alertGroup = testElement.querySelector<CdsAlertGroup>('#default');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('should have an aria role of "region" by default', async () => {
      await componentIsStable(alertGroup);
      expect(alertGroup.getAttribute('role')).toBe('region');
    });

    it('should sync alerts to alert group when rendered', async () => {
      await componentIsStable(alertGroup);
      const alertGroupSize = alertGroup.size;
      const alertGroupStatus = alertGroup.status;
      const alertGroupType = alertGroup.type;

      alertGroup.querySelectorAll<CdsAlert>('cds-alert').forEach(a => {
        expect(a.size).toBe(alertGroupSize);
        expect(a.type).toBe(alertGroupType);
        if (a.status !== 'loading') {
          expect(a.status).toBe(alertGroupStatus);
        }
      });
    });

    it('should sync alerts to alert group when alerts are added to the alerts slot', async () => {
      await componentIsStable(alertGroup);
      const alertGroupSize = alertGroup.size;
      const alertGroupStatus = alertGroup.status;
      const alertGroupType = alertGroup.type;

      function addNewAlert(grp: CdsAlertGroup) {
        return new Promise(resolve => {
          setTimeout(() => {
            grp.innerHTML = grp.innerHTML + '<cds-alert id="problemchild">Muwahahahaha</cds-alert>';
            resolve('ok');
          }, 100);
        });
      }

      await addNewAlert(alertGroup);
      await componentIsStable(alertGroup);

      alertGroup.querySelectorAll<CdsAlert>('cds-alert').forEach(a => {
        expect(a.size).toBe(alertGroupSize);
        expect(a.type).toBe(alertGroupType);
        if (a.status !== 'loading') {
          expect(a.status).toBe(alertGroupStatus);
        }
      });
    });
  });

  describe('size: ', () => {
    let compactAlertGroup: CdsAlertGroup;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group id="default">
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
        <cds-alert-group id="small" size="sm">
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
      `);

      alertGroup = testElement.querySelector<CdsAlertGroup>('#default');
      compactAlertGroup = testElement.querySelector<CdsAlertGroup>('#small');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets to default size if none is defined', async () => {
      await componentIsStable(alertGroup);
      expect(alertGroup.size).toBe('default');
    });

    it('sets compact size as expected', async () => {
      await componentIsStable(compactAlertGroup);
      alerts = compactAlertGroup.querySelectorAll<CdsAlert>('cds-alert');
      alerts.forEach(a => {
        expect(a.size).toBe('sm');
      });
    });

    it('updates as expected', async () => {
      await componentIsStable(compactAlertGroup);
      compactAlertGroup.querySelectorAll<CdsAlert>('cds-alert').forEach(a => {
        expect(a.size).toBe('sm');
      });
      compactAlertGroup.size = 'default';
      await componentIsStable(compactAlertGroup);
      expect(compactAlertGroup.getAttribute('size')).toBe('default', 'Alert group size should update');
      expect(compactAlertGroup.getAttribute('size')).toBe('default', 'Alert group size should reflect changes');
      compactAlertGroup.querySelectorAll<CdsAlert>('cds-alert').forEach(a => {
        expect(a.getAttribute('size')).toBe('default');
      });
    });

    it('sets cds-layout as expected', async () => {
      const slot = compactAlertGroup.shadowRoot.querySelector('.alert-group-wrapper > [cds-layout]');
      let layout: string;

      await componentIsStable(compactAlertGroup);

      layout = slot.getAttribute('cds-layout');
      expect(layout.includes('vertical')).toBe(true, 'Compact alert group should include vertical layout');
      expect(layout.includes('wrap:none')).toBe(true, 'Compact alert group should include wrap:none layout');
      expect(layout.includes('gap:none')).toBe(true, 'Compact alert group should include gap:none layout');
      expect(layout.includes('gap:sm')).toBe(false, 'Compact alert group should NOT include gap:sm layout');
      expect(layout.includes('align:horizontal-stretch')).toBe(
        true,
        'Compact alert group should include horizontal stretch layout'
      );

      compactAlertGroup.setAttribute('size', 'default');

      await componentIsStable(compactAlertGroup);

      layout = slot.getAttribute('cds-layout');
      expect(layout.includes('vertical')).toBe(true, 'Default alert group should include vertical layout');
      expect(layout.includes('wrap:none')).toBe(true, 'Default alert group should include wrap:none layout');
      expect(layout.includes('gap:none')).toBe(false, 'Default alert group should NOT include gap:none layout');
      expect(layout.includes('gap:sm')).toBe(true, 'Default alert group should include gap:sm layout');
      expect(layout.includes('align:horizontal-stretch')).toBe(
        true,
        'Default alert group should include horizontal stretch layout'
      );
    });
  });

  describe('type: ', () => {
    let lightAlertGroup: CdsAlertGroup;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group id="default">
          <cds-alert>${placeholderText}</cds-alert>
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
        <cds-alert-group id="light" type="light">
          <cds-alert>${placeholderText}</cds-alert>
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
      `);

      alertGroup = testElement.querySelector<CdsAlertGroup>('#default');
      lightAlertGroup = testElement.querySelector<CdsAlertGroup>('#light');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets to default type if none is defined', async () => {
      await componentIsStable(alertGroup);
      expect(alertGroup.type).toBe('default');
    });

    it('sets default as expected', async () => {
      await componentIsStable(alertGroup);
      alerts = alertGroup.querySelectorAll<CdsAlert>('cds-alert');
      alerts.forEach(a => {
        expect(a.type).toBe('default');
      });
    });

    it('sets light as expected', async () => {
      await componentIsStable(lightAlertGroup);
      alerts = lightAlertGroup.querySelectorAll<CdsAlert>('cds-alert');
      alerts.forEach(a => {
        expect(a.type).toBe('light');
      });
    });

    it('updates as expected', async () => {
      alerts = lightAlertGroup.querySelectorAll<CdsAlert>('cds-alert');
      await componentIsStable(lightAlertGroup);
      lightAlertGroup.type = 'default';
      await componentIsStable(lightAlertGroup);
      alerts.forEach(a => {
        expect(a.type).toBe('default', 'updates alert group type to default as expected');
        expect(a.type).toBe('default', 'reflects alert group type attribute when changed to default as expected');
      });
      lightAlertGroup.type = 'light';
      await componentIsStable(lightAlertGroup);
      expect(lightAlertGroup.type).toBe(
        'light',
        'reflects alert group type attribute when changed to light as expected'
      );
      alerts.forEach(a => {
        expect(a.type).toBe('light', "updates child alert's alert group type property as expected");
        expect(a.type).toBe('light', "reflects child alert's alert group type attribute as expected");
      });
    });
  });

  describe('updateBannerAlertGroupStatus: ', () => {
    let bannerAlertGroup: CdsAlertGroup;
    let bannerAlertGroupWithNoStatus: CdsAlertGroup;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group type="banner" id="bannerAlertGroup" status="warning">
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
        <cds-alert-group type="banner" id="bannerAlertGroupNoStatus">
          <cds-alert id="statusless">${placeholderText}</cds-alert>
        </cds-alert-group>
      `);

      bannerAlertGroup = testElement.querySelector('#bannerAlertGroup');
      bannerAlertGroupWithNoStatus = testElement.querySelector('#bannerAlertGroupNoStatus');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('parent alert group sets child alert status as expected', async () => {
      await componentIsStable(bannerAlertGroup);
      expect(bannerAlertGroup.status).toBe('warning');
      expect(bannerAlertGroup.querySelector<CdsAlert>('cds-alert').status).toBe('warning');
    });

    it('parent alert group does not set status if child alert status is not defined', async () => {
      await componentIsStable(bannerAlertGroupWithNoStatus);
      const childAlert = bannerAlertGroupWithNoStatus.querySelector<CdsAlert>('#statusless');
      expect(childAlert.status).toBe('default');
      expect(bannerAlertGroupWithNoStatus.getAttribute('status')).toBe('default');
    });
  });

  describe('status: ', () => {
    let defaultAlert: CdsAlert;
    let customAlert: CdsAlert;
    let loadingAlert: CdsAlert;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group>
          <cds-alert id="defaultAlert">${placeholderText}</cds-alert>
          <cds-alert id="customAlert" status="warning"><cds-icon shape="ohai"></cds-icon>${placeholderText}</cds-alert>
          <cds-alert id="loadingAlert" status="loading">${placeholderText}</cds-alert>
        </cds-alert-group>
      `);

      alertGroup = testElement.querySelector<CdsAlertGroup>('cds-alert-group');
      defaultAlert = alertGroup.querySelector('#defaultAlert');
      customAlert = alertGroup.querySelector('#customAlert');
      loadingAlert = alertGroup.querySelector('#loadingAlert');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('falls through if no status is defined', async () => {
      await componentIsStable(alertGroup);
      const customAlertSlotContent = getComponentSlotContent(customAlert);
      const loadingAlertSlotContent = getComponentSlotContent(loadingAlert);
      expect(alertGroup.status).toBe('default');
      expect(defaultAlert.shadowRoot.querySelector(alertStatusIconSelector).getAttribute('shape')).toBe(
        'info-standard',
        'does not override child alert icon shapes if status is not defined'
      );
      expect(customAlertSlotContent['alert-icon'].includes('cds-icon shape="ohai"')).toBe(
        true,
        'does not override child alert custom icon shapes'
      );
      expect(loadingAlert.shadowRoot.querySelector(alertStatusIconSelector)).toBe(
        null,
        'does not override child alert loading status pt. 1'
      );
      expect(loadingAlertSlotContent['alert-icon']).toBeUndefined('does not override child alert loading status pt. 1');
      expect(loadingAlert.shadowRoot.querySelectorAll('.alert-spinner').length > 0).toBe(
        true,
        'does not override child alert loading status pt. 2'
      );
    });

    it('updates status as expected', async () => {
      await componentIsStable(alertGroup);
      alertGroup.status = 'danger';
      await componentIsStable(alertGroup);
      expect(alertGroup.status).toBe('danger', 'updates alert group status as expected');
      expect(alertGroup.getAttribute('status')).toBe('danger', 'reflects alert group status as expected');
      expect(defaultAlert.status).toBe('danger', 'updates child alerts whose status is not set to loading pt. 1');
      expect(defaultAlert.shadowRoot.querySelector(alertStatusIconSelector).getAttribute('shape')).toBe(
        'error-standard',
        'updates child alert icon shape when child alert is relying on alert status to display icon'
      );
      const customAlertSlotContent = getComponentSlotContent(customAlert);
      expect(customAlert.status).toBe('danger', 'updates child alerts whose status is not set to loading pt. 1');
      expect(customAlertSlotContent['alert-icon']).toBeDefined();
      expect(customAlertSlotContent['alert-icon'].includes('cds-icon shape="ohai"')).toBe(
        true,
        'does not override child alert custom icon shapes even when child alert inherits alert group status'
      );
      expect(loadingAlert.status).toBe('loading', 'does not update status of child alerts with a loading status');
      expect(loadingAlert.shadowRoot.querySelector(alertStatusIconSelector)).toBe(
        null,
        'does not update icon shape of child alerts with a loading status pt. 1'
      );
      expect(loadingAlert.shadowRoot.querySelectorAll('.alert-spinner').length > 0).toBe(
        true,
        'does not update icon shape of child alerts with a loading status pt. 2'
      );
    });
  });

  describe('with pager: ', () => {
    let alertGroup: CdsAlertGroup;
    let alertGroupWithPager: CdsAlertGroup;
    let pager: HTMLElement;

    beforeEach(async () => {
      testElement = await createTestElement(html`
        <cds-alert-group id="noPager" type="banner">
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
        <cds-alert-group id="hasPager" type="banner">
          <div id="pager" class="pager">Pager Here</div>
          <cds-alert>${placeholderText}</cds-alert>
        </cds-alert-group>
      `);

      alertGroup = testElement.querySelector<CdsAlertGroup>('#noPager');
      alertGroupWithPager = testElement.querySelector<CdsAlertGroup>('#hasPager');
      pager = testElement.querySelector<HTMLElement>('#pager');
    });

    afterEach(() => {
      removeTestElement(testElement);
    });

    it('sets layouts, slots, and classnames as expected if no pager is present', async () => {
      await componentIsStable(alertGroup);
      const hostWrapper = alertGroup.shadowRoot.querySelector<HTMLElement>('.private-host');
      expect(hostWrapper).not.toBeNull('private-host element should exist');
      const hostWrapperLayouts = hostWrapper.getAttribute('cds-layout').split(' ');
      expect(hostWrapper.classList.contains('no-pager')).toBe(true, 'private-host element has no-pager classname');
      expect(hostWrapperLayouts.indexOf('horizontal') > -1).toBe(true, 'private-host element has horizontal layout');
      expect(hostWrapperLayouts.indexOf('wrap:none') > -1).toBe(
        false,
        'private-host element does NOT have wrap:none layout'
      );
    });

    it('sets layouts, slots, and classnames as expected if pager is present', async () => {
      await componentIsStable(alertGroupWithPager);
      const hostWrapper = alertGroupWithPager.shadowRoot.querySelector<HTMLElement>('.private-host');
      expect(hostWrapper).not.toBeNull('private-host element should exist');
      const hostWrapperLayouts = hostWrapper.getAttribute('cds-layout').split(' ');
      expect(hostWrapper.classList.contains('no-pager')).toBe(
        false,
        'private-host element does NOT have no-pager classname'
      );
      expect(hostWrapperLayouts.indexOf('horizontal') > -1).toBe(true, 'private-host element has horizontal layout');
      expect(hostWrapperLayouts.indexOf('wrap:none') > -1).toBe(true, 'private-host element has wrap:none layout');
      expect(pager.hasAttribute('slot') && pager.getAttribute('slot') === 'pager').toBe(
        true,
        'sets slot for pager as expected'
      );
    });
  });
});
