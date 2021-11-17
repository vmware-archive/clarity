/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import {
  customElement,
  i18n,
  getI18nValues,
  getI18nUpdateStrategy,
  I18nService,
  I18nElement,
} from '@cds/core/internal';
import { html, LitElement } from 'lit';
import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';

const i18nValues = {
  open: 'Open my element',
  close: 'Close my element',
};

/** @element test-18n-element */
@customElement('test-18n-element')
class TestI18nElement extends LitElement {
  @i18n() i18n = i18nValues;

  render() {
    return html`<slot></slot>`;
  }
}

/** @element test-alert-18n-element */
@customElement('test-alert-18n-element')
class TestAlertI18nElement extends LitElement {
  @i18n() i18n: Record<string, any> = I18nService.keys.alert;

  greeting = 'hello';

  render() {
    return html`<p>ohai</p>`;
  }
}

describe('i18n decorator', () => {
  let testElement: HTMLElement;
  let component: TestI18nElement;
  const closeText = 'Close my example element';

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-18n-element></test-18n-element> `);
    component = testElement.querySelector<TestI18nElement>('test-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should allow setting values for i18n', () => {
    expect(component.i18n).toEqual(i18nValues);
  });

  it('should allow setting values for i18n through cds-i18n attribute', async () => {
    await componentIsStable(component);
    component.setAttribute('cds-i18n', `{ "close": "${closeText}" }`);
    await componentIsStable(component);
    expect(component.i18n.close).toEqual(closeText);
    component.setAttribute('cds-i18n', `{ "close": "ohai" }`);
    await componentIsStable(component);
    expect(component.i18n.close).toEqual('ohai', 'double set i18n');
  });
});

describe('i18n overrides: ', () => {
  let testElement: HTMLElement;
  let component: TestAlertI18nElement;

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-alert-18n-element></test-alert-18n-element> `);
    component = testElement.querySelector<TestAlertI18nElement>('test-alert-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('picks up alert i18n as expected', () => {
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('Close');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });

  it('overrides from cds-i18n attr as expected, even partially', async () => {
    component.setAttribute('cds-i18n', '{ "closeButtonAriaLabel": "${greeting} world" }');
    await componentIsStable(component);
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('hello world');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });

  it('overrides from i18n as expected, even partially', async () => {
    component.i18n = { closeButtonAriaLabel: '${greeting} from the other side...' };
    await componentIsStable(component);
    const testMe = component.i18n;
    expect(testMe.closeButtonAriaLabel).toBe('hello from the other side...');
    expect(testMe.loading).toBe('Loading');
    expect(testMe.success).toBe('Success');
  });
});

describe('helpers', () => {
  let testElement: HTMLElement;
  let component: TestAlertI18nElement;
  const closeText = 'bye yall';

  beforeEach(async () => {
    testElement = await createTestElement(html` <test-alert-18n-element></test-alert-18n-element> `);
    component = testElement.querySelector<TestAlertI18nElement>('test-alert-18n-element');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  describe('getI18nValues()', () => {
    it('should return values if not empty', () => {
      const testMe = getI18nValues({ go: 'niners' }, (component as unknown) as I18nElement);
      expect(testMe).toEqual({ go: 'niners' });
    });

    it('should try to lookup string attr if passed empty', async () => {
      component.setAttribute('cds-i18n', '{ "greet": "ohai" }');
      await componentIsStable(component);
      const testMe = getI18nValues(void 0, (component as unknown) as I18nElement);
      expect(testMe).toEqual({ greet: 'ohai' });
    });

    it('should return empty obj and warn if it cannot parse the attr value', async () => {
      component.i18n = null;
      await componentIsStable(component);
      component.setAttribute('cds-i18n', '{ notAJson: "wat" }');
      const testMe = getI18nValues(void 0, (component as unknown) as I18nElement);
      expect(testMe).toEqual({});
    });

    it('should return empty obj and warn if passed empty and attr is empty too', async () => {
      component.i18n = null;
      await componentIsStable(component);
      const testMe = getI18nValues(void 0, (component as unknown) as I18nElement);
      expect(testMe).toEqual({});
    });
  });

  describe('getI18nUpdateStrategy()', () => {
    it('should tell us not to update if the new key is nil and old/new values are the same', () => {
      const values = { closeButtonAriaLabel: closeText + '' };
      const testEmpty = getI18nUpdateStrategy('', 'alert', { ...values }, { ...values });
      const testNull = getI18nUpdateStrategy(null, 'alert', { ...values }, { ...values });
      const testUndefined = getI18nUpdateStrategy(void 0, 'alert', { ...values }, { ...values });
      const expected = { update: false };
      expect(testEmpty).toEqual(expected);
      expect(testNull).toEqual(expected);
      expect(testUndefined).toEqual(expected);
    });

    it('should tell us not to update if sent a new key that is the same as the old key', () => {
      const values = { closeButtonAriaLabel: closeText + '' };
      const testMe = getI18nUpdateStrategy('alert', 'alert', { ...values }, I18nService.keys.alert);
      expect(testMe.update).toBe(false);
      expect(testMe.key).toBeUndefined();
      expect(testMe.values).toEqual({});
    });

    it('should tell us to update values but not keys if old/new values do not match', () => {
      const values = { closeButtonAriaLabel: closeText + '' };
      const testMe = getI18nUpdateStrategy(null, 'alert', { ...values }, I18nService.keys.alert);

      expect(testMe.update).toBe(true);
      expect(testMe.key).toBeUndefined();
      expect(testMe.values).toEqual({ ...values });
    });

    it('should handle bad input', () => {
      const testMe = getI18nUpdateStrategy(void 0, 'alert', void 0, void 0);
      const expected = { update: false };
      expect(testMe).toEqual(expected);
    });
  });
});
