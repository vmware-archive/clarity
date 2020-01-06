/*
 * Copyright (c) 2016-2020 VMware, Inc. All Rights Reserved.
 * This software is released under MIT license.
 * The full license information can be found in LICENSE in the root directory of this project.
 */

import { getDefaultOptions } from './property';

describe('@property decorator defaults', () => {
  it('should ignore empty options', () => {
    expect(getDefaultOptions(undefined as any)).toBe(undefined);
  });

  it('should allow defaults to be overridden', () => {
    expect(getDefaultOptions({ type: String, reflect: false }).reflect).toBe(false);
  });

  it('should reflect properties into attributes for only primitive types', () => {
    expect(getDefaultOptions({ type: String }).reflect).toBe(true);
    expect(getDefaultOptions({ type: Number }).reflect).toBe(true);
    expect(getDefaultOptions({ type: Boolean }).reflect).toBe(true);

    expect(getDefaultOptions({ type: Object }).reflect).toBe(false);
    expect(getDefaultOptions({ type: Array }).reflect).toBe(false);
    expect(getDefaultOptions({ type: Date }).reflect).toBe(false);
  });

  it('should accept boolean attributes with the value of "false"', () => {
    const booleanConverter: any = getDefaultOptions({ type: Boolean }).converter;
    expect(booleanConverter.fromAttribute('false')).toBe(false);
    expect(booleanConverter.fromAttribute('true')).toBe(true);
    expect(booleanConverter.fromAttribute('')).toBe(true);
  });

  it('should parse dates from attributes', () => {
    const dateConverter: any = getDefaultOptions({ type: Date }).converter;
    const date: Date = dateConverter.fromAttribute('2020-01-02');
    expect(date.toISOString()).toBe('2020-01-02T00:00:00.000Z');
  });
});
