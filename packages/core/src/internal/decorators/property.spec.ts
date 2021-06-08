/*
 * Copyright (c) 2016-2021 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { componentIsStable, createTestElement, removeTestElement } from '@cds/core/test';
import { html, LitElement } from 'lit';
import { registerElementSafely } from '../utils/register.js';
import { getDefaultOptions, requirePropertyCheck, state } from './property.js';

const prop = 'prop';

describe('@property decorator defaults', () => {
  it('should ignore unmatched types', () => {
    const config = { type: 'unknown' };
    expect(getDefaultOptions(prop, config)).toEqual(config);
  });

  it('should allow defaults to be overridden', () => {
    expect(getDefaultOptions(prop, { type: String, reflect: false }).reflect).toBe(false);
  });

  it('should reflect properties into attributes for only primitive types', () => {
    expect(getDefaultOptions(prop, { type: String }).reflect).toBe(true);
    expect(getDefaultOptions(prop, { type: Number }).reflect).toBe(true);
    expect(getDefaultOptions(prop, { type: Boolean }).reflect).toBe(true);

    expect(getDefaultOptions(prop, { type: Object }).reflect).toBe(false);
    expect(getDefaultOptions(prop, { type: Array }).reflect).toBe(false);
    expect(getDefaultOptions(prop, { type: Date }).reflect).toBe(false);
  });

  it('should accept boolean attributes with the value of "false"', () => {
    const booleanConverter: any = getDefaultOptions(prop, { type: Boolean }).converter;
    expect(booleanConverter.fromAttribute('false')).toBe(false);
    expect(booleanConverter.fromAttribute('true')).toBe(true);
    expect(booleanConverter.fromAttribute('')).toBe(true);
  });

  it('should parse dates from attributes', () => {
    const dateConverter: any = getDefaultOptions(prop, { type: Date }).converter;
    const date: Date = dateConverter.fromAttribute('2020-01-02');
    expect(date.toISOString()).toBe('2020-01-02T00:00:00.000Z');
  });

  it('should auto format property names to appropriate attribute name', () => {
    expect(getDefaultOptions('propName', { type: Number }).attribute).toBe('prop-name');
  });

  it('should remove attributes when string type is set to null or undefined', () => {
    const stringConverter: any = getDefaultOptions(prop, { type: String }).converter;
    expect(stringConverter.toAttribute(null)).toBe(null);
    expect(stringConverter.toAttribute(undefined)).toBe(null);
    expect(stringConverter.toAttribute('test')).toBe('test');
  });

  it('should allow properties to be required and error', () => {
    class Proto {
      testProp: undefined;
      tagName = 'cds-test-error';
      firstUpdated() {
        // do nothing
      }
    }

    requirePropertyCheck(Proto.prototype, 'testProp', { type: String, required: 'error' });

    let err: string;

    try {
      new Proto().firstUpdated();
    } catch (error) {
      err = error.toString();
    }

    expect(err).toContain('Error: testProp is required to use cds-test-error component.');
  });

  it('should allow properties to be required and warn', () => {
    // remove Jasmine from window as log service wont log during tests by default.
    const jasmine = window.jasmine;
    window.jasmine = undefined;
    spyOn(console, 'warn');

    class Proto {
      test: 'value';
      tagName = 'cds-test-warning';
      firstUpdated() {
        // do nothing
      }
    }

    const obj = new Proto();
    requirePropertyCheck.apply(obj, [Proto.prototype, 'test', { type: String, required: 'warning' }]);

    obj.test = undefined;
    obj.firstUpdated();
    expect(console.warn).toHaveBeenCalled();

    window.jasmine = jasmine;
  });
});

/** @element test-internal-prop-decorator */
export class TestElement extends LitElement {
  @state() protected one = 'one';
  @state({ type: String, reflect: true }) protected two = 'two';
  @state({ type: String, reflect: true, attribute: 'three' }) protected three = 'three';
}

registerElementSafely('test-internal-prop-decorator', TestElement);

describe('internal property decorator', () => {
  let testElement: HTMLElement;
  let component: TestElement;

  beforeEach(async () => {
    testElement = await createTestElement(html`<test-internal-prop-decorator></test-internal-prop-decorator>`);
    component = testElement.querySelector<TestElement>('test-internal-prop-decorator');
  });

  afterEach(() => {
    removeTestElement(testElement);
  });

  it('should prefix internal host style attrs', async () => {
    await componentIsStable(component);

    expect(component.hasAttribute('one')).toBe(false);
    expect(component.hasAttribute('_two')).toBe(true);
    expect(component.hasAttribute('three')).toBe(true);
  });
});
